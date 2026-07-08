/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║          ANNITA LLC — EMAIL SERVICE & BRANDED TEMPLATES                  ║
 * ║          Premium transactional emails via Resend                         ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 *
 * TEMPLATES (client confirmations + admin notifications):
 *   1. Contact Form          → sendContactFormEmail / sendContactFormConfirmation
 *   2. Contact Sales         → sendSalesInquiryEmail / sendSalesInquiryConfirmation
 *   3. Newsletter            → sendNewsletterConfirmation / sendNewsletterAdminNotice
 *   4. Solutions Request     → sendSolutionsRequestConfirmation / sendSolutionsRequestAdminEmail
 *   5. Beta Signup           → sendBetaSignupConfirmation / sendBetaSignupAdminNotice
 */

import { Resend } from 'resend';
import { logger } from './logger.js';

// ─────────────────────────────────────────────────────────────────────────────
// CLIENT INIT
// ─────────────────────────────────────────────────────────────────────────────

const resendApiKey      = process.env.RESEND_API_KEY;
const resendFromEmail   = process.env.RESEND_FROM_EMAIL   || 'Annita LLC <annita@an-nita.com>';
const adminEmail        = process.env.ADMIN_EMAIL          || 'info@an-nita.com';
const enterpriseEmail   = process.env.ENTERPRISE_EMAIL     || adminEmail;
const solutionsEmail    = process.env.SOLUTIONS_EMAIL      || adminEmail;

let resendClient: Resend | null = null;

if (resendApiKey && resendApiKey !== 're_your_resend_api_key_here') {
  resendClient = new Resend(resendApiKey);
  logger.info('Email service initialized', { provider: 'Resend' });
} else {
  logger.warn('Email service in dry-run mode — set RESEND_API_KEY to enable sending');
}

// ─────────────────────────────────────────────────────────────────────────────
// HTML ESCAPING (OWASP-recommended output encoding)
// ─────────────────────────────────────────────────────────────────────────────
//
// All user-supplied values are escaped before interpolation into HTML email
// bodies. This prevents stored XSS via the admin inbox (a script tag in a
// contact form "name" field would otherwise render in the admin's email
// client).
//
// Reference: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

/**
 * Sanitize a string for safe interpolation into email headers.
 * Strips CR, LF, and null bytes to prevent header injection (CWE-93).
 * Enforces RFC 2822 line length limit (998 characters max).
 * Reference: NIST SP 800-53 SC-8, DISA STIG V-220529
 */
function sanitizeHeader(input: unknown): string {
  if (input === null || input === undefined) return '';
  const s = String(input)
    .replace(/[\r\n\0]/g, ' ')  // Remove header injection characters
    .trim()
    .slice(0, 998);             // RFC 2822 line limit
  return s;
}

/**
 * Escape a string for safe interpolation into HTML element text content.
 * Escapes the OWASP recommended set: &, <, >, ", ', `, /
 * Also strips CR/LF to defeat header-newline injection through email bodies.
 * Reference: https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
 */
