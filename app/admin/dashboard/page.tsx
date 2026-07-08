'use client';
/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║          ANNITA LLC — ADMIN DASHBOARD (CLIENT INTERACTIVE)                ║
 * ║          Secure admin status dashboard with live maintenance controls      ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

// ─── Types ──────────────────────────────────────────────────────────────────

interface SystemHealth {
  status: string;
  uptime: number;
  requestsProcessed: number;
  totalErrors: number;
  database: { status: string; responseTimeMs?: number };
}

interface EndpointMetric {
  hits: number;
  errors: number;
  avgLatency: number;
  successRate?: number;
}

interface MaintenanceWindow {
  id: number;
  title: string;
  description?: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
  reason?: string;
}

interface AuditLog {
  id: number;
  eventType: string;
  action?: string;
  result: string;
  createdAt: string;
  ipHash?: string;
}

interface AdminData {
  system: SystemHealth;
  endpoints: Record<string, EndpointMetric>;
  activeMaintenance: MaintenanceWindow[];
  recentAuditLogs: AuditLog[];
  adminEmail: string;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function formatUptime(seconds: number): string {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (d > 0) return `${d}d ${h}h ${m}m`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

function fmtTime(iso: string): string {
  return new Date(iso).toLocaleString('en-US', {
    month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
  });
}

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

// ─── Sub-components ─────────────────────────────────────────────────────────

function StatCard({ label, value, sub, color = '#F0F4FF' }: {
  label: string; value: string; sub?: string; color?: string;
}) {
  return (
    <div style={{
      background: 'linear-gradient(180deg,#111827 0%,#0D1929 100%)',
      border: '1px solid #1E3A5F',
      borderRadius: 16,
      padding: '20px 22px',
    }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B9CB6', marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ fontSize: 28, fontWeight: 900, color, lineHeight: 1, marginBottom: sub ? 4 : 0 }}>
        {value}
      </div>
      {sub && <div style={{ fontSize: 11, color: '#8B9CB6', marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

function Badge({ text, color }: { text: string; color: string }) {
  const colors: Record<string, { bg: string; border: string; text: string }> = {
    green:  { bg: 'rgba(0,194,138,0.1)',  border: 'rgba(0,194,138,0.3)',  text: '#00C28A' },
    red:    { bg: 'rgba(239,68,68,0.1)',   border: 'rgba(239,68,68,0.3)',   text: '#F87171' },
    yellow: { bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.3)',  text: '#FCD34D' },
    blue:   { bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.3)',  text: '#93C5FD' },
    gray:   { bg: 'rgba(100,116,139,0.1)', border: 'rgba(100,116,139,0.3)', text: '#94A3B8' },
  };
  const c = colors[color] || colors.gray;
  return (
    <span style={{
      background: c.bg, border: `1px solid ${c.border}`, color: c.text,
      fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
      padding: '3px 10px', borderRadius: 100, display: 'inline-block',
    }}>{text}</span>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

function AdminDashboardInner() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Maintenance toggle state
  const [toggling, setToggling] = useState(false);
  const [toggleMsg, setToggleMsg] = useState('');

  // Schedule form state
  const [schedTitle, setSchedTitle] = useState('');
  const [schedDesc, setSchedDesc] = useState('');
  const [schedStart, setSchedStart] = useState('');
  const [schedEnd, setSchedEnd] = useState('');
  const [scheduling, setScheduling] = useState(false);
  const [schedMsg, setSchedMsg] = useState('');

  const loadData = useCallback(async () => {
    if (!token) return;
    try {
      const res = await fetch(`${API}/admin/status/${token}`, { cache: 'no-store' });
      if (!res.ok) throw new Error('Invalid or expired token');
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (e: unknown) {
      setError((e as Error).message || 'Failed to load admin data');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => { loadData(); }, [loadData]);

  // Auto-refresh every 60s
  useEffect(() => {
    const id = setInterval(loadData, 60000);
    return () => clearInterval(id);
  }, [loadData]);

  async function toggleMaintenance(activate: boolean) {
    if (!token) return;
    setToggling(true);
    setToggleMsg('');
    try {
      const res = await fetch(`${API}/admin/maintenance/toggle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-token': token },
        body: JSON.stringify({
          isActive: activate,
          title: 'Manual Maintenance',
          reason: activate ? 'Admin-triggered via dashboard' : undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed');
      setToggleMsg(json.message || (activate ? 'Maintenance activated' : 'Maintenance deactivated'));
      await loadData();
    } catch (e: unknown) {
      setToggleMsg('Error: ' + ((e as Error).message || 'Unknown'));
    } finally {
      setToggling(false);
    }
  }

  async function scheduleMaintenance(e: React.FormEvent) {
    e.preventDefault();
    if (!token) return;
    setScheduling(true);
    setSchedMsg('');
    try {
      const res = await fetch(`${API}/admin/maintenance/schedule`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-token': token },
        body: JSON.stringify({
          title: schedTitle,
          description: schedDesc,
          startTime: schedStart,
          endTime: schedEnd,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed');
      setSchedMsg('✓ ' + (json.message || 'Maintenance scheduled'));
      setSchedTitle(''); setSchedDesc(''); setSchedStart(''); setSchedEnd('');
      await loadData();
    } catch (e: unknown) {
      setSchedMsg('Error: ' + ((e as Error).message || 'Unknown'));
    } finally {
      setScheduling(false);
    }
  }

  const s: React.CSSProperties = {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    background: '#0A0F1E',
    color: '#F0F4FF',
    minHeight: '100vh',
  };

  // ── States ──────────────────────────────────────────────────────────────

  if (!token) return (
    <div style={{ ...s, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
        <h1 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>Access Denied</h1>
        <p style={{ color: '#8B9CB6', fontSize: 14 }}>No admin token provided. Please use the secure link from your email.</p>
      </div>
    </div>
  );

  if (loading) return (
    <div style={{ ...s, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 48, height: 48, border: '3px solid #1E3A5F', borderTopColor: '#00C28A', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 20px' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <p style={{ color: '#8B9CB6', fontSize: 14 }}>Loading admin data…</p>
      </div>
    </div>
  );

  if (error) return (
    <div style={{ ...s, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
        <h1 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8, color: '#EF4444' }}>Authentication Failed</h1>
        <p style={{ color: '#8B9CB6', fontSize: 14, maxWidth: 360 }}>{error}</p>
        <p style={{ color: '#8B9CB6', fontSize: 13, marginTop: 8 }}>Tokens are single-use and expire after 15 minutes. Request a new link.</p>
      </div>
    </div>
  );

  if (!data) return null;

  const { system, endpoints, activeMaintenance, recentAuditLogs, adminEmail } = data;
  const maintenanceOn = activeMaintenance && activeMaintenance.length > 0;
  const errorRate = system.requestsProcessed > 0
    ? ((system.totalErrors / system.requestsProcessed) * 100).toFixed(1)
    : '0.0';

  const panelStyle: React.CSSProperties = {
    background: 'linear-gradient(180deg,#111827 0%,#0D1929 100%)',
    border: '1px solid #1E3A5F',
    borderRadius: 16,
    overflow: 'hidden',
  };
  const sectionHead: React.CSSProperties = {
    fontSize: 12, fontWeight: 700, letterSpacing: '0.12em',
    textTransform: 'uppercase', color: '#8B9CB6', padding: '16px 20px',
    borderBottom: '1px solid #1E3A5F', background: 'rgba(0,0,0,0.2)',
  };
  const inputStyle: React.CSSProperties = {
    width: '100%', background: '#0A1628', border: '1px solid #1E3A5F',
    borderRadius: 10, padding: '10px 14px', color: '#F0F4FF',
    fontSize: 13, outline: 'none', fontFamily: 'inherit',
  };
  const btnPrimary: React.CSSProperties = {
    background: '#00C28A', color: '#000', border: 'none',
    borderRadius: 100, padding: '12px 28px', fontWeight: 700,
    fontSize: 13, cursor: 'pointer', letterSpacing: '0.02em',
    transition: 'opacity 0.15s', fontFamily: 'inherit',
  };
  const btnDanger: React.CSSProperties = {
    background: 'rgba(239,68,68,0.15)', color: '#F87171',
    border: '1px solid rgba(239,68,68,0.3)',
    borderRadius: 100, padding: '12px 28px', fontWeight: 700,
    fontSize: 13, cursor: 'pointer', fontFamily: 'inherit',
    transition: 'opacity 0.15s',
  };

  return (
    <div style={s}>
      {/* Header */}
      <div style={{ background: '#0A1628', borderBottom: '1px solid #1E3A5F' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 8, height: 8, background: '#00C28A', borderRadius: '50%', boxShadow: '0 0 8px rgba(0,194,138,0.8)' }} />
            <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: '0.04em' }}>
              Annita<span style={{ color: '#00C28A' }}>.</span>
            </span>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#00C28A', letterSpacing: '0.15em', textTransform: 'uppercase', marginLeft: 4, background: 'rgba(0,194,138,0.1)', border: '1px solid rgba(0,194,138,0.25)', borderRadius: 100, padding: '3px 10px' }}>
              Admin
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            {maintenanceOn && (
              <span style={{ fontSize: 11, fontWeight: 700, color: '#F59E0B', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 100, padding: '4px 12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                ⚠ Maintenance Active
              </span>
            )}
            <span style={{ fontSize: 12, color: '#8B9CB6' }}>
              🔐 {adminEmail}
            </span>
            <button
              onClick={loadData}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #1E3A5F', borderRadius: 8, padding: '6px 14px', color: '#8B9CB6', fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}
            >
              ↻ Refresh
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>

        {/* ── System Stats ─────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 16 }}>System Health</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            <StatCard
              label="Status"
              value={system.status}
              color={system.status === 'HEALTHY' ? '#00C28A' : system.status === 'DEGRADED' ? '#F59E0B' : '#EF4444'}
            />
            <StatCard
              label="Uptime"
              value={formatUptime(system.uptime)}
              sub="since last restart"
            />
            <StatCard
              label="Requests"
              value={system.requestsProcessed.toLocaleString()}
              sub="total processed"
            />
            <StatCard
              label="Error Rate"
              value={`${errorRate}%`}
              sub={`${system.totalErrors} total errors`}
              color={parseFloat(errorRate) < 1 ? '#00C28A' : parseFloat(errorRate) < 5 ? '#F59E0B' : '#EF4444'}
            />
            <StatCard
              label="Database"
              value={system.database.status}
              sub={system.database.responseTimeMs ? `${system.database.responseTimeMs.toFixed(1)}ms` : 'No latency data'}
              color={system.database.status === 'CONNECTED' ? '#00C28A' : '#EF4444'}
            />
          </div>
        </div>

        {/* ── Maintenance Controls ──────────────────────────────────────────── */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 16 }}>Maintenance Controls</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

            {/* Toggle */}
            <div style={panelStyle}>
              <div style={sectionHead}>Quick Toggle</div>
              <div style={{ padding: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, background: maintenanceOn ? 'rgba(245,158,11,0.08)' : 'rgba(0,194,138,0.06)', border: `1px solid ${maintenanceOn ? 'rgba(245,158,11,0.25)' : 'rgba(0,194,138,0.2)'}`, borderRadius: 12, padding: '12px 16px' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: maintenanceOn ? '#F59E0B' : '#00C28A', animation: maintenanceOn ? 'pulse 1.5s infinite' : 'none' }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: maintenanceOn ? '#F59E0B' : '#00C28A' }}>
                    {maintenanceOn ? 'Maintenance is ACTIVE' : 'All Systems Operational'}
                  </span>
                </div>
                <style>{`@keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.4} }`}</style>

                <div style={{ display: 'flex', gap: 10 }}>
                  <button
                    onClick={() => toggleMaintenance(true)}
                    disabled={toggling || maintenanceOn}
                    style={{ ...btnDanger, opacity: (toggling || maintenanceOn) ? 0.5 : 1, flex: 1 }}
                  >
                    {toggling ? 'Working…' : '🔴 Activate'}
                  </button>
                  <button
                    onClick={() => toggleMaintenance(false)}
                    disabled={toggling || !maintenanceOn}
                    style={{ ...btnPrimary, opacity: (toggling || !maintenanceOn) ? 0.5 : 1, flex: 1 }}
                  >
                    {toggling ? 'Working…' : '🟢 Deactivate'}
                  </button>
                </div>
                {toggleMsg && (
                  <div style={{ marginTop: 12, fontSize: 12, color: toggleMsg.startsWith('Error') ? '#F87171' : '#00C28A', background: 'rgba(0,0,0,0.2)', borderRadius: 8, padding: '8px 12px' }}>
                    {toggleMsg}
                  </div>
                )}
              </div>
            </div>

            {/* Schedule */}
            <div style={panelStyle}>
              <div style={sectionHead}>Schedule Maintenance Window</div>
              <form onSubmit={scheduleMaintenance} style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <input
                  style={inputStyle}
                  placeholder="Window title (e.g. DB Migration)"
                  value={schedTitle}
                  onChange={e => setSchedTitle(e.target.value)}
                  required
                />
                <input
                  style={inputStyle}
                  placeholder="Description (optional)"
                  value={schedDesc}
                  onChange={e => setSchedDesc(e.target.value)}
                />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  <div>
                    <div style={{ fontSize: 10, color: '#8B9CB6', marginBottom: 4, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Start Time</div>
                    <input type="datetime-local" style={inputStyle} value={schedStart} onChange={e => setSchedStart(e.target.value)} required />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: '#8B9CB6', marginBottom: 4, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>End Time</div>
                    <input type="datetime-local" style={inputStyle} value={schedEnd} onChange={e => setSchedEnd(e.target.value)} required />
                  </div>
                </div>
                <button type="submit" disabled={scheduling} style={{ ...btnPrimary, opacity: scheduling ? 0.6 : 1, marginTop: 4 }}>
                  {scheduling ? 'Scheduling…' : '📅 Schedule Window'}
                </button>
                {schedMsg && (
                  <div style={{ fontSize: 12, color: schedMsg.startsWith('Error') ? '#F87171' : '#00C28A', background: 'rgba(0,0,0,0.2)', borderRadius: 8, padding: '8px 12px' }}>
                    {schedMsg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* ── Active Maintenance Windows ────────────────────────────────────── */}
        {maintenanceOn && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 16 }}>Active Windows</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {activeMaintenance.map((w) => (
                <div key={w.id} style={{ ...panelStyle, borderColor: 'rgba(245,158,11,0.4)' }}>
                  <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <div style={{ width: 6, height: 6, background: '#F59E0B', borderRadius: '50%', animation: 'pulse 1.5s infinite' }} />
                        <span style={{ fontWeight: 700, color: '#fff' }}>{w.title}</span>
                        <Badge text="Active" color="yellow" />
                      </div>
                      {w.description && <p style={{ fontSize: 13, color: '#8B9CB6', marginBottom: 4 }}>{w.description}</p>}
                      {w.reason && <p style={{ fontSize: 12, color: '#8B9CB6' }}>Reason: {w.reason}</p>}
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: 11, color: '#8B9CB6' }}>Started: {fmtTime(w.startTime)}</div>
                      <div style={{ fontSize: 11, color: '#8B9CB6' }}>Ends: {fmtTime(w.endTime)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Endpoint Metrics ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 16 }}>Endpoint Performance</h2>
          <div style={panelStyle}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1E3A5F', background: 'rgba(0,0,0,0.2)' }}>
                    {['Endpoint', 'Hits', 'Errors', 'Avg Latency', 'Success Rate'].map(h => (
                      <th key={h} style={{ padding: '12px 16px', textAlign: h === 'Endpoint' ? 'left' : 'center', fontSize: 10, fontWeight: 700, color: '#8B9CB6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(endpoints).length === 0 ? (
                    <tr>
                      <td colSpan={5} style={{ padding: '32px', textAlign: 'center', fontSize: 13, color: '#8B9CB6' }}>
                        No endpoint data yet — start making requests to populate metrics
                      </td>
                    </tr>
                  ) : (
                    Object.entries(endpoints).map(([key, m], i) => {
                      const sr = m.successRate ?? (m.hits > 0 ? ((m.hits - m.errors) / m.hits) * 100 : 100);
                      return (
                        <tr key={key} style={{ borderBottom: '1px solid rgba(30,58,95,0.5)', background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.1)' }}>
                          <td style={{ padding: '12px 16px', fontSize: 13, fontFamily: 'monospace', color: '#F0F4FF' }}>{key}</td>
                          <td style={{ padding: '12px 16px', fontSize: 13, color: '#8B9CB6', textAlign: 'center' }}>{m.hits.toLocaleString()}</td>
                          <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                            <span style={{ fontSize: 13, color: m.errors > 0 ? '#EF4444' : '#00C28A' }}>{m.errors}</span>
                          </td>
                          <td style={{ padding: '12px 16px', fontSize: 13, color: '#8B9CB6', textAlign: 'center' }}>{m.avgLatency.toFixed(1)}ms</td>
                          <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                            <span style={{ fontSize: 13, fontWeight: 700, color: sr >= 99 ? '#00C28A' : sr >= 95 ? '#F59E0B' : '#EF4444' }}>
                              {sr.toFixed(1)}%
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── Audit Logs ───────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 16 }}>Security Audit Log</h2>
          <div style={panelStyle}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1E3A5F', background: 'rgba(0,0,0,0.2)' }}>
                    {['Time', 'Event Type', 'Action', 'Result', 'IP Hash'].map(h => (
                      <th key={h} style={{ padding: '12px 16px', textAlign: h === 'Result' ? 'center' : 'left', fontSize: 10, fontWeight: 700, color: '#8B9CB6', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {!recentAuditLogs || recentAuditLogs.length === 0 ? (
                    <tr>
                      <td colSpan={5} style={{ padding: '32px', textAlign: 'center', fontSize: 13, color: '#8B9CB6' }}>
                        No audit logs yet
                      </td>
                    </tr>
                  ) : (
                    recentAuditLogs.slice(0, 15).map((log, i) => {
                      const eventColor = log.eventType.includes('FAIL') || log.eventType.includes('SUSPICIOUS') ? 'red'
                        : log.eventType.includes('SUCCESS') || log.eventType.includes('TOKEN_CREATED') ? 'green'
                        : log.eventType.includes('ADMIN') ? 'blue'
                        : 'gray';
                      return (
                        <tr key={log.id} style={{ borderBottom: '1px solid rgba(30,58,95,0.5)', background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.1)' }}>
                          <td style={{ padding: '10px 16px', fontSize: 12, color: '#8B9CB6', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
                            {fmtTime(log.createdAt)}
                          </td>
                          <td style={{ padding: '10px 16px' }}>
                            <Badge text={log.eventType} color={eventColor} />
                          </td>
                          <td style={{ padding: '10px 16px', fontSize: 12, color: '#8B9CB6' }}>
                            {log.action || '—'}
                          </td>
                          <td style={{ padding: '10px 16px', textAlign: 'center' }}>
                            <span style={{ fontSize: 12, fontWeight: 700, color: log.result === 'success' ? '#00C28A' : log.result === 'failure' ? '#EF4444' : '#8B9CB6' }}>
                              {log.result}
                            </span>
                          </td>
                          <td style={{ padding: '10px 16px', fontSize: 11, color: '#4A5568', fontFamily: 'monospace' }}>
                            {log.ipHash || '—'}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── Security Notice ───────────────────────────────────────────────── */}
        <div style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12, padding: '16px 20px', fontSize: 12, color: '#8B9CB6', lineHeight: 1.7 }}>
          🔐 <strong style={{ color: '#F87171' }}>Security Notice:</strong>{' '}
          This session is single-use. Your token has been consumed. To access this dashboard again, request a new secure link via email.
          Refreshing this page will use cached server data — the token has already been validated.
          All actions are logged with IP hash, user-agent, and timestamp.
        </div>

      </div>
    </div>
  );
}

// Wrap in Suspense — required by Next.js when using useSearchParams()
export default function AdminDashboardPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0A0F1E', color: '#F0F4FF', fontFamily: 'Inter, sans-serif' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 40, height: 40, border: '3px solid #1E3A5F', borderTopColor: '#00C28A', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 16px' }} />
          <p style={{ color: '#8B9CB6', fontSize: 14 }}>Loading admin dashboard…</p>
        </div>
      </div>
    }>
      <AdminDashboardInner />
    </Suspense>
  );
}
