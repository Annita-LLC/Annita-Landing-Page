'use client';
/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║          ANNITA LLC — MAINTENANCE PAGE (PREMIUM CLIENT COMPONENT)         ║
 * ║          Public-facing 503 maintenance page with React state countdown     ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { useState, useEffect } from 'react';

export default function MaintenancePage() {
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });
  const [progressPct, setProgressPct] = useState('0% complete');
  const [progressWidth, setProgressWidth] = useState('0%');

  useEffect(() => {
    // Default window: 2 hours from mount, assumed started 30min ago
    const endTime = new Date(Date.now() + 2 * 60 * 60 * 1000).getTime();
    const startTime = new Date(Date.now() - 30 * 60 * 1000).getTime();
    const totalDuration = endTime - startTime;

    const pad = (n: number) => String(Math.max(0, n)).padStart(2, '0');

    const tick = () => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / totalDuration) * 100));

      const h = Math.floor(remaining / 3600000);
      const m = Math.floor((remaining % 3600000) / 60000);
      const s = Math.floor((remaining % 60000) / 1000);

      setTimeLeft({
        hours: pad(h),
        minutes: pad(m),
        seconds: pad(s)
      });
      setProgressPct(`${pct}% complete`);
      setProgressWidth(`${pct}%`);

      if (remaining <= 0) {
        setProgressPct('Finishing up...');
        setTimeout(() => {
          window.location.reload();
        }, 10000);
      }
    };

    tick();
    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #0A0F1E;
          color: #F0F4FF;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
        }

        /* Ambient background glow */
        .page::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 30% 20%, rgba(0,194,138,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 35% at 75% 80%, rgba(0,100,255,0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        /* Animated grid */
        .grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(30,58,95,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,58,95,0.25) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }

        .card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 600px;
        }

        /* Logo */
        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 40px;
        }
        .logo-dot {
          width: 10px; height: 10px;
          background: #00C28A;
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(0,194,138,0.8);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
        .logo-text {
          font-size: 24px;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #fff;
        }
        .logo-accent { color: #00C28A; }

        /* Main card */
        .main-card {
          background: linear-gradient(180deg, #111827 0%, #0D1929 100%);
          border: 1px solid #1E3A5F;
          border-radius: 24px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(0,194,138,0.08),
            0 32px 64px rgba(0,0,0,0.5);
        }

        /* Card top accent bar */
        .accent-bar {
          height: 3px;
          background: linear-gradient(90deg, transparent, #00C28A, #0088ff, transparent);
        }

        .card-inner {
          padding: 48px 40px 40px;
          text-align: center;
        }

        /* Status badge */
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(245,158,11,0.1);
          border: 1px solid rgba(245,158,11,0.3);
          border-radius: 100px;
          padding: 6px 16px;
          margin-bottom: 28px;
        }
        .status-dot {
          width: 6px; height: 6px;
          background: #F59E0B;
          border-radius: 50%;
          animation: blink 1.2s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .status-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #F59E0B;
        }

        /* Icon */
        .icon-wrap {
          width: 80px; height: 80px;
          background: rgba(245,158,11,0.08);
          border: 1px solid rgba(245,158,11,0.2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 28px;
          font-size: 40px;
        }

        h1 {
          font-size: 32px;
          font-weight: 900;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .subtitle {
          font-size: 15px;
          color: #8B9CB6;
          line-height: 1.7;
          max-width: 420px;
          margin: 0 auto 36px;
        }

        /* Countdown */
        .countdown {
          background: rgba(0,194,138,0.06);
          border: 1px solid rgba(0,194,138,0.2);
          border-radius: 16px;
          padding: 28px 24px;
          margin-bottom: 32px;
        }
        .countdown-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #00C28A;
          margin-bottom: 16px;
        }
        .countdown-blocks {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .countdown-unit {
          text-align: center;
          min-width: 70px;
        }
        .countdown-num {
          font-size: 44px;
          font-weight: 900;
          color: #fff;
          font-variant-numeric: tabular-nums;
          font-family: 'Inter', monospace;
          line-height: 1;
        }
        .countdown-unit-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8B9CB6;
          margin-top: 6px;
        }
        .countdown-sep {
          font-size: 36px;
          font-weight: 900;
          color: rgba(0,194,138,0.5);
          padding-bottom: 16px;
          animation: blink-sep 1s step-end infinite;
        }
        @keyframes blink-sep {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Progress bar */
        .progress-wrap {
          margin-bottom: 32px;
        }
        .progress-top {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #8B9CB6;
          margin-bottom: 8px;
        }
        .progress-track {
          height: 6px;
          background: rgba(255,255,255,0.06);
          border-radius: 100px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00C28A, #0088ff);
          border-radius: 100px;
        }

        /* Divider */
        .divider {
          border: none;
          border-top: 1px solid #1E3A5F;
          margin: 28px 0;
        }

        /* Services grid */
        .services {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 28px;
        }
        .service-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #0A1628;
          border: 1px solid #1E3A5F;
          border-radius: 10px;
          padding: 10px 12px;
          font-size: 12px;
          color: #8B9CB6;
        }
        .service-dot-ok  { width: 6px; height: 6px; background: #00C28A; border-radius: 50%; flex-shrink: 0; }
        .service-dot-mnt { width: 6px; height: 6px; background: #F59E0B; border-radius: 50%; flex-shrink: 0; }

        /* Contact */
        .contact {
          font-size: 13px;
          color: #8B9CB6;
          margin-bottom: 0;
        }
        .contact a {
          color: #00C28A;
          text-decoration: none;
          font-weight: 600;
        }
        .contact a:hover { text-decoration: underline; }
        .contact .sep { margin: 0 8px; opacity: 0.4; }

        /* Footer */
        .footer {
          margin-top: 32px;
          text-align: center;
          font-size: 11px;
          color: #4A5568;
          position: relative;
          z-index: 10;
        }
        .footer-dot {
          display: inline-block;
          width: 5px; height: 5px;
          background: #00C28A;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 6px;
          margin-bottom: 2px;
        }

        @media (max-width: 520px) {
          .card-inner { padding: 32px 24px; }
          h1 { font-size: 26px; }
          .countdown-num { font-size: 34px; }
          .countdown-unit { min-width: 55px; }
          .services { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="page">
        <div className="grid-bg" />

        <div className="card">
          {/* Logo */}
          <div className="logo">
            <div className="logo-dot" />
            <span className="logo-text">Annita<span className="logo-accent">.</span></span>
          </div>

          {/* Main Card */}
          <div className="main-card">
            <div className="accent-bar" />
            <div className="card-inner">

              {/* Status badge */}
              <div className="status-badge">
                <div className="status-dot" />
                <span className="status-text">Scheduled Maintenance</span>
              </div>

              {/* Icon */}
              <div className="icon-wrap">🛠️</div>

              <h1>We'll Be Back Soon</h1>
              <p className="subtitle">
                We're performing scheduled maintenance to upgrade our infrastructure and
                deliver a better experience. Thank you for your patience.
              </p>

              {/* Countdown */}
              <div className="countdown">
                <div className="countdown-label">Estimated Time Remaining</div>
                <div className="countdown-blocks">
                  <div className="countdown-unit">
                    <div className="countdown-num">{timeLeft.hours}</div>
                    <div className="countdown-unit-label">Hours</div>
                  </div>
                  <div className="countdown-sep">:</div>
                  <div className="countdown-unit">
                    <div className="countdown-num">{timeLeft.minutes}</div>
                    <div className="countdown-unit-label">Minutes</div>
                  </div>
                  <div className="countdown-sep">:</div>
                  <div className="countdown-unit">
                    <div className="countdown-num">{timeLeft.seconds}</div>
                    <div className="countdown-unit-label">Seconds</div>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="progress-wrap">
                <div className="progress-top">
                  <span>Maintenance Progress</span>
                  <span>{progressPct}</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: progressWidth }} />
                </div>
              </div>

              <hr className="divider" />

              {/* Service statuses */}
              <div className="services">
                <div className="service-item">
                  <div className="service-dot-ok" />
                  <span>Annita Marketplace</span>
                </div>
                <div className="service-item">
                  <div className="service-dot-mnt" />
                  <span>Web Platform</span>
                </div>
                <div className="service-item">
                  <div className="service-dot-ok" />
                  <span>API Services</span>
                </div>
                <div className="service-item">
                  <div className="service-dot-ok" />
                  <span>Email Delivery</span>
                </div>
              </div>

              <hr className="divider" />

              {/* Contact */}
              <p className="contact">
                For urgent matters:
                <span className="sep">·</span>
                <a href="mailto:info@an-nita.com">info@an-nita.com</a>
                <span className="sep">·</span>
                <a href="tel:+231775057227">+231 77 505 7227</a>
              </p>

            </div>
          </div>

          {/* Footer */}
          <div className="footer">
            <span className="footer-dot" />
            © {new Date().getFullYear()} Annita LLC · Built in Liberia. Built for the World.
          </div>
        </div>
      </div>
    </>
  );
}