function escapeHtml(input: unknown): string {
  if (input === null || input === undefined) return '';
  const s = String(input).replace(/[\r\n]/g, '');
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/`/g, '&#x60;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Escape a multi-line string for HTML text content while preserving newlines
 * as `<br>`. Used for free-text fields like `message`, `projectDescription`,
 * `partnershipGoals`, `reason`, `projectSummary`, `requirements`.
 */
function escapeHtmlMultiline(input: unknown): string {
  if (input === null || input === undefined) return '';
  // First neutralize any CRLF that could be used for header-style injection,
  // then escape HTML special chars, then convert remaining \n to <br>.
  const normalized = String(input).replace(/\r\n?/g, '\n');
  return escapeHtml(normalized).replace(/\n/g, '<br>');
}



/**
 * Sanitize a URL for safe interpolation into an HTML href attribute.
 * Returns an empty string if the URL uses a dangerous scheme or is malformed.
 *
 * Unlike escapeHtml(), this does NOT encode "/" or "&" — those are valid
 * URL characters and encoding them would break URLs with query parameters
 * or path segments. Only the attribute-breaking characters are encoded.
 */
function safeUrl(input: unknown): string {
  if (input === null || input === undefined) return '';
  const raw = String(input).replace(/[\r\n\t]/g, '').trim();
  if (!raw) return '';
  const blocked = /^(javascript|data|vbscript|file|about):/i;
  if (blocked.test(raw)) return '';
  // Only encode characters that break the href="..." attribute context.
  // Do NOT encode & or / — they are valid URL characters.
  return raw
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED STYLE TOKENS
// ─────────────────────────────────────────────────────────────────────────────

const COLOR = {
  bg:         '#0A0F1E',
  surface:    '#111827',
  card:       '#1A2436',
  border:     '#1E3A5F',
  accent:     '#00C28A',
  accentDark: '#009E70',
  accentSoft: 'rgba(0,194,138,0.10)',
  textPrimary:'#F0F4FF',
  textMuted:  '#8B9CB6',
  white:      '#FFFFFF',
  danger:     '#EF4444',
  gold:       '#F59E0B',
};

// ─────────────────────────────────────────────────────────────────────────────
// BASE LAYOUT WRAPPER
// ─────────────────────────────────────────────────────────────────────────────

const wrap = (body: string, preheader = '') => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background-color: ${COLOR.bg}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: ${COLOR.textPrimary}; -webkit-font-smoothing: antialiased; }
    a { color: ${COLOR.accent}; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .email-body { background-color: ${COLOR.bg}; padding: 40px 20px; }
    .email-container { max-width: 600px; margin: 0 auto; }
    .email-header { background: linear-gradient(135deg, #0A1628 0%, #0D2040 100%); border-radius: 16px 16px 0 0; padding: 40px 40px 32px; text-align: center; border-bottom: 1px solid ${COLOR.border}; }
    .logo-row { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 16px; }
    .logo-dot { width: 8px; height: 8px; background: ${COLOR.accent}; border-radius: 50%; display: inline-block; }
    .brand-name { font-size: 22px; font-weight: 800; color: ${COLOR.white}; letter-spacing: 0.04em; }
    .brand-dot { color: ${COLOR.accent}; }
    .badge { display: inline-block; background: rgba(0,194,138,0.12); border: 1px solid rgba(0,194,138,0.3); color: ${COLOR.accent}; font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 12px; border-radius: 100px; margin-bottom: 20px; }
    .email-title { font-size: 26px; font-weight: 800; color: ${COLOR.white}; line-height: 1.3; margin-bottom: 8px; }
    .email-subtitle { font-size: 14px; color: ${COLOR.textMuted}; }
    .email-content { background: ${COLOR.surface}; padding: 36px 40px; border-left: 1px solid ${COLOR.border}; border-right: 1px solid ${COLOR.border}; }
    .greeting { font-size: 16px; font-weight: 600; color: ${COLOR.textPrimary}; margin-bottom: 12px; }
    .body-text { font-size: 14px; color: ${COLOR.textMuted}; line-height: 1.7; margin-bottom: 16px; }
    .divider { border: none; border-top: 1px solid ${COLOR.border}; margin: 28px 0; }
    .field-label { font-size: 10px; font-weight: 700; color: ${COLOR.accent}; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 4px; font-family: monospace; }
    .field-value { font-size: 14px; color: ${COLOR.textPrimary}; background: ${COLOR.card}; border: 1px solid ${COLOR.border}; border-radius: 8px; padding: 10px 14px; margin-bottom: 14px; word-break: break-word; }
    .field-value-long { font-size: 13px; color: ${COLOR.textPrimary}; background: ${COLOR.card}; border: 1px solid ${COLOR.border}; border-radius: 8px; padding: 12px 14px; margin-bottom: 14px; line-height: 1.6; }
    .grid-2 { display: table; width: 100%; margin-bottom: 0; }
    .grid-col { display: table-cell; width: 50%; padding-right: 12px; vertical-align: top; }
    .grid-col:last-child { padding-right: 0; }
    .cta-btn { display: inline-block; background: ${COLOR.accent}; color: #000 !important; font-size: 14px; font-weight: 700; padding: 14px 32px; border-radius: 100px; text-decoration: none !important; margin: 8px 0; }
    .steps-list { list-style: none; padding: 0; margin: 0 0 20px; }
    .steps-list li { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px; font-size: 14px; color: ${COLOR.textMuted}; line-height: 1.5; }
    .step-num { flex-shrink: 0; width: 22px; height: 22px; background: ${COLOR.accentSoft}; border: 1px solid ${COLOR.accent}; border-radius: 50%; color: ${COLOR.accent}; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
    .check-icon { color: ${COLOR.accent}; font-size: 16px; flex-shrink: 0; }
    .highlight-box { background: ${COLOR.accentSoft}; border: 1px solid rgba(0,194,138,0.25); border-radius: 10px; padding: 18px 20px; margin: 20px 0; }
    .highlight-box p { font-size: 14px; color: ${COLOR.textPrimary}; line-height: 1.6; }
    .queue-badge { text-align: center; padding: 24px; background: ${COLOR.card}; border: 1px solid ${COLOR.border}; border-radius: 12px; margin: 20px 0; }
    .queue-number { font-size: 56px; font-weight: 900; color: ${COLOR.accent}; line-height: 1; }
    .queue-label { font-size: 11px; font-weight: 700; color: ${COLOR.textMuted}; text-transform: uppercase; letter-spacing: 0.15em; margin-top: 6px; }
    .email-footer { background: #080C18; padding: 28px 40px; border-radius: 0 0 16px 16px; border: 1px solid ${COLOR.border}; border-top: none; text-align: center; }
    .footer-links { margin-bottom: 12px; }
    .footer-links a { font-size: 12px; color: ${COLOR.textMuted}; margin: 0 8px; }
    .footer-copy { font-size: 11px; color: #4A5568; margin-top: 8px; }
    .status-dot { display: inline-block; width: 6px; height: 6px; background: ${COLOR.accent}; border-radius: 50%; margin-right: 6px; vertical-align: middle; }
    .admin-tag { display: inline-block; background: rgba(239,68,68,0.12); border: 1px solid rgba(239,68,68,0.3); color: #F87171; font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; padding: 3px 10px; border-radius: 100px; margin-bottom: 16px; }
    .role-badge { display: inline-block; padding: 4px 12px; border-radius: 100px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
    .role-buyer { background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.3); color: #93C5FD; }
    .role-seller { background: rgba(245,158,11,0.15); border: 1px solid rgba(245,158,11,0.3); color: #FCD34D; }
    .role-logistics { background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.3); color: #C4B5FD; }
    @media only screen and (max-width: 600px) {
      .email-header, .email-content, .email-footer { padding-left: 24px !important; padding-right: 24px !important; }
      .email-title { font-size: 22px !important; }
      .grid-2, .grid-col { display: block !important; width: 100% !important; padding-right: 0 !important; }
    }
  </style>
</head>
<body>
  ${preheader ? `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${preheader}&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>` : ''}
  <div class="email-body">
    <div class="email-container">
      ${body}
      <div style="height:32px;"></div>
    </div>
  </div>
</body>
</html>`;

const footer = () => `
<div class="email-footer">
  <div class="footer-links">
    <a href="https://an-nita.com">Website</a>
    <a href="https://an-nita.com/about">About</a>
    <a href="https://an-nita.com/contact">Contact</a>
  </div>
  <p class="footer-copy"><span class="status-dot"></span>© ${new Date().getFullYear()} Annita LLC · Built in Liberia. Built for the World.</p>
  <p class="footer-copy" style="margin-top:4px;">Monrovia, Liberia · +231 77 505 7227 · info@an-nita.com</p>
</div>`;

// ─────────────────────────────────────────────────────────────────────────────
// ① NEWSLETTER TEMPLATES
// ─────────────────────────────────────────────────────────────────────────────

export const newsletterConfirmationTemplate = (email: string) => wrap(`
<div class="email-header">
  <div class="logo-row">
    <span class="logo-dot"></span>
    <span class="brand-name">Annita<span class="brand-dot">.</span></span>
  </div>
  <div class="badge">Newsletter Confirmed</div>
  <h1 class="email-title">Welcome to the Inner Circle 🎉</h1>
  <p class="email-subtitle">You're now part of Africa's most innovative ecosystem</p>
</div>
<div class="email-content">
  <p class="greeting">You're officially subscribed!</p>
  <p class="body-text">
    Thank you for joining the Annita newsletter. You'll be among the first to receive exclusive updates, product launches, ecosystem milestones, and insights from Africa's most ambitious digital infrastructure company.
  </p>
  <div class="highlight-box">
    <p>📬 Subscribed as: <strong style="color:${COLOR.accent};">${escapeHtml(email)}</strong></p>
  </div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.accent};">What's coming your way:</p>
  <ul class="steps-list">
    <li><span class="check-icon">✦</span> <span>Ecosystem milestones &amp; product launch announcements</span></li>
    <li><span class="check-icon">✦</span> <span>Partnership news across Africa and globally</span></li>
    <li><span class="check-icon">✦</span> <span>Exclusive beta access &amp; early invitations</span></li>
    <li><span class="check-icon">✦</span> <span>Insights from Annita's tech &amp; innovation team</span></li>
  </ul>
  <hr class="divider">
  <div style="text-align:center;">
    <a href="https://an-nita.com" class="cta-btn">Explore Annita →</a>
  </div>
</div>
${footer()}`,
'You\'re subscribed to the Annita newsletter — here\'s what to expect.');

export const newsletterAdminNoticeTemplate = (email: string) => wrap(`
<div class="email-header">
  <div class="logo-row">
    <span class="logo-dot"></span>
    <span class="brand-name">Annita<span class="brand-dot">.</span></span>
  </div>
  <div class="admin-tag">Admin Notification</div>
  <h1 class="email-title">New Newsletter Subscriber</h1>
  <p class="email-subtitle">Annita Newsletter System</p>
</div>
<div class="email-content">
  <div class="field-label">Subscriber Email</div>
  <div class="field-value">${escapeHtml(email)}</div>
  <div class="field-label">Subscribed At</div>
  <div class="field-value">${new Date().toUTCString()}</div>
</div>
${footer()}`);

// ─────────────────────────────────────────────────────────────────────────────
// ② CONTACT FORM TEMPLATES
// ─────────────────────────────────────────────────────────────────────────────

export const contactFormAdminTemplate = (data: {
  name: string; email: string; phone?: string; subject?: string; message: string;
}) => wrap(`
<div class="email-header">
  <div class="logo-row"><span class="logo-dot"></span><span class="brand-name">Annita<span class="brand-dot">.</span></span></div>
  <div class="admin-tag">Admin · New Contact</div>
  <h1 class="email-title">📩 New Contact Form Submission</h1>
  <p class="email-subtitle">Annita Landing Page · Contact Form</p>
</div>
<div class="email-content">
  <div class="grid-2">
    <div class="grid-col">
      <div class="field-label">Name</div>
      <div class="field-value">${escapeHtml(data.name)}</div>
    </div>
    <div class="grid-col">
      <div class="field-label">Email</div>
      <div class="field-value"><a href="mailto:${safeUrl(data.email)}">${escapeHtml(data.email)}</a></div>
    </div>
  </div>
  ${data.phone ? `<div class="field-label">Phone</div><div class="field-value">${escapeHtml(data.phone)}</div>` : ''}
  ${data.subject ? `<div class="field-label">Subject</div><div class="field-value">${escapeHtml(data.subject)}</div>` : ''}
  <div class="field-label">Message</div>
  <div class="field-value-long">${escapeHtmlMultiline(data.message)}</div>
  <div class="field-label">Received At</div>
  <div class="field-value">${new Date().toUTCString()}</div>
</div>
${footer()}`);

export const contactFormConfirmationTemplate = (data: { name: string }) => wrap(`
<div class="email-header">
  <div class="logo-row"><span class="logo-dot"></span><span class="brand-name">Annita<span class="brand-dot">.</span></span></div>
  <div class="badge">Message Received</div>
  <h1 class="email-title">We got your message ✅</h1>
  <p class="email-subtitle">Thank you for reaching out to Annita LLC</p>
</div>
<div class="email-content">
  <p class="greeting">Hi ${escapeHtml(data.name)},</p>
  <p class="body-text">
    Thank you for contacting Annita LLC. We've received your message and our team will be in touch with you shortly.
  </p>
  <div class="highlight-box">
    <p>⏱️ <strong>Expected response time: 1–2 business days</strong></p>
  </div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.accent};">What happens next:</p>
  <ul class="steps-list">
    <li><span class="step-num">1</span><span>Our team reviews your inquiry</span></li>
    <li><span class="step-num">2</span><span>We'll respond via email or phone</span></li>
    <li><span class="step-num">3</span><span>If needed, we'll schedule a consultation call</span></li>
  </ul>
  <p class="body-text">For urgent matters, call us at <strong>+231 77 505 7227</strong>.</p>
  <hr class="divider">
  <div style="text-align:center;">
    <a href="https://an-nita.com" class="cta-btn">Explore Annita →</a>
  </div>
</div>
${footer()}`,
`Hi ${escapeHtml(data.name)}, we've received your message and will respond within 1–2 business days.`);

// ─────────────────────────────────────────────────────────────────────────────
// ③ CONTACT SALES TEMPLATES
// ─────────────────────────────────────────────────────────────────────────────

export const salesInquiryAdminTemplate = (data: {
  name: string; email: string; phone?: string; companyName: string;
  projectDescription: string; budget: string;
}) => wrap(`
<div class="email-header">
  <div class="logo-row"><span class="logo-dot"></span><span class="brand-name">Annita<span class="brand-dot">.</span></span></div>
  <div class="admin-tag">Admin · Sales Inquiry</div>
  <h1 class="email-title">💼 New Sales Inquiry</h1>
  <p class="email-subtitle">Annita Enterprise Solutions</p>
</div>
<div class="email-content">
  <div class="grid-2">
    <div class="grid-col">
      <div class="field-label">Name</div>
      <div class="field-value">${escapeHtml(data.name)}</div>
    </div>
    <div class="grid-col">
      <div class="field-label">Company</div>
      <div class="field-value">${escapeHtml(data.companyName)}</div>
    </div>
  </div>
  <div class="grid-2">
    <div class="grid-col">
      <div class="field-label">Email</div>
      <div class="field-value"><a href="mailto:${safeUrl(data.email)}">${escapeHtml(data.email)}</a></div>
    </div>
    <div class="grid-col">
      ${data.phone ? `<div class="field-label">Phone</div><div class="field-value">${escapeHtml(data.phone)}</div>` : ''}
    </div>
  </div>
  <div class="field-label">Budget Range</div>
  <div class="field-value">${escapeHtml(data.budget)}</div>
  <div class="field-label">Project Description</div>
  <div class="field-value-long">${escapeHtmlMultiline(data.projectDescription)}</div>
  <div class="field-label">Received At</div>
  <div class="field-value">${new Date().toUTCString()}</div>
</div>
${footer()}`);

export const salesInquiryConfirmationTemplate = (data: { name: string; companyName: string }) => wrap(`
<div class="email-header">
  <div class="logo-row"><span class="logo-dot"></span><span class="brand-name">Annita<span class="brand-dot">.</span></span></div>
  <div class="badge">Sales Inquiry Received</div>
  <h1 class="email-title">Your inquiry is with our team ✅</h1>
  <p class="email-subtitle">Annita Enterprise Solutions</p>
</div>
<div class="email-content">
  <p class="greeting">Hi ${escapeHtml(data.name)},</p>
  <p class="body-text">
    Thank you for your interest in Annita's enterprise solutions. We've received your inquiry from <strong>${escapeHtml(data.companyName)}</strong> and our sales team will be in touch promptly.
  </p>
  <div class="highlight-box">
    <p>⏱️ <strong>Our sales team responds within 1 business day.</strong></p>
  </div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.accent};">Your next steps:</p>
  <ul class="steps-list">
    <li><span class="step-num">1</span><span>Our enterprise team reviews your project requirements</span></li>
    <li><span class="step-num">2</span><span>A senior solutions advisor contacts you within 1 business day</span></li>
    <li><span class="step-num">3</span><span>We schedule a detailed discovery &amp; consultation call</span></li>
    <li><span class="step-num">4</span><span>You receive a customised proposal &amp; pricing</span></li>
  </ul>
  <p class="body-text">For urgent enterprise matters: <strong>sales@an-nita.com</strong> · <strong>+231 77 505 7227</strong></p>
  <hr class="divider">
  <div style="text-align:center;">
    <a href="https://an-nita.com/solutions" class="cta-btn">View Our Solutions →</a>
  </div>
</div>
${footer()}`,
`Hi ${escapeHtml(data.name)}, your sales inquiry for ${escapeHtml(data.companyName)} has been received.`);

// ─────────────────────────────────────────────────────────────────────────────
// ④ SOLUTIONS REQUEST TEMPLATES
// ─────────────────────────────────────────────────────────────────────────────

export const solutionsRequestAdminTemplate = (data: {
  fullName: string; email: string; phone: string; organization: string;
  projectName: string; projectSummary: string; solutionTypes: string[];
  budget: string; timeline: string;
}) => wrap(`
<div class="email-header">
  <div class="logo-row"><span class="logo-dot"></span><span class="brand-name">Annita<span class="brand-dot">.</span></span></div>
  <div class="admin-tag">Admin · Solutions Request</div>
  <h1 class="email-title">🚀 New Custom Solutions Request</h1>
  <p class="email-subtitle">Annita Custom Solutions Pipeline</p>
</div>
<div class="email-content">
  <div class="grid-2">
    <div class="grid-col">
      <div class="field-label">Full Name</div>
      <div class="field-value">${escapeHtml(data.fullName)}</div>
    </div>
    <div class="grid-col">
      <div class="field-label">Organization</div>
      <div class="field-value">${escapeHtml(data.organization)}</div>
    </div>
  </div>
  <div class="grid-2">
    <div class="grid-col">
      <div class="field-label">Email</div>
      <div class="field-value"><a href="mailto:${safeUrl(data.email)}">${escapeHtml(data.email)}</a></div>
    </div>
    <div class="grid-col">
      <div class="field-label">Phone</div>
      <div class="field-value">${escapeHtml(data.phone)}</div>
    </div>
  </div>
  <div class="field-label">Project Name</div>
  <div class="field-value">${escapeHtml(data.projectName)}</div>
  <div class="field-label">Solution Types</div>
  <div class="field-value">${escapeHtml(data.solutionTypes.join(' · '))}</div>
  <div class="grid-2">
    <div class="grid-col">
      <div class="field-label">Budget</div>
      <div class="field-value">${escapeHtml(data.budget)}</div>
    </div>
    <div class="grid-col">
      <div class="field-label">Timeline</div>
      <div class="field-value">${escapeHtml(data.timeline)}</div>
    </div>
  </div>
  <div class="field-label">Project Summary</div>
  <div class="field-value-long">${escapeHtmlMultiline(data.projectSummary)}</div>
  <div class="field-label">Received At</div>
  <div class="field-value">${new Date().toUTCString()}</div>
</div>
${footer()}`);

export const solutionsRequestConfirmationTemplate = (data: { name: string; projectName: string }) => wrap(`
<div class="email-header">
  <div class="logo-row"><span class="logo-dot"></span><span class="brand-name">Annita<span class="brand-dot">.</span></span></div>
  <div class="badge">Solutions Request Received</div>
  <h1 class="email-title">Your project is in our hands ✅</h1>
  <p class="email-subtitle">Annita Custom Solutions</p>
</div>
<div class="email-content">
  <p class="greeting">Hi ${escapeHtml(data.name)},</p>
  <p class="body-text">
    Thank you for submitting your solutions request for <strong>"${escapeHtml(data.projectName)}"</strong>. Our technical team has received all your project details and will begin reviewing them immediately.
  </p>
  <div class="highlight-box">
    <p>⏱️ <strong>Our solutions team will contact you within 1–2 business days.</strong></p>
  </div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.accent};">Your build journey begins:</p>
  <ul class="steps-list">
    <li><span class="step-num">1</span><span>Technical team reviews your full project requirements</span></li>
    <li><span class="step-num">2</span><span>We schedule a technical discovery &amp; scoping call</span></li>
    <li><span class="step-num">3</span><span>You receive a detailed proposal, architecture plan &amp; timeline</span></li>
    <li><span class="step-num">4</span><span>Development begins on your custom-built solution</span></li>
  </ul>
  <p class="body-text">For urgent project inquiries: <strong>solutions@an-nita.com</strong></p>
  <hr class="divider">
  <div style="text-align:center;">
    <a href="https://an-nita.com/solutions" class="cta-btn">View Our Solutions →</a>
  </div>
</div>
${footer()}`,
`Hi ${escapeHtml(data.name)}, your custom solutions request for "${escapeHtml(data.projectName)}" has been received.`);

// ─────────────────────────────────────────────────────────────────────────────
// ⑤ BETA SIGNUP TEMPLATES
// ─────────────────────────────────────────────────────────────────────────────

const roleLabelMap: Record<string, string> = {
  buyer: 'Buyer',
  seller: 'Seller / Business',
  logistics: 'Logistics / Courier',
};

const roleClass: Record<string, string> = {
  buyer: 'role-buyer',
  seller: 'role-seller',
  logistics: 'role-logistics',
};

export const betaSignupConfirmationTemplate = (data: {
  fullName: string; role: string; queuePosition: number; country: string;
}) => wrap(`
<div class="email-header">
  <div class="logo-row"><span class="logo-dot"></span><span class="brand-name">Annita<span class="brand-dot">.</span></span></div>
  <div class="badge">AnnitaPlug Beta</div>
  <h1 class="email-title">You're on the waitlist! 🚀</h1>
  <p class="email-subtitle">AnnitaPlug Beta — Limited to 100 spots per role</p>
</div>
<div class="email-content">
  <p class="greeting">Hi ${escapeHtml(data.fullName)},</p>
  <p class="body-text">
    You've successfully joined the <strong>AnnitaPlug Beta</strong> as a <span class="role-badge ${roleClass[data.role] || ''}">${escapeHtml(roleLabelMap[data.role] || data.role)}</span>. Your spot is reserved and we'll notify you the moment your access is ready.
  </p>
  <div class="queue-badge">
    <div class="queue-number">#${escapeHtml(data.queuePosition)}</div>
    <div class="queue-label">Your Queue Position</div>
  </div>
  <div class="highlight-box">
    <p>🌍 <strong>Country:</strong> ${escapeHtml(data.country)}<br>
    🎯 <strong>Role:</strong> ${escapeHtml(roleLabelMap[data.role] || data.role)}<br>
    📋 <strong>Status:</strong> Waitlisted — access granted in order</p>
  </div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.accent};">What is AnnitaPlug?</p>
  <p class="body-text">
    AnnitaPlug is Annita's AI commerce and payment OS — a single chat interface connecting buyers, sellers, and logistics providers across Africa's digital economy. Powered by AI. Built for real commerce.
  </p>
  <ul class="steps-list">
    <li><span class="check-icon">✦</span><span>One interface for buying, selling &amp; shipping</span></li>
    <li><span class="check-icon">✦</span><span>AI-powered product discovery &amp; payments</span></li>
    <li><span class="check-icon">✦</span><span>Works offline — built for Africa's connectivity realities</span></li>
  </ul>
  <hr class="divider">
  <div style="text-align:center;">
    <a href="https://an-nita.com" class="cta-btn">Learn More About Annita →</a>
  </div>
</div>
${footer()}`,
`You're #${escapeHtml(data.queuePosition)} on the AnnitaPlug Beta waitlist as a ${escapeHtml(roleLabelMap[data.role] || data.role)}.`);

export const betaSignupAdminTemplate = (data: {
  fullName: string; email: string; phone?: string; role: string;
  country: string; queuePosition: number; businessName?: string;
}) => wrap(`
<div class="email-header">
  <div class="logo-row"><span class="logo-dot"></span><span class="brand-name">Annita<span class="brand-dot">.</span></span></div>
  <div class="admin-tag">Admin · Beta Signup</div>
  <h1 class="email-title">🎯 New AnnitaPlug Beta Signup</h1>
  <p class="email-subtitle">Position #${escapeHtml(data.queuePosition)} · Role: ${escapeHtml(roleLabelMap[data.role] || data.role)}</p>
</div>
<div class="email-content">
  <div class="grid-2">
    <div class="grid-col">
      <div class="field-label">Full Name</div>
      <div class="field-value">${escapeHtml(data.fullName)}</div>
    </div>
    <div class="grid-col">
      <div class="field-label">Role</div>
      <div class="field-value"><span class="role-badge ${roleClass[data.role] || ''}">${escapeHtml(roleLabelMap[data.role] || data.role)}</span></div>
    </div>
  </div>
  <div class="grid-2">
    <div class="grid-col">
      <div class="field-label">Email</div>
      <div class="field-value"><a href="mailto:${safeUrl(data.email)}">${escapeHtml(data.email)}</a></div>
    </div>
    <div class="grid-col">
      ${data.phone ? `<div class="field-label">Phone</div><div class="field-value">${escapeHtml(data.phone)}</div>` : ''}
    </div>
  </div>
  <div class="grid-2">
    <div class="grid-col">
      <div class="field-label">Country</div>
      <div class="field-value">${escapeHtml(data.country)}</div>
    </div>
    <div class="grid-col">
      <div class="field-label">Queue Position</div>
      <div class="field-value">#${escapeHtml(data.queuePosition)}</div>
    </div>
  </div>
  ${data.businessName ? `<div class="field-label">Business / Company Name</div><div class="field-value">${escapeHtml(data.businessName)}</div>` : ''}
  <div class="field-label">Signed Up At</div>
  <div class="field-value">${new Date().toUTCString()}</div>
</div>
${footer()}`);

// Account Deletion Templates
function accountDeletionVerificationTemplate(data: { email: string; softwareProduct: string; verificationToken: string }) {
  const productNames: Record<string, string> = {
    'annita-ecosystem': 'Annita Ecosystem',
    'annita-pay': 'AnnitaPay',
    'annita-pulse': 'Annita Pulse',
    'ezri': 'Ezri AI',
    'aiim-hub': 'AIIM Hub'
  };
  const productName = productNames[data.softwareProduct] || data.softwareProduct;
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'https://an-nita.com'}/api/account-deletion/verify/${data.verificationToken}`;

  return wrap(`
<div class="email-header">
  <div class="logo-row">
    <span class="logo-dot"></span>
    <span class="brand-name">Annita<span class="brand-dot">.</span></span>
  </div>
  <div class="badge">Account Deletion</div>
  <h1 class="email-title">Confirm Your Deletion Request</h1>
  <p class="email-subtitle">Please verify your email to proceed</p>
</div>
<div class="email-content">
  <p class="greeting">Hello,</p>
  <p class="body-text">
    We received a request to delete your account from <strong>${escapeHtml(productName)}</strong>. To protect your privacy, we require email verification before processing this request.
  </p>
  <div class="highlight-box">
    <p>📧 Email: <strong style="color:${COLOR.accent};">${escapeHtml(data.email)}</strong></p>
    <p>📦 Product: <strong style="color:${COLOR.accent};">${escapeHtml(productName)}</strong></p>
  </div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.accent};">To confirm this request:</p>
  <div style="text-align:center;">
    <a href="${safeUrl(verificationUrl)}" class="cta-btn">Confirm Deletion Request</a>
  </div>
  <p class="body-text" style="font-size:12px;margin-top:16px;">
    Or copy and paste this link into your browser:
  </p>
  <div class="field-value" style="word-break:break-all;font-size:12px;">${escapeHtml(verificationUrl)}</div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.danger};">Important:</p>
  <ul class="steps-list">
    <li><span class="check-icon" style="color:${COLOR.danger};">✦</span> <span>This link expires in 24 hours</span></li>
    <li><span class="check-icon" style="color:${COLOR.danger};">✦</span> <span>Once verified, your deletion request will be processed within 30 days</span></li>
    <li><span class="check-icon" style="color:${COLOR.danger};">✦</span> <span>You cannot undo this request after verification</span></li>
  </ul>
  <hr class="divider">
  <p class="body-text">
    If you did not request this deletion, please ignore this email or contact us at <a href="mailto:info@an-nita.com">info@an-nita.com</a>.
  </p>
