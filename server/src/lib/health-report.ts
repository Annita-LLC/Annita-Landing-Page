import { prisma } from './prisma.js';
import { logger } from './logger.js';
import type { EndpointMetric, ConnectionState } from './logger.js';

interface TelemetryData {
  system: { startTime: number; requestsProcessed: number; totalErrors: number; };
  connections: { database: ConnectionState; };
  endpoints: EndpointMetric[];
}

export interface ReportData {
  uptime: number;
  totalRequests: number;
  totalErrors: number;
  errorRate: number;
  avgResponseTime: number;
  dbStatus: string;
  dbResponseTime: number | null;
  endpointMetrics: Record<string, { hits: number; errors: number; avgLatency: number; }>;
  topEndpoints: Array<{ path: string; hits: number; avgLatency: number; }>;
  recentErrors: Array<{ timestamp: string; message: string; level?: string; }>;
  reportType: string;
  date: string;
  // Optional 7-day trend arrays attached by the weekly scheduler job
  requestTrend?: number[];
  errorTrend?: number[];
}

export function collectMetrics(telemetry: TelemetryData): ReportData {
  const uptime = (Date.now() - telemetry.system.startTime) / 1000;
  const totalRequests = telemetry.system.requestsProcessed;
  const totalErrors = telemetry.system.totalErrors;
  const errorRate = totalRequests > 0 ? (totalErrors / totalRequests) * 100 : 0;

  let totalLatency = 0;
  let latencyCount = 0;
  const endpointMetrics: Record<string, { hits: number; errors: number; avgLatency: number }> = {};

  for (const ep of telemetry.endpoints) {
    const key = `${ep.method}:${ep.path}`;
    endpointMetrics[key] = { hits: ep.hits, errors: ep.errors, avgLatency: ep.avgLatency };
    if (ep.hits > 0) {
      totalLatency += ep.avgLatency * ep.hits;
      latencyCount += ep.hits;
    }
  }

  const avgResponseTime = latencyCount > 0 ? totalLatency / latencyCount : 0;

  const dbStatus = telemetry.connections.database.status;
  const dbResponseTime = telemetry.connections.database.responseTimeMs || null;

  const recentErrors: Array<{ timestamp: string; message: string; level?: string }> = [];

  // Convert endpointMetrics to sorted array for email template
  const topEndpoints = Object.entries(endpointMetrics)
    .map(([path, metrics]) => ({ path, hits: metrics.hits, avgLatency: metrics.avgLatency }))
    .sort((a, b) => b.hits - a.hits);

  return {
    uptime,
    totalRequests,
    totalErrors,
    errorRate,
    avgResponseTime,
    dbStatus,
    dbResponseTime,
    endpointMetrics,
    topEndpoints,
    recentErrors,
    reportType: 'daily',
    date: new Date().toUTCString(),
  };
}

export async function storeHealthReport(reportData: ReportData, reportType: 'daily' | 'weekly' | 'emergency'): Promise<void> {
  try {
    await prisma.systemHealthReport.create({
      data: {
        reportType,
        reportDate: new Date(),
        uptime: reportData.uptime,
        totalRequests: reportData.totalRequests,
        totalErrors: reportData.totalErrors,
        errorRate: reportData.errorRate,
        avgResponseTime: reportData.avgResponseTime,
        dbStatus: reportData.dbStatus,
        dbResponseTime: reportData.dbResponseTime,
        endpointMetrics: reportData.endpointMetrics as any,
        recentErrors: reportData.recentErrors.length > 0 ? reportData.recentErrors as any : null,
      },
    });
    logger.info('Health report stored', { reportType });
  } catch (err) {
    logger.error('Failed to store health report', err);
  }
}

export async function getRecentReports(reportType?: string, limit = 10): Promise<any[]> {
  try {
    const where: any = {};
    if (reportType) where.reportType = reportType;
    return await prisma.systemHealthReport.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  } catch {
    return [];
  }
}

export async function getActiveMaintenanceWindows(): Promise<any[]> {
  try {
    return await prisma.maintenanceWindow.findMany({
      where: { isActive: true },
      orderBy: { startTime: 'asc' },
    });
  } catch {
    return [];
  }
}

