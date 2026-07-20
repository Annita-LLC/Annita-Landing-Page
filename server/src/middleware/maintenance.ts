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
    const adminPaths = ['/admin/status', '/admin/request-access', '/admin/code/request', '/admin/code/verify', '/admin/maintenance/toggle', '/admin/maintenance/schedule', '/admin/maintenance/current', '/maintenance/status'];
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
        'The Annita ecosystem is currently undergoing emergency maintenance. Please check back soon.',
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
      'The Annita ecosystem is currently undergoing scheduled maintenance to bring you a better experience. We\'ll be back shortly.',
      state.endTime
    );

    res.set('Retry-After', '300');
    res.status(503).type('html').send(maintenanceHtml);
  };
}

function renderMaintenancePage(title: string, message: string, endTime: Date | null): string {
  const remaining = endTime && endTime > new Date()
    ? `<div style="margin:24px 0;">
         <div style="display:inline-block;background:#0F1729;border:1px solid rgba(245,158,11,0.2);border-radius:16px;padding:24px 32px;">
           <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.2em;color:#F59E0B;margin-bottom:12px;font-family:monospace;">Estimated Time Remaining</div>
           <div id="countdown" style="font-size:36px;font-weight:800;color:#F1F5F9;font-family:monospace;letter-spacing:0.05em;">Calculating...</div>
         </div>
       </div>
       <script>
         (function(){
           var end = new Date("${endTime.toISOString()}").getTime();
           var el = document.getElementById("countdown");
           var pctEl = document.getElementById("progress-pct");
           var fillEl = document.getElementById("progress-fill");
           var estimatedStart = end - 2 * 60 * 60 * 1000;
           var totalDuration = end - estimatedStart;
           function pad(n){ return String(Math.max(0,n)).padStart(2,'0'); }
           function tick(){
             var now = Date.now();
             var diff = end - now;
             var elapsed = now - estimatedStart;
             var pct = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
             if(diff <= 0){ el.textContent = "Completing soon..."; pctEl.textContent = "100% complete"; fillEl.style.width = "100%"; return; }
             var h = Math.floor(diff / 3600000);
             var m = Math.floor((diff % 3600000) / 60000);
             var s = Math.floor((diff % 60000) / 1000);
             el.textContent = pad(h) + " : " + pad(m) + " : " + pad(s);
             pctEl.textContent = Math.round(pct) + "% complete";
             fillEl.style.width = pct + "%";
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
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
    * { box-sizing:border-box;margin:0;padding:0; }
    body { background:#0A0F1C;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#F1F5F9;-webkit-font-smoothing:antialiased;display:flex;align-items:center;justify-content:center;min-height:100vh;overflow-x:hidden; }
    .grid-bg { position:fixed;inset:0;background-size:40px 40px;background-image:linear-gradient(to right,rgba(0,194,138,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,194,138,0.04) 1px,transparent 1px);pointer-events:none; }
    .glow { position:fixed;inset:0;background:radial-gradient(ellipse at center,rgba(245,158,11,0.08) 0%,transparent 70%);pointer-events:none; }
    .container { max-width:560px;width:100%;padding:40px 24px;text-align:center;position:relative;z-index:10; }
    .logo { display:inline-flex;align-items:center;gap:10px;margin-bottom:32px; }
    .logo-dot { width:8px;height:8px;background:#00C28A;border-radius:50%;box-shadow:0 0 8px rgba(0,194,138,0.6); }
    .logo-text { font-size:22px;font-weight:800;color:#F1F5F9;letter-spacing:0.04em; }
    .logo-accent { color:#00C28A; }
    .icon-wrap { width:80px;height:80px;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 28px; }
    .icon-wrap svg { width:40px;height:40px; }
    .badge { display:inline-flex;align-items:center;gap:7px;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.2);border-radius:100px;padding:6px 16px;margin-bottom:24px; }
    .badge-dot { width:6px;height:6px;background:#F59E0B;border-radius:50%;animation:blink 2s ease-in-out infinite; }
    @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
    .badge-text { font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:#F59E0B;font-family:monospace; }
    .title { font-size:28px;font-weight:800;color:#F1F5F9;margin-bottom:12px;letter-spacing:-0.02em; }
    .message { font-size:15px;color:#CBD5E1;line-height:1.7;margin-bottom:8px;max-width:420px;margin-left:auto;margin-right:auto; }
    .submessage { font-size:13px;color:#64748B;margin-bottom:28px; }
    .divider { border:none;border-top:1px solid #1E293B;margin:24px 0; }
    .contact { font-size:13px;color:#CBD5E1; }
    .contact a { color:#00C28A;text-decoration:none;font-weight:600; }
    .contact a:hover { text-decoration:underline; }
    .contact .sep { margin:0 8px;opacity:0.4; }
    .footer { margin-top:32px;font-size:11px;color:#475569; }
    .footer-dot { display:inline-block;width:5px;height:5px;background:#00C28A;border-radius:50%;vertical-align:middle;margin-right:6px;margin-bottom:2px; }
    .tech-deco { margin-top:32px;font-size:9px;font-family:monospace;text-transform:uppercase;letter-spacing:0.2em;color:#475569; }
    .tech-deco-dot { display:inline-block;width:6px;height:6px;background:#F59E0B;border-radius:50%;margin-left:8px;vertical-align:middle;animation:blink 1.5s ease-in-out infinite; }
    .progress-wrap { margin:24px 0; }
    .progress-top { display:flex;justify-content:space-between;font-size:10px;font-family:monospace;color:#64748B;margin-bottom:8px; }
    .progress-track { height:8px;background:#1F2937;border-radius:100px;overflow:hidden;position:relative; }
    .progress-fill { height:100%;background:linear-gradient(90deg,#F59E0B,#00C28A);border-radius:100px;width:0%;transition:width 1s ease-in-out;position:relative;overflow:hidden; }
    .refresh-btn { display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 48px;border-radius:12px;font-size:14px;font-weight:600;border:none;cursor:pointer;background:#00C28A;color:#0A0F1C;transition:opacity 0.2s;min-width:240px;margin-top:8px; }
    .refresh-btn:hover { opacity:0.9; }
  </style>
</head>
<body>
  <div class="grid-bg"></div>
  <div class="glow"></div>
  <div class="container">
    <div class="logo">
      <span class="logo-dot"></span>
      <span class="logo-text">Annita<span class="logo-accent">.</span></span>
    </div>
    <div class="badge">
      <span class="badge-dot"></span>
      <span class="badge-text">SYSTEM_STATUS // MAINTENANCE</span>
    </div>
    <div class="icon-wrap">
      <svg viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    </div>
    <h1 class="title">${title}</h1>
    <p class="message">${message}</p>
    <p class="submessage">Estimated time: A few minutes. Thank you for your patience.</p>
    ${remaining}
    ${endTime && endTime > new Date() ? `
    <div class="progress-wrap">
      <div class="progress-top">
        <span>Maintenance Progress</span>
        <span id="progress-pct">0% complete</span>
      </div>
      <div class="progress-track">
        <div id="progress-fill"></div>
      </div>
    </div>
    ` : ''}
    <button class="refresh-btn" onclick="window.location.reload()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
      Refresh
    </button>
    <hr class="divider">
    <p class="contact">
      For urgent matters:
      <span class="sep">·</span>
      <a href="mailto:info@an-nita.com">info@an-nita.com</a>
      <span class="sep">·</span>
      <a href="tel:+231775057227">+231 77 505 7227</a>
    </p>
    <div class="tech-deco">
      ANNITA_ECOSYSTEM // STATUS_NODE<span class="tech-deco-dot"></span>
    </div>
    <div class="footer">
      <span class="footer-dot"></span>&copy; ${new Date().getFullYear()} Annita LLC &middot; Built in Liberia. Built for the World.
    </div>
  </div>
</body>
</html>`;
}