</div>
${footer()}`,
`Confirm your account deletion request for ${productName}`);
}

function accountDeletionConfirmationTemplate(data: { email: string; softwareProduct: string; requestId: number }) {
  const productNames: Record<string, string> = {
    'annita-ecosystem': 'Annita Ecosystem',
    'annita-pay': 'AnnitaPay',
    'annita-pulse': 'Annita Pulse',
    'ezri': 'Ezri AI',
    'aiim-hub': 'AIIM Hub'
  };
  const productName = productNames[data.softwareProduct] || data.softwareProduct;
  
  return wrap(`
<div class="email-header">
  <div class="logo-row">
    <span class="logo-dot"></span>
    <span class="brand-name">Annita<span class="brand-dot">.</span></span>
  </div>
  <div class="badge">Account Deletion</div>
  <h1 class="email-title">Deletion Request Received</h1>
  <p class="email-subtitle">Your request has been submitted for processing</p>
</div>
<div class="email-content">
  <p class="greeting">Hello,</p>
  <p class="body-text">
    We have received your request to delete your account from <strong>${escapeHtml(productName)}</strong>.
  </p>
  <div class="highlight-box">
    <p>📋 Request ID: <strong style="color:${COLOR.accent};">#${escapeHtml(data.requestId)}</strong></p>
    <p>📧 Email: <strong style="color:${COLOR.accent};">${escapeHtml(data.email)}</strong></p>
    <p>📦 Product: <strong style="color:${COLOR.accent};">${escapeHtml(productName)}</strong></p>
  </div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.accent};">What happens next:</p>
  <ul class="steps-list">
    <li><span class="check-icon">✦</span> <span>Your request will be processed within 30 days</span></li>
    <li><span class="check-icon">✦</span> <span>You will receive a confirmation email when deletion is complete</span></li>
    <li><span class="check-icon">✦</span> <span>Your data will be permanently deleted from our systems</span></li>
    <li><span class="check-icon">✦</span> <span>You will not be able to recover your account after deletion</span></li>
  </ul>
  <hr class="divider">
  <p class="body-text">
    If you did not request this deletion, please contact us immediately at <a href="mailto:info@an-nita.com">info@an-nita.com</a>.
  </p>
  <p class="body-text">Thank you for using Annita services.</p>
