import type { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma.js';
import { logger } from '../lib/logger.js';


let manualMaintenanceActive = false;
let maintenanceReason = '';
let maintenanceEndTime: Date | null = null;

export function setMaintenanceMode(active: boolean, reason?: string, endTime?: Date): void {
  manualMaintenanceActive = active;
  maintenanceReason = reason || '';
  maintenanceEndTime = endTime || null;
  logger.info(active ? 'Maintenance mode activated' : 'Maintenance mode deactivated', { reason: maintenanceReason || undefined, endTime: maintenanceEndTime?.toISOString() });
}

export function getMaintenanceState(): { active: boolean; reason: string; endTime: Date | null } {
  return {
    active: manualMaintenanceActive,
    reason: maintenanceReason,
    endTime: maintenanceEndTime,
  };
}

async function checkScheduledMaintenance(): Promise<boolean> {
  try {
    const now = new Date();
    const windows = await prisma.maintenanceWindow.findMany({
      where: {
        isActive: true,
        isScheduled: true,
        startTime: { lte: now },
        endTime: { gte: now },
      },
    });
    return windows.length > 0;
  } catch {
    return false;
  }
}

export async function isInMaintenance(): Promise<{ active: boolean; reason: string; endTime: Date | null }> {
  const scheduled = await checkScheduledMaintenance();
  const active = manualMaintenanceActive || scheduled;

  if (active) {
    let reason = maintenanceReason;
    let endTime = maintenanceEndTime;

    if (scheduled) {
      try {
        const now = new Date();
        const window_ = await prisma.maintenanceWindow.findFirst({
          where: {
            isActive: true,
            isScheduled: true,
            startTime: { lte: now },
            endTime: { gte: now },
          },
          orderBy: { endTime: 'asc' },
        });
        if (window_) {
          reason = reason || window_.title;
          if (window_.endTime && (!endTime || window_.endTime < endTime)) {
            endTime = window_.endTime;
          }
        }
      } catch { /* ignore */ }
    }

    return { active: true, reason, endTime };
  }

  return { active: false, reason: '', endTime: null };
}

export function maintenanceMiddleware() {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const adminPaths = ['/admin/status', '/admin/request-access', '/admin/maintenance/toggle', '/admin/maintenance/schedule', '/admin/maintenance/current'];
    const isAdminRoute = adminPaths.some(p => req.path.startsWith(p));
    const isHealthCheck = req.path === '/health';

    if (isAdminRoute || isHealthCheck) {
      next();
      return;
    }

    const emergencyShutdown = process.env.ADMIN_EMERGENCY_SHUTDOWN === 'true';
    if (emergencyShutdown) {
      const maintenanceHtml = renderMaintenancePage(
        'Emergency Maintenance',
        'Annita is currently undergoing emergency maintenance. Please check back soon.',
        null
      );
      res.status(503).type('html').send(maintenanceHtml);
      return;
    }

    const state = await isInMaintenance();
    if (!state.active) {
      next();
      return;
    }

    const maintenanceHtml = renderMaintenancePage(
      state.reason || 'Scheduled Maintenance',
      'We are currently performing scheduled maintenance to improve our services. We apologize for the inconvenience.',
      state.endTime
    );

    res.set('Retry-After', '300');
    res.status(503).type('html').send(maintenanceHtml);
  };
}

function renderMaintenancePage(title: string, message: string, endTime: Date | null): string {
  const estimatedCompletion = endTime
    ? `<p style="font-size:14px;color:#8B9CB6;margin-top:8px;">
         Estimated completion: <strong style="color:#00C28A">${endTime.toUTCString()}</strong>
       </p>`
    : '';

  const remaining = endTime && endTime > new Date()
    ? `<div style="text-align:center;margin:20px 0;">
         <div style="display:inline-block;background:rgba(0,194,138,0.12);border:1px solid rgba(0,194,138,0.25);border-radius:12px;padding:20px 32px;">
           <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:#00C28A;margin-bottom:8px;">Time Remaining</div>
           <div id="countdown" style="font-size:32px;font-weight:900;color:#F0F4FF;font-family:monospace;">Calculating...</div>
         </div>
       </div>
       <script>
         (function(){
           var end = new Date("${endTime.toISOString()}").getTime();
           var el = document.getElementById("countdown");
           function tick(){
             var now = Date.now();
             var diff = end - now;
             if(diff <= 0){ el.textContent = "Completing soon..."; return; }
             var h = Math.floor(diff / 3600000);
             var m = Math.floor((diff % 3600000) / 60000);
             var s = Math.floor((diff % 60000) / 1000);
             el.textContent = (h ? h + "h " : "") + m + "m " + s + "s";
           }
           tick();
           setInterval(tick, 1000);
         })();
       </script>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Annita LLC</title>
  <style>
    * { box-sizing:border-box;margin:0;padding:0; }
    body { background:#0A0F1E;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#F0F4FF;-webkit-font-smoothing:antialiased;display:flex;align-items:center;justify-content:center;min-height:100vh; }
    .container { max-width:560px;width:100%;padding:40px 24px;text-align:center; }
    .logo { display:inline-flex;align-items:center;gap:10px;margin-bottom:32px; }
    .logo-dot { width:8px;height:8px;background:#00C28A;border-radius:50%; }
    .logo-text { font-size:22px;font-weight:800;color:#FFFFFF;letter-spacing:0.04em; }
    .logo-accent { color:#00C28A; }
    .card { background:#111827;border:1px solid #1E3A5F;border-radius:16px;padding:40px 32px; }
    .icon { font-size:48px;margin-bottom:16px; }
    .title { font-size:22px;font-weight:800;color:#FFFFFF;margin-bottom:12px; }
    .message { font-size:14px;color:#8B9CB6;line-height:1.7;margin-bottom:24px; }
    .divider { border:none;border-top:1px solid #1E3A5F;margin:24px 0; }
    .contact-line { font-size:13px;color:#8B9CB6; }
    .contact-line a { color:#00C28A;text-decoration:none; }
    .footer { margin-top:32px;font-size:11px;color:#4A5568; }
    .status-dot { display:inline-block;width:6px;height:6px;background:#00C28A;border-radius:50%;margin-right:6px;vertical-align:middle; }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <span class="logo-dot"></span>
      <span class="logo-text">Annita<span class="logo-accent">.</span></span>
    </div>
    <div class="card">
      <div class="icon">🛠️</div>
      <h1 class="title">${title}</h1>
      <p class="message">${message}</p>
      ${estimatedCompletion}
      ${remaining}
      <hr class="divider">
      <p class="contact-line">
        For urgent matters: <a href="mailto:info@an-nita.com">info@an-nita.com</a> &middot; <a href="tel:+231775057227">+231 77 505 7227</a>
      </p>
    </div>
    <div class="footer">
      <span class="status-dot"></span>&copy; ${new Date().getFullYear()} Annita LLC &middot; Built in Liberia. Built for the World.
    </div>
  </div>
</body>
</html>`;
}