export function generateReportHtml(reportData: ReportData, reportType: string): string {
  const statusColor = reportData.dbStatus === 'CONNECTED' ? '#00C28A' : '#EF4444';
  const healthStatus = reportData.dbStatus === 'CONNECTED' && reportData.errorRate < 5 ? 'HEALTHY' : 'DEGRADED';
  const healthColor = healthStatus === 'HEALTHY' ? '#00C28A' : '#F59E0B';

  let endpointRows = '';
  for (const [key, metrics] of Object.entries(reportData.endpointMetrics)) {
    endpointRows += `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #1E3A5F;font-size:13px;color:#F0F4FF;">${key}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #1E3A5F;font-size:13px;color:#8B9CB6;text-align:center;">${metrics.hits}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #1E3A5F;font-size:13px;color:${metrics.errors > 0 ? '#EF4444' : '#8B9CB6'};text-align:center;">${metrics.errors}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #1E3A5F;font-size:13px;color:#8B9CB6;text-align:center;">${metrics.avgLatency.toFixed(1)}ms</td>
      </tr>`;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Annita — System Status Dashboard</title>
  <style>
    * { box-sizing:border-box;margin:0;padding:0; }
    body { background:#0A0F1E;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#F0F4FF;padding:24px; }
    .header { text-align:center;margin-bottom:32px; }
    .logo { font-size:20px;font-weight:800;color:#FFFFFF;letter-spacing:0.04em;margin-bottom:8px; }
    .logo-accent { color:#00C28A; }
    .badge { display:inline-block;padding:4px 14px;border-radius:100px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px; }
    .report-type { font-size:14px;color:#8B9CB6; }
    .grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:32px; }
    .card { background:#111827;border:1px solid #1E3A5F;border-radius:12px;padding:20px; }
    .card-label { font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#8B9CB6;margin-bottom:6px; }
    .card-value { font-size:28px;font-weight:900; }
    .table-card { background:#111827;border:1px solid #1E3A5F;border-radius:12px;padding:20px;margin-bottom:32px; }
    .table-title { font-size:14px;font-weight:700;color:#FFFFFF;margin-bottom:16px; }
    table { width:100%;border-collapse:collapse; }
    th { font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#8B9CB6;text-align:left;padding:8px 12px;border-bottom:1px solid #1E3A5F; }
    .footer { text-align:center;font-size:11px;color:#4A5568;margin-top:24px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">Annita<span class="logo-accent">.</span> System Status</div>
    <div class="badge" style="background:rgba(${healthColor === '#00C28A' ? '0,194,138' : '245,158,11'},0.12);border:1px solid rgba(${healthColor === '#00C28A' ? '0,194,138' : '245,158,11'},0.25);color:${healthColor};">${healthStatus}</div>
    <div class="report-type">${reportType.toUpperCase()} Report &middot; ${new Date().toUTCString()}</div>
  </div>
  <div class="grid">
    <div class="card">
      <div class="card-label">Uptime</div>
      <div class="card-value" style="color:#00C28A;">${formatUptime(reportData.uptime)}</div>
    </div>
    <div class="card">
      <div class="card-label">Total Requests</div>
      <div class="card-value" style="color:#F0F4FF;">${reportData.totalRequests.toLocaleString()}</div>
    </div>
    <div class="card">
      <div class="card-label">Total Errors</div>
      <div class="card-value" style="color:${reportData.totalErrors > 0 ? '#EF4444' : '#00C28A'};">${reportData.totalErrors}</div>
    </div>
    <div class="card">
      <div class="card-label">Error Rate</div>
      <div class="card-value" style="color:${reportData.errorRate > 5 ? '#EF4444' : reportData.errorRate > 1 ? '#F59E0B' : '#00C28A'};">${reportData.errorRate.toFixed(2)}%</div>
    </div>
    <div class="card">
      <div class="card-label">Avg Response Time</div>
      <div class="card-value" style="color:#8B9CB6;">${reportData.avgResponseTime.toFixed(1)}ms</div>
    </div>
    <div class="card">
      <div class="card-label">Database</div>
      <div class="card-value" style="color:${statusColor};font-size:18px;">${reportData.dbStatus}</div>
    </div>
  </div>
  <div class="table-card">
    <div class="table-title">Endpoint Metrics</div>
    <table>
      <thead><tr><th>Endpoint</th><th>Hits</th><th>Errors</th><th>Avg Latency</th></tr></thead>
      <tbody>${endpointRows}</tbody>
    </table>
  </div>
  <div class="footer">
    Annita LLC System Health Report &middot; Generated ${new Date().toISOString()}
  </div>
</body>
</html>`;
}

function formatUptime(seconds: number): string {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const parts: string[] = [];
  if (d > 0) parts.push(`${d}d`);
  if (h > 0) parts.push(`${h}h`);
  parts.push(`${m}m`);
  return parts.join(' ');
}