</div>
${footer()}`);
}

function accountDeletionAdminTemplate(data: { email: string; softwareProduct: string; reason: string; communicationChannel: string; requestId: number }) {
  const productNames: Record<string, string> = {
    'annita-ecosystem': 'Annita Ecosystem',
    'annita-pay': 'AnnitaPay',
    'annita-pulse': 'Annita Pulse',
    'ezri': 'Ezri AI',
    'aiim-hub': 'AIIM Hub'
  };
  const productName = productNames[data.softwareProduct] || data.softwareProduct;
  
  return wrap(`
<div class="email-header">
  <div class="logo-row">
    <span class="logo-dot"></span>
    <span class="brand-name">Annita<span class="brand-dot">.</span></span>
  </div>
  <div class="admin-tag">ADMIN NOTIFICATION</div>
  <h1 class="email-title">Account Deletion Request</h1>
  <p class="email-subtitle">New deletion request submitted</p>
</div>
<div class="email-content">
  <p class="greeting">Admin,</p>
  <p class="body-text">
    A new account deletion request has been submitted:
  </p>
  <div class="highlight-box">
    <p>📋 Request ID: <strong style="color:${COLOR.accent};">#${escapeHtml(data.requestId)}</strong></p>
    <p>📧 Email: <a href="mailto:${safeUrl(data.email)}">${escapeHtml(data.email)}</a></p>
    <p>📦 Product: <strong style="color:${COLOR.accent};">${escapeHtml(productName)}</strong></p>
    <p>📞 Communication: <strong style="color:${COLOR.accent};">${escapeHtml(data.communicationChannel)}</strong></p>
  </div>
  <div class="field-label">Reason for Deletion</div>
  <div class="field-value-long">${escapeHtmlMultiline(data.reason)}</div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.accent};">Action Required:</p>
  <ul class="steps-list">
    <li><span class="step-num">1</span> <span>Review the deletion request</span></li>
    <li><span class="step-num">2</span> <span>Verify the user's identity</span></li>
    <li><span class="step-num">3</span> <span>Process the deletion within 30 days</span></li>
    <li><span class="step-num">4</span> <span>Update the request status in the system</span></li>
  </ul>
</div>
${footer()}`);
}

function accountDeletionCompletedTemplate(data: { email: string; softwareProduct: string }) {
  const productNames: Record<string, string> = {
    'annita-ecosystem': 'Annita Ecosystem',
    'annita-pay': 'AnnitaPay',
    'annita-pulse': 'Annita Pulse',
    'ezri': 'Ezri AI',
    'aiim-hub': 'AIIM Hub'
  };
  const productName = productNames[data.softwareProduct] || data.softwareProduct;
  
  return wrap(`
<div class="email-header">
  <div class="logo-row">
    <span class="logo-dot"></span>
    <span class="brand-name">Annita<span class="brand-dot">.</span></span>
  </div>
  <div class="badge">Account Deletion</div>
  <h1 class="email-title">Deletion Completed</h1>
  <p class="email-subtitle">Your account has been permanently deleted</p>
</div>
<div class="email-content">
  <p class="greeting">Hello,</p>
  <p class="body-text">
    Your account deletion request for <strong>${escapeHtml(productName)}</strong> has been completed.
  </p>
  <div class="highlight-box">
    <p>📧 Email: <strong style="color:${COLOR.accent};">${escapeHtml(data.email)}</strong></p>
    <p>📦 Product: <strong style="color:${COLOR.accent};">${escapeHtml(productName)}</strong></p>
    <p>⏰ Completed At: <strong style="color:${COLOR.accent};">${new Date().toUTCString()}</strong></p>
  </div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.danger};">Important:</p>
  <ul class="steps-list">
    <li><span class="check-icon" style="color:${COLOR.danger};">✦</span> <span>Your account has been permanently deleted</span></li>
    <li><span class="check-icon" style="color:${COLOR.danger};">✦</span> <span>All your data has been removed from our systems</span></li>
    <li><span class="check-icon" style="color:${COLOR.danger};">✦</span> <span>You will no longer receive communications from this service</span></li>
    <li><span class="check-icon" style="color:${COLOR.danger};">✦</span> <span>You cannot recover this account</span></li>
  </ul>
  <hr class="divider">
  <p class="body-text">
    If you wish to use our services again in the future, you will need to create a new account.
  </p>
  <p class="body-text">Thank you for your time with Annita.</p>
</div>
${footer()}`);
}

// Career Application Templates
function careerApplicationConfirmationTemplate(data: { applicantName: string; email: string; jobTitle?: string }) {
  return wrap(`
<div class="email-header">
  <div class="logo-row">
    <span class="logo-dot"></span>
    <span class="brand-name">Annita<span class="brand-dot">.</span></span>
  </div>
  <div class="badge">Career Application</div>
  <h1 class="email-title">Application Received</h1>
  <p class="email-subtitle">Thank you for your interest in joining Annita</p>
</div>
<div class="email-content">
  <p class="greeting">Hello ${escapeHtml(data.applicantName)},</p>
  <p class="body-text">
    We have received your application${data.jobTitle ? ` for the <strong>${escapeHtml(data.jobTitle)}</strong> position` : ' to join our talent pool'}.
  </p>
  <div class="highlight-box">
    <p>📧 Email: <strong style="color:${COLOR.accent};">${escapeHtml(data.email)}</strong></p>
    ${data.jobTitle ? `<p>🎯 Position: <strong style="color:${COLOR.accent};">${escapeHtml(data.jobTitle)}</strong></p>` : '<p>🎯 Application: <strong style="color:${COLOR.accent};">Talent Pool</strong></p>'}
    <p>📅 Received: <strong style="color:${COLOR.accent};">${new Date().toUTCString()}</strong></p>
  </div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.accent};">What happens next:</p>
  <ul class="steps-list">
    <li><span class="check-icon">✦</span> <span>Our team will review your application</span></li>
    <li><span class="check-icon">✦</span> <span>We will contact you if your profile matches our needs</span></li>
    <li><span class="check-icon">✦</span> <span>This process typically takes 1-2 weeks</span></li>
  </ul>
  <hr class="divider">
  <p class="body-text">
    If you have any questions, feel free to reach out to us at <a href="mailto:info@an-nita.com">info@an-nita.com</a>.
  </p>
  <p class="body-text">Thank you for considering Annita as your next career move.</p>
</div>
${footer()}`);
}

function careerApplicationAdminTemplate(data: { applicantName: string; email: string; jobTitle?: string; country: string; phone?: string }) {
  return wrap(`
<div class="email-header">
  <div class="logo-row">
    <span class="logo-dot"></span>
    <span class="brand-name">Annita<span class="brand-dot">.</span></span>
  </div>
  <div class="admin-tag">ADMIN NOTIFICATION</div>
  <h1 class="email-title">New Career Application</h1>
  <p class="email-subtitle">Talent pool or job application received</p>
</div>
<div class="email-content">
  <p class="greeting">HR Team,</p>
  <p class="body-text">
    A new career application has been submitted:
  </p>
  <div class="highlight-box">
    <p>👤 Name: <strong style="color:${COLOR.accent};">${escapeHtml(data.applicantName)}</strong></p>
    <p>📧 Email: <a href="mailto:${safeUrl(data.email)}">${escapeHtml(data.email)}</a></p>
    ${data.jobTitle ? `<p>🎯 Position: <strong style="color:${COLOR.accent};">${escapeHtml(data.jobTitle)}</strong></p>` : '<p>🎯 Application: <strong style="color:${COLOR.accent};">Talent Pool</strong></p>'}
    <p>🌍 Country: <strong style="color:${COLOR.accent};">${escapeHtml(data.country)}</strong></p>
    ${data.phone ? `<p>📞 Phone: <strong style="color:${COLOR.accent};">${escapeHtml(data.phone)}</strong></p>` : ''}
  </div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.accent};">Action Required:</p>
  <ul class="steps-list">
    <li><span class="step-num">1</span> <span>Review the application in the system</span></li>
    <li><span class="step-num">2</span> <span>Check if the candidate matches open positions</span></li>
    <li><span class="step-num">3</span> <span>Schedule an interview if appropriate</span></li>
  </ul>
</div>
${footer()}`);
}

// Partnership Templates
function partnershipConfirmationTemplate(data: { contactName: string; email: string; companyName: string; partnershipType: string }) {
  const partnershipLabels: Record<string, string> = {
    'technology': 'Technology Partnership',
    'distribution': 'Distribution Partnership',
    'investment': 'Investment Partnership',
    'other': 'Other Partnership'
  };
  const partnershipLabel = partnershipLabels[data.partnershipType] || data.partnershipType;
  
  return wrap(`
<div class="email-header">
  <div class="logo-row">
    <span class="logo-dot"></span>
    <span class="brand-name">Annita<span class="brand-dot">.</span></span>
  </div>
  <div class="badge">Partnership Inquiry</div>
  <h1 class="email-title">Inquiry Received</h1>
  <p class="email-subtitle">Thank you for your interest in partnering with Annita</p>
</div>
<div class="email-content">
  <p class="greeting">Hello ${escapeHtml(data.contactName)},</p>
  <p class="body-text">
    We have received your partnership inquiry from <strong>${escapeHtml(data.companyName)}</strong>.
  </p>
  <div class="highlight-box">
    <p>🏢 Company: <strong style="color:${COLOR.accent};">${escapeHtml(data.companyName)}</strong></p>
    <p>📧 Email: <strong style="color:${COLOR.accent};">${escapeHtml(data.email)}</strong></p>
    <p>🤝 Type: <strong style="color:${COLOR.accent};">${escapeHtml(partnershipLabel)}</strong></p>
    <p>📅 Received: <strong style="color:${COLOR.accent};">${new Date().toUTCString()}</strong></p>
  </div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.accent};">What happens next:</p>
  <ul class="steps-list">
    <li><span class="check-icon">✦</span> <span>Our partnerships team will review your inquiry</span></li>
    <li><span class="check-icon">✦</span> <span>We will assess alignment with our strategic goals</span></li>
    <li><span class="check-icon">✦</span> <span>We will contact you within 5-7 business days</span></li>
  </ul>
  <hr class="divider">
  <p class="body-text">
    If you have any questions, feel free to reach out to us at <a href="mailto:info@an-nita.com">info@an-nita.com</a>.
  </p>
  <p class="body-text">Thank you for considering a partnership with Annita.</p>
</div>
${footer()}`);
}

function partnershipAdminTemplate(data: { contactName: string; email: string; companyName: string; partnershipType: string; partnershipGoals: string }) {
  const partnershipLabels: Record<string, string> = {
    'technology': 'Technology Partnership',
    'distribution': 'Distribution Partnership',
    'investment': 'Investment Partnership',
    'other': 'Other Partnership'
  };
  const partnershipLabel = partnershipLabels[data.partnershipType] || data.partnershipType;
  
  return wrap(`
<div class="email-header">
  <div class="logo-row">
    <span class="logo-dot"></span>
    <span class="brand-name">Annita<span class="brand-dot">.</span></span>
  </div>
  <div class="admin-tag">ADMIN NOTIFICATION</div>
  <h1 class="email-title">New Partnership Inquiry</h1>
  <p class="email-subtitle">Strategic partnership opportunity received</p>
</div>
<div class="email-content">
  <p class="greeting">Partnerships Team,</p>
  <p class="body-text">
    A new partnership inquiry has been submitted:
  </p>
  <div class="highlight-box">
    <p>🏢 Company: <strong style="color:${COLOR.accent};">${escapeHtml(data.companyName)}</strong></p>
    <p>👤 Contact: <strong style="color:${COLOR.accent};">${escapeHtml(data.contactName)}</strong></p>
    <p>📧 Email: <a href="mailto:${safeUrl(data.email)}">${escapeHtml(data.email)}</a></p>
    <p>🤝 Type: <strong style="color:${COLOR.accent};">${escapeHtml(partnershipLabel)}</strong></p>
  </div>
  <div class="field-label">Partnership Goals</div>
  <div class="field-value-long">${escapeHtmlMultiline(data.partnershipGoals)}</div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:${COLOR.accent};">Action Required:</p>
  <ul class="steps-list">
    <li><span class="step-num">1</span> <span>Review the partnership inquiry in the system</span></li>
    <li><span class="step-num">2</span> <span>Assess strategic alignment and potential value</span></li>
    <li><span class="step-num">3</span> <span>Schedule a discovery call if appropriate</span></li>
  </ul>
</div>
${footer()}`);
}

// New Position Notification Template (for talent pool)
function newPositionNotificationTemplate(data: { email: string; applicantName: string; jobTitle: string; jobDescription: string; location: string }) {
  return wrap(`
<div class="email-header">
  <div class="logo-row">
    <span class="logo-dot"></span>
    <span class="brand-name">Annita<span class="brand-dot">.</span></span>
  </div>
  <div class="badge">New Opportunity</div>
  <h1 class="email-title">New Position Available</h1>
  <p class="email-subtitle">A role matching your profile has opened</p>
</div>
<div class="email-content">
  <p class="greeting">Hello ${escapeHtml(data.applicantName)},</p>
  <p class="body-text">
    We have a new position that matches your profile in our talent pool:
  </p>
  <div class="highlight-box">
    <p>🎯 Position: <strong style="color:${COLOR.accent};">${escapeHtml(data.jobTitle)}</strong></p>
    <p>📍 Location: <strong style="color:${COLOR.accent};">${escapeHtml(data.location)}</strong></p>
  </div>
  <div class="field-label">Job Description</div>
  <div class="field-value-long">${escapeHtmlMultiline(data.jobDescription)}</div>
  <hr class="divider">
  <p class="body-text">
    If you're interested in this position, please visit our careers page to apply.
  </p>
  <p class="body-text">
    <a href="https://an-nita.com/careers" style="color:${COLOR.accent};text-decoration:underline;">View Careers Page</a>
  </p>
  <hr class="divider">
  <p class="body-text">
    If you have any questions, feel free to reach out to us at <a href="mailto:info@an-nita.com">info@an-nita.com</a>.
  </p>
  <p class="body-text">Best regards,<br/>The Annita Team</p>
</div>
${footer()}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// SEND HELPERS
// ─────────────────────────────────────────────────────────────────────────────

async function send(params: { to: string; subject: string; html: string; from?: string }): Promise<{ success: boolean; error?: string }> {
  // Defensive header-newline protection: SMTP/RFC 5322 forbids CR/LF in headers.
  // Even if a template somehow leaks an unescaped value into the subject, strip it.
  const safeSubject = String(params.subject || '').replace(/[\r\n]+/g, ' ').trim();
  const safeTo = String(params.to || '').replace(/[\r\n\t]+/g, '').trim();

  if (!resendClient) {
    logger.info(`[EMAIL DRY-RUN] Would send "${safeSubject}" → ${safeTo}`);
    return { success: true };
  }
  try {
    await resendClient.emails.send({
      from: params.from || resendFromEmail,
      to: safeTo,
      subject: safeSubject,
      html: params.html,
    });
    logger.info('Email sent', { to: safeTo, subject: safeSubject });
    return { success: true };
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    logger.error('Email send failed', { to: safeTo, subject: safeSubject, error: msg });
    return { success: false, error: msg };
  }
}

// ① Newsletter
export async function sendNewsletterConfirmation(email: string) {
  return send({ to: email, subject: '🎉 Welcome to the Annita Newsletter', html: newsletterConfirmationTemplate(email) });
}
export async function sendNewsletterAdminNotice(email: string) {
  return send({ to: adminEmail, subject: sanitizeHeader(`New Newsletter Subscriber: ${email}`), html: newsletterAdminNoticeTemplate(email) });
}

// ② Contact Form
export async function sendContactFormEmail(data: { name: string; email: string; phone?: string; subject?: string; message: string }) {
  return send({ to: adminEmail, subject: sanitizeHeader(`📩 New Contact: ${data.name}`), html: contactFormAdminTemplate(data) });
}
export async function sendContactFormConfirmation(data: { name: string; email: string }) {
  return send({ to: data.email, subject: '✅ We received your message — Annita LLC', html: contactFormConfirmationTemplate(data) });
}

// ③ Contact Sales
export async function sendSalesInquiryEmail(data: { name: string; email: string; phone?: string; companyName: string; projectDescription: string; budget: string }) {
  return send({ to: enterpriseEmail, subject: sanitizeHeader(`💼 New Sales Inquiry: ${data.name} · ${data.companyName}`), html: salesInquiryAdminTemplate(data) });
}
export async function sendSalesInquiryConfirmation(data: { name: string; email: string; companyName: string }) {
  return send({ to: data.email, subject: '✅ Sales Inquiry Received — Annita LLC', html: salesInquiryConfirmationTemplate(data) });
}

// ④ Solutions Request
export async function sendSolutionsRequestAdminEmail(data: { fullName: string; email: string; phone: string; organization: string; projectName: string; projectSummary: string; solutionTypes: string[]; budget: string; timeline: string }) {
  return send({ to: solutionsEmail, subject: sanitizeHeader(`🚀 New Solutions Request: ${data.projectName} · ${data.fullName}`), html: solutionsRequestAdminTemplate(data) });
}
export async function sendSolutionsRequestConfirmation(data: { name: string; email: string; projectName: string }) {
  return send({ to: data.email, subject: '✅ Solutions Request Received — Annita LLC', html: solutionsRequestConfirmationTemplate(data) });
}

// ⑤ Beta Signup
export async function sendBetaSignupConfirmation(data: { fullName: string; email: string; role: string; queuePosition: number; country: string }) {
  return send({ to: data.email, subject: sanitizeHeader(`🚀 You're #${data.queuePosition} on AnnitaPlug Beta!`), html: betaSignupConfirmationTemplate(data) });
}
export async function sendBetaSignupAdminNotice(data: { fullName: string; email: string; phone?: string; role: string; country: string; queuePosition: number; businessName?: string }) {
  return send({ to: adminEmail, subject: sanitizeHeader(`🎯 Beta Signup #${data.queuePosition}: ${data.fullName} (${data.role})`), html: betaSignupAdminTemplate(data) });
}

// ⑥ Account Deletion
export async function sendAccountDeletionVerification(data: { email: string; softwareProduct: string; verificationToken: string }) {
  return send({ to: data.email, subject: '🔐 Confirm Your Account Deletion Request — Annita LLC', html: accountDeletionVerificationTemplate(data) });
}
export async function sendAccountDeletionConfirmation(data: { email: string; softwareProduct: string; requestId: number }) {
  return send({ to: data.email, subject: '🗑️ Account Deletion Request Received — Annita LLC', html: accountDeletionConfirmationTemplate(data) });
}
export async function sendAccountDeletionAdminNotice(data: { email: string; softwareProduct: string; reason: string; communicationChannel: string; requestId: number }) {
  return send({ to: adminEmail, subject: sanitizeHeader(`🗑️ Account Deletion Request #${data.requestId}: ${data.email}`), html: accountDeletionAdminTemplate(data) });
}
export async function sendAccountDeletionCompleted(data: { email: string; softwareProduct: string }) {
  return send({ to: data.email, subject: '✅ Account Deletion Completed — Annita LLC', html: accountDeletionCompletedTemplate(data) });
}

// ⑦ Career Applications
export async function sendCareerApplicationConfirmation(data: { applicantName: string; email: string; jobTitle?: string }) {
  return send({ to: data.email, subject: '🎯 Application Received — Annita LLC', html: careerApplicationConfirmationTemplate(data) });
}
export async function sendCareerApplicationAdminNotice(data: { applicantName: string; email: string; jobTitle?: string; country: string; phone?: string }) {
  return send({ to: adminEmail, subject: sanitizeHeader(`🎯 New Career Application: ${data.applicantName}`), html: careerApplicationAdminTemplate(data) });
}

// ⑧ Partnership Inquiries
export async function sendPartnershipConfirmation(data: { contactName: string; email: string; companyName: string; partnershipType: string }) {
  return send({ to: data.email, subject: '🤝 Partnership Inquiry Received — Annita LLC', html: partnershipConfirmationTemplate(data) });
}
export async function sendPartnershipAdminNotice(data: { contactName: string; email: string; companyName: string; partnershipType: string; partnershipGoals: string }) {
  return send({ to: adminEmail, subject: sanitizeHeader(`🤝 New Partnership Inquiry: ${data.companyName}`), html: partnershipAdminTemplate(data) });
}

// ⑨ New Position Notifications (for talent pool)
export async function sendNewPositionNotification(data: { email: string; applicantName: string; jobTitle: string; jobDescription: string; location: string }) {
  return send({ to: data.email, subject: sanitizeHeader(`🎯 New Position Matching Your Profile: ${data.jobTitle}`), html: newPositionNotificationTemplate(data) });
}

// Generic (backwards compat)
export async function sendCustomEmail(params: { to: string; subject: string; html: string; from?: string }) {
  return send({ ...params, subject: sanitizeHeader(params.subject) });
}

export function getEmailServiceStatus() {
  return {
    initialized: !!resendClient,
    dryRun: !resendClient,
    provider: 'Resend',
    fromEmail: resendFromEmail,
    adminEmail,
    enterpriseEmail,
    solutionsEmail,
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// ⑩ MAINTENANCE & ADMIN REPORT TEMPLATES
// ═══════════════════════════════════════════════════════════════════════════════

import type { ReportData } from './health-report.js';

// Report status colors
const REPORT_COLOR = {
  healthy: '#00C28A',
  warning: '#F59E0B',
  critical: '#EF4444',
};

const severityColor = (s: string | undefined): string => {
  if (!s) return COLOR.textMuted;
  switch (s.toUpperCase()) {
    case 'FATAL': return COLOR.danger;
    case 'ERROR': return '#F87171';
    case 'WARN': return COLOR.gold;
    default: return COLOR.textMuted;
  }
};

const healthStatusColor = (status: string): string =>
  status === 'CONNECTED' ? REPORT_COLOR.healthy : status === 'DEGRADED' ? REPORT_COLOR.warning : REPORT_COLOR.critical;

const errorRateColor = (rate: number): string =>
  rate > 5 ? REPORT_COLOR.critical : rate > 2 ? REPORT_COLOR.warning : REPORT_COLOR.healthy;

// ─────────────────────────────────────────────────────────────────────────────
// DAILY HEALTH REPORT TEMPLATE
// ─────────────────────────────────────────────────────────────────────────────

export const adminAccessTemplate = (accessUrl: string) => wrap(`
<div class="email-header">
  <div class="logo-row"><span class="logo-dot"></span><span class="brand-name">Annita<span class="brand-dot">.</span></span></div>
  <div class="admin-tag">Secure Admin Access</div>
  <h1 class="email-title">Admin Dashboard Access</h1>
  <p class="email-subtitle">One-time secure access link — Do not share</p>
</div>
<div class="email-content">
  <p class="greeting">Administrator,</p>
  <p class="body-text">
    You have been granted <strong>one-time secure access</strong> to the Annita system monitoring dashboard. This link expires in <span style="color:${COLOR.accent};font-weight:700;">15 minutes</span> and can only be used <strong>once</strong> from the same device and network you requested it from.
  </p>
  <hr class="divider">
  <div style="text-align:center;padding:24px;background:${COLOR.card};border:1px solid ${COLOR.border};border-radius:12px;">
    <p style="font-size:10px;font-weight:700;color:${COLOR.accent};text-transform:uppercase;letter-spacing:0.15em;margin-bottom:12px;">Secure Access Link</p>
    <a href="${safeUrl(accessUrl)}" style="display:inline-block;background:${COLOR.accent};color:#000;font-size:14px;font-weight:700;padding:14px 32px;border-radius:100px;text-decoration:none;">Open Admin Dashboard →</a>
    <p style="font-size:11px;color:${COLOR.textMuted};margin-top:12px;">Expires: ${new Date(Date.now() + 15 * 60000).toUTCString()}</p>
  </div>
  <hr class="divider">
  <p class="body-text" style="font-size:12px;color:${COLOR.danger};font-weight:700;">
    ⚠ This link is single-use, IP-bound, and device-bound. Do not forward or share.
  </p>
  <p class="body-text" style="font-size:12px;color:${COLOR.textMuted};">
    If you did not request this, ignore this email. All admin access is audited.
  </p>
</div>
${footer()}`,
`Admin dashboard access — one-time secure link. Expires in 15 minutes.`);

export const dailyHealthReportTemplate = (data: ReportData) => {
  const dbColor = healthStatusColor(data.dbStatus);
  const errColor = errorRateColor(data.errorRate);
  const dbLat = data.dbResponseTime != null ? `${data.dbResponseTime.toFixed(1)}ms` : 'N/A';

  const endpointRows = data.topEndpoints.slice(0, 6).map(ep => `
<tr>
  <td style="padding:6px 8px;font-size:12px;color:${COLOR.textPrimary};border-bottom:1px solid ${COLOR.border};font-family:monospace;">${escapeHtml(ep.path)}</td>
  <td style="padding:6px 8px;font-size:12px;color:${COLOR.textPrimary};text-align:right;border-bottom:1px solid ${COLOR.border};">${ep.hits}</td>
  <td style="padding:6px 8px;font-size:12px;color:${COLOR.textPrimary};text-align:right;border-bottom:1px solid ${COLOR.border};">${ep.avgLatency.toFixed(1)}ms</td>
</tr>`).join('');

  const errorRows = data.recentErrors.slice(0, 5).map(e => `
<tr>
  <td style="padding:4px 8px;font-size:11px;color:${COLOR.textMuted};font-family:monospace;">${escapeHtml(e.timestamp.split('T')[1].slice(0, 8))}</td>
  <td style="padding:4px 8px;font-size:11px;color:${severityColor(e.level)};font-weight:700;">${escapeHtml(e.level)}</td>
  <td style="padding:4px 8px;font-size:11px;color:${COLOR.textPrimary};">${escapeHtml(e.message.slice(0, 80))}</td>
</tr>`).join('');

  return wrap(`
<div class="email-header">
  <div class="logo-row"><span class="logo-dot"></span><span class="brand-name">Annita<span class="brand-dot">.</span></span></div>
  <div class="badge">${escapeHtml(data.reportType.toUpperCase())} Report</div>
  <h1 class="email-title">System Health Report</h1>
  <p class="email-subtitle">${escapeHtml(data.date)} — Annita Landing Page Server</p>
</div>
<div class="email-content">
  <p class="greeting">Administrator,</p>
  <p class="body-text">
    Here is the ${escapeHtml(data.reportType)} system health summary for the Annita Landing Page server.
  </p>
  
  <!-- Key Metrics -->
  <div style="display:table;width:100%;margin-bottom:20px;">
    <div style="display:table-cell;width:33%;text-align:center;padding:12px;background:${COLOR.card};border-radius:8px;margin-right:8px;">
      <div style="font-size:24px;font-weight:800;color:${escapeHtml(errColor)};">${data.errorRate.toFixed(1)}%</div>
      <div style="font-size:10px;text-transform:uppercase;color:${COLOR.textMuted};margin-top:4px;">Error Rate</div>
    </div>
    <div style="display:table-cell;width:33%;text-align:center;padding:12px;background:${COLOR.card};border-radius:8px;">
      <div style="font-size:24px;font-weight:800;color:${COLOR.accent};">${data.totalRequests.toLocaleString()}</div>
      <div style="font-size:10px;text-transform:uppercase;color:${COLOR.textMuted};margin-top:4px;">Total Requests</div>
    </div>
    <div style="display:table-cell;width:33%;text-align:center;padding:12px;background:${COLOR.card};border-radius:8px;">
      <div style="font-size:24px;font-weight:800;color:${escapeHtml(dbColor)};">${escapeHtml(data.dbStatus)}</div>
      <div style="font-size:10px;text-transform:uppercase;color:${COLOR.textMuted};margin-top:4px;">Database</div>
    </div>
  </div>

  <hr class="divider">
  
  <!-- Detailed Stats -->
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;color:${COLOR.accent};letter-spacing:0.12em;margin-bottom:12px;">Server Stats</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;">
    <div style="padding:8px;background:${COLOR.card};border-radius:6px;">
      <span style="font-size:10px;color:${COLOR.textMuted};">Uptime</span>
      <span style="font-size:13px;color:${COLOR.textPrimary};display:block;">${escapeHtml(data.uptime)}</span>
    </div>
    <div style="padding:8px;background:${COLOR.card};border-radius:6px;">
      <span style="font-size:10px;color:${COLOR.textMuted};">Avg Response</span>
      <span style="font-size:13px;color:${COLOR.textPrimary};display:block;">${data.avgResponseTime.toFixed(1)}ms</span>
    </div>
    <div style="padding:8px;background:${COLOR.card};border-radius:6px;">
      <span style="font-size:10px;color:${COLOR.textMuted};">Errors</span>
      <span style="font-size:13px;color:${COLOR.textPrimary};display:block;">${data.totalErrors} (${data.errorRate.toFixed(1)}%)</span>
    </div>
    <div style="padding:8px;background:${COLOR.card};border-radius:6px;">
      <span style="font-size:10px;color:${COLOR.textMuted};">DB Latency</span>
      <span style="font-size:13px;color:${COLOR.textPrimary};display:block;">${escapeHtml(dbLat)}</span>
    </div>
  </div>

  <hr class="divider">
  
  <!-- Top Endpoints -->
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;color:${COLOR.accent};letter-spacing:0.12em;margin-bottom:8px;">Top Endpoints</div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
    <tr style="border-bottom:2px solid ${COLOR.border};">
      <th style="text-align:left;padding:4px 8px;font-size:10px;color:${COLOR.textMuted};text-transform:uppercase;">Path</th>
      <th style="text-align:right;padding:4px 8px;font-size:10px;color:${COLOR.textMuted};text-transform:uppercase;">Hits</th>
      <th style="text-align:right;padding:4px 8px;font-size:10px;color:${COLOR.textMuted};text-transform:uppercase;">Latency</th>
    </tr>
    ${endpointRows}
  </table>

  ${errorRows ? `
  <hr class="divider">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;color:${COLOR.danger};letter-spacing:0.12em;margin-bottom:8px;">Recent Errors/Warnings</div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
    ${errorRows}
  </table>
  ` : ''}

  <div style="text-align:center;margin-top:16px;">
    <a href="https://an-nita.com" class="cta-btn">View Admin Dashboard →</a>
  </div>
</div>
${footer()}`,
`System Health Report — ${escapeHtml(data.date)} — Error Rate: ${data.errorRate.toFixed(1)}% — ${data.totalRequests.toLocaleString()} Requests`);
};

export const weeklyHealthReportTemplate = (data: ReportData) => {
  return dailyHealthReportTemplate(data); // Same template structure, different reportType label
};

export const emergencyAlertTemplate = (data: { message: string; severity: string; timestamp: string; metrics?: Partial<ReportData> }) => wrap(`
<div class="email-header" style="border-top:3px solid ${COLOR.danger};">
  <div class="logo-row"><span class="logo-dot"></span><span class="brand-name">Annita<span class="brand-dot">.</span></span></div>
  <div class="admin-tag" style="background:rgba(239,68,68,0.2);border:1px solid rgba(239,68,68,0.5);color:${COLOR.danger};">EMERGENCY ALERT</div>
  <h1 class="email-title" style="color:${COLOR.danger};">🚨 Critical System Alert</h1>
  <p class="email-subtitle">${escapeHtml(data.timestamp)} — Immediate attention required</p>
</div>
<div class="email-content">
  <p class="greeting" style="color:${COLOR.danger};">⚠ Administrator — ACTION REQUIRED</p>
  <p class="body-text">
    A critical event was detected on the Annita Landing Page server. Please investigate immediately.
  </p>
  
  <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.25);border-radius:10px;padding:16px;margin:16px 0;">
    <div class="field-label" style="color:${COLOR.danger};">Severity</div>
    <div class="field-value" style="background:rgba(239,68,68,0.12);border-color:rgba(239,68,68,0.2);color:${COLOR.danger};">${escapeHtml(data.severity)}</div>
    <div class="field-label" style="color:${COLOR.danger};">Alert Message</div>
    <div class="field-value-long" style="background:rgba(239,68,68,0.12);border-color:rgba(239,68,68,0.2);color:${COLOR.textPrimary};">${escapeHtmlMultiline(data.message)}</div>
  </div>

  ${data.metrics ? `
  <hr class="divider">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;color:${COLOR.accent};letter-spacing:0.12em;margin-bottom:8px;">Current Metrics Snapshot</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="padding:6px;background:${COLOR.card};border-radius:4px;font-size:11px;">
      DB: <span style="color:${escapeHtml(healthStatusColor(data.metrics.dbStatus || ''))};">${escapeHtml(data.metrics.dbStatus || '?')}</span>
    </div>
    <div style="padding:6px;background:${COLOR.card};border-radius:4px;font-size:11px;">
      Errors: <span style="color:${escapeHtml(errorRateColor(data.metrics.errorRate || 0))};">${(data.metrics.errorRate || 0).toFixed(1)}%</span>
    </div>
  </div>
  ` : ''}

  <hr class="divider">
  <p class="body-text" style="font-size:12px;font-weight:700;text-transform:uppercase;color:${COLOR.danger};letter-spacing:0.1em;">Required Actions:</p>
  <ul class="steps-list">
    <li><span class="step-num" style="background:rgba(239,68,68,0.12);border-color:${COLOR.danger};color:${COLOR.danger};">1</span><span>Check server health endpoint immediately</span></li>
    <li><span class="step-num" style="background:rgba(239,68,68,0.12);border-color:${COLOR.danger};color:${COLOR.danger};">2</span><span>Review recent logs for root cause</span></li>
    <li><span class="step-num" style="background:rgba(239,68,68,0.12);border-color:${COLOR.danger};color:${COLOR.danger};">3</span><span>Access admin dashboard for full diagnostics</span></li>
  </ul>
</div>
${footer()}`,
`CRITICAL ALERT — ${escapeHtml(data.severity)} — ${escapeHtml(data.message.slice(0, 100))}`);

// ═══════════════════════════════════════════════════════════════════════════════
// ADMIN & REPORT EMAIL SENDERS
// ═══════════════════════════════════════════════════════════════════════════════

export async function sendAdminAccessEmail(email: string, accessUrl: string) {
  return send({
    to: email,
    subject: '🔐 Annita Admin Dashboard — Secure Access Link',
    html: adminAccessTemplate(accessUrl),
  });
}

export async function sendDailyHealthReport(data: ReportData) {
  return send({
    to: adminEmail,
    subject: sanitizeHeader(`📊 Daily System Health Report — ${data.date} — ${data.errorRate.toFixed(1)}% Error Rate`),
    html: dailyHealthReportTemplate(data),
  });
}

export async function sendWeeklyHealthReport(data: ReportData) {
  return send({
    to: adminEmail,
    subject: sanitizeHeader(`📈 Weekly System Health Report — ${data.date} — ${data.totalRequests.toLocaleString()} Requests`),
    html: weeklyHealthReportTemplate(data),
  });
}

export async function sendEmergencyAlert(data: { message: string; severity: string; timestamp: string; metrics?: Partial<ReportData> }) {
  return send({
    to: adminEmail,
    subject: `🚨 EMERGENCY: Critical System Alert — Annita Landing Page`,
    html: emergencyAlertTemplate(data),
  });
}
