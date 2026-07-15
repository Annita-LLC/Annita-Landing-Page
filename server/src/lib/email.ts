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
// BRAND DESIGN TOKENS (from Annita master email template — light theme)
// ─────────────────────────────────────────────────────────────────────────────

const COLOR = {
  // Template palette
  inkNavy:      '#0B1229',
  inkIndigo:    '#151B3B',
  signalAmber:  '#F5A623',
  pulseTeal:    '#17B8A6',
  paper:        '#F7F6F2',
  slate:        '#5B6472',
  hairline:     '#E7E4DC',
  bodyBg:       '#EEECE5',
  white:        '#FFFFFF',
  bodyText:     '#3A4150',
  mutedText:    '#B6BCCC',
  // Semantic aliases (for backward compat in template logic)
  bg:           '#EEECE5',
  surface:      '#FFFFFF',
  card:         '#F7F6F2',
  border:       '#E7E4DC',
  accent:       '#F5A623',
  accentDark:   '#E0951C',
  accentSoft:   'rgba(245,166,35,0.10)',
  textPrimary:  '#0B1229',
  textMuted:    '#5B6472',
  danger:       '#EF4444',
  gold:         '#F5A623',
  teal:         '#17B8A6',
};

// ─────────────────────────────────────────────────────────────────────────────
// BASE LAYOUT WRAPPER — matches Annita master email template design
// ─────────────────────────────────────────────────────────────────────────────

interface WrapOptions {
  eyebrow?: string;
  eyebrowColor?: 'amber' | 'teal' | 'red';
  headline: string;
  subhead?: string;
  preheader?: string;
}

const eyebrowStyles = (color: 'amber' | 'teal' | 'red') => {
  const map = {
    amber: { bg: 'rgba(245,166,35,0.14)', border: 'rgba(245,166,35,0.4)', text: '#F5A623' },
    teal:  { bg: 'rgba(23,184,166,0.14)', border: 'rgba(23,184,166,0.4)', text: '#17B8A6' },
    red:   { bg: 'rgba(239,68,68,0.14)',  border: 'rgba(239,68,68,0.4)',  text: '#EF4444' },
  };
  return map[color];
};

const wrap = (body: string, opts: WrapOptions | string = '', preheaderStr = '') => {
  // Backward compat: if opts is a string, treat it as preheader
  const optsObj: WrapOptions = typeof opts === 'string'
    ? { headline: '', preheader: opts }
    : opts;
  const preheader = preheaderStr || optsObj.preheader || '';
  const eyebrowColor = optsObj.eyebrowColor || 'amber';
  const es = eyebrowStyles(eyebrowColor);

  const eyebrowHtml = optsObj.eyebrow ? `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr>
        <td style="background-color:${es.bg}; border:1px solid ${es.border}; border-radius:20px; padding:6px 14px;">
          <span class="font-body" style="color:${es.text}; font-size:11px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase;">
            ${optsObj.eyebrow}
          </span>
        </td>
      </tr>
    </table>` : '';

  const subheadHtml = optsObj.subhead ? `
    <div class="font-body hero-subhead" style="color:#B6BCCC; font-size:15px; line-height:23px; max-width:460px;">
      ${optsObj.subhead}
    </div>` : '';

  const headlineHtml = optsObj.headline ? `
    <div class="font-display hero-title" style="color:#FFFFFF; font-size:30px; line-height:38px; font-weight:700; margin-bottom:12px;">
      ${optsObj.headline}
    </div>` : '';

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<![endif]-->
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-lspace: 0pt; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
  body { margin: 0; padding: 0; width: 100% !important; height: 100% !important; background-color: #EEECE5; }
  .font-display { font-family: 'Sora', Arial, Helvetica, sans-serif; }
  .font-body { font-family: 'Inter', Arial, Helvetica, sans-serif; }
  a.cta-button:hover { background-color: #E0951C !important; }
  a.text-link { color: #17B8A6; text-decoration: none; }
  @media only screen and (max-width: 600px) {
    .email-container { width: 100% !important; }
    .stack-col { display: block !important; width: 100% !important; text-align: left !important; padding-bottom: 14px !important; }
    .fluid-padding { padding-left: 24px !important; padding-right: 24px !important; }
    .hero-title { font-size: 24px !important; line-height: 32px !important; }
    .bubble-max { max-width: 88% !important; }
    .mobile-center { text-align: center !important; }
    .cta-button { display: block !important; width: 100% !important; box-sizing: border-box !important; text-align: center !important; }
    .cta-wrap { width: 100% !important; }
    .otp-box { font-size: 30px !important; letter-spacing: 8px !important; padding: 18px 10px !important; }
  }
  @media only screen and (max-width: 480px) {
    .outer-pad { padding: 16px 8px !important; }
    .email-container { border-radius: 14px !important; }
    .fluid-padding { padding-left: 20px !important; padding-right: 20px !important; }
    .hero-title { font-size: 22px !important; line-height: 29px !important; }
    .hero-subhead { font-size: 14px !important; line-height: 21px !important; }
    .body-copy { font-size: 14px !important; line-height: 22px !important; }
    .bubble-max { max-width: 92% !important; font-size: 13px !important; }
    .secondary-block { padding: 20px 18px !important; }
    .wordmark { font-size: 18px !important; }
    .otp-box { font-size: 26px !important; letter-spacing: 6px !important; }
  }
  @media only screen and (max-width: 375px) {
    .fluid-padding { padding-left: 16px !important; padding-right: 16px !important; }
    .hero-title { font-size: 20px !important; line-height: 27px !important; }
    .bubble-max { max-width: 96% !important; }
    .cta-button { padding-left: 22px !important; padding-right: 22px !important; font-size: 13.5px !important; }
    .footer-fine { font-size: 10.5px !important; }
    .otp-box { font-size: 22px !important; letter-spacing: 5px !important; }
  }
</style>
</head>
<body style="margin:0; padding:0; background-color:#EEECE5;">

  ${preheader ? `<div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#EEECE5;">
    ${preheader}
    &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>` : ''}

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEECE5;">
    <tr>
      <td align="center" class="outer-pad" style="padding: 32px 16px;">

        <table role="presentation" class="email-container" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#FFFFFF; border-radius:20px; overflow:hidden; box-shadow: 0 2px 24px rgba(11,18,41,0.06);">

          <!-- ============= HEADER / WORDMARK ============= -->
          <tr>
            <td style="background-color:#0B1229; padding: 28px 40px;" class="fluid-padding">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="left" valign="middle">
                    <span class="font-display wordmark" style="color:#FFFFFF; font-size:20px; font-weight:800; letter-spacing:0.2px;">
                      Annita<span style="color:#F5A623;">.</span>
                    </span>
                    <br>
                    <span class="font-body" style="color:#8B93A7; font-size:11px; letter-spacing:1.6px; text-transform:uppercase;">
                      Africa's All-in-One Digital Ecosystem
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${headlineHtml || eyebrowHtml ? `<!-- ============= HERO ============= -->
          <tr>
            <td style="background-color:#151B3B; background-image:linear-gradient(135deg,#151B3B 0%,#0B1229 100%); padding: 44px 40px 40px 40px;" class="fluid-padding">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="left">
                    ${eyebrowHtml}
                    ${headlineHtml}
                    ${subheadHtml}
                  </td>
                </tr>
              </table>
            </td>
          </tr>` : ''}

          <!-- ============= BODY ============= -->
          ${body}

          <!-- ============= FOOTER ============= -->
          <tr>
            <td align="center" style="background-color:#FFFFFF; padding: 32px 40px 36px 40px;" class="fluid-padding">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:14px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="64" height="64" align="center" valign="middle"
                            style="width:64px; height:64px; border-radius:50%; background-color:#0B1229; border:2px solid #F5A623; overflow:hidden; mso-padding-alt:0;">
                          <!--[if !mso]><!-->
                          <img src="https://an-nita.com/Annita-Logo.jpg" width="64" height="64" alt="Annita"
                               style="display:block; width:64px; height:64px; border-radius:50%; object-fit:cover;">
                          <!--<![endif]-->
                          <!--[if mso]>
                          <span class="font-display" style="color:#F5A623; font-size:20px; font-weight:800; line-height:64px;">A</span>
                          <![endif]-->
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <span class="font-display" style="color:#0B1229; font-size:14px; font-weight:700;">
                      Annita<span style="color:#F5A623;">.</span>
                    </span>
                    <p class="font-body" style="color:#8B93A7; font-size:12px; line-height:18px; margin:6px 0 0 0; font-style:italic;">
                      Annita is Africa's first all-in-one digital ecosystem, integrating e-commerce, fintech, AI, communication, marketing, logistics, and more into a single, connected system.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:14px;">
                    <p class="font-body footer-fine" style="color:#5B6472; font-size:12px; line-height:20px; margin:0;">
                      Monrovia, Liberia<br>
                      <a href="tel:+2317755057227" class="text-link" style="color:#5B6472;">+231 77 505 7227</a>
                      &nbsp;&middot;&nbsp;
                      <a href="mailto:info@an-nita.com" class="text-link" style="color:#5B6472;">info@an-nita.com</a>
                      <br>
                      <a href="https://www.an-nita.com" class="text-link" style="color:#17B8A6; font-weight:600;">www.an-nita.com</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:18px;">
                    <p class="font-body footer-fine" style="color:#B0B5C1; font-size:11px; line-height:17px; margin:0;">
                      You're receiving this because you're connected to Annita. &nbsp;
                      <a href="#" class="text-link" style="color:#8B93A7;">Unsubscribe</a> &nbsp;&middot;&nbsp;
                      <a href="#" class="text-link" style="color:#8B93A7;">Manage preferences</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;
};

// ─────────────────────────────────────────────────────────────────────────────
// REUSABLE BODY COMPONENTS (matching the template design system)
// ─────────────────────────────────────────────────────────────────────────────

/** White body content section */
const bodySection = (content: string) => `
<tr>
  <td style="background-color:#FFFFFF; padding: 20px 40px 8px 40px;" class="fluid-padding">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="left">
          ${content}
        </td>
      </tr>
    </table>
  </td>
</tr>`;

/** CTA button */
const ctaButton = (href: string, label: string) => `
<tr>
  <td align="center" style="background-color:#FFFFFF; padding: 24px 40px 8px 40px;" class="fluid-padding">
    <table role="presentation" class="cta-wrap" cellpadding="0" cellspacing="0" style="width:auto;">
      <tr>
        <td align="center" style="border-radius:28px; background-color:#F5A623;">
          <a href="${safeUrl(href)}" class="cta-button font-body" target="_blank"
             style="display:inline-block; padding:14px 34px; font-size:14.5px; font-weight:700; color:#0B1229; text-decoration:none; border-radius:28px; letter-spacing:0.2px;">
            ${label} &nbsp;&rarr;
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>`;

/** Divider line */
const divider = () => `
<tr>
  <td style="padding: 0 40px;" class="fluid-padding">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="border-top:1px solid #E7E4DC; font-size:0; line-height:0;">&nbsp;</td></tr>
    </table>
  </td>
</tr>`;

/** Secondary block (paper background, for details/highlights) */
const secondaryBlock = (content: string) => `
<tr>
  <td style="background-color:#FFFFFF; padding: 32px 40px 40px 40px;" class="fluid-padding">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F7F6F2; border-radius:14px;">
      <tr>
        <td class="secondary-block" style="padding: 24px 26px;">
          ${content}
        </td>
      </tr>
    </table>
  </td>
</tr>`;

/** Body copy paragraph */
const p = (text: string, extraStyle = '') =>
  `<p class="font-body body-copy" style="color:#3A4150; font-size:15px; line-height:24px; margin:0 0 16px 0; ${extraStyle}">${text}</p>`;

/** Greeting line */
const greeting = (text: string, color = '#3A4150') =>
  `<p class="font-body body-copy" style="color:${color}; font-size:15px; line-height:24px; margin:0 0 16px 0;">${text}</p>`;

/** Detail row for secondary blocks */
const detailRow = (label: string, value: string) => `
<tr>
  <td class="font-body" style="color:#5B6472; font-size:13.5px; padding-bottom:8px;">${label}</td>
  <td class="font-body" align="right" style="color:#0B1229; font-size:13.5px; font-weight:600; padding-bottom:8px;">${value}</td>
</tr>`;

/** Detail section header */
const detailHeader = (text: string) => `
<tr>
  <td style="padding-bottom:14px; border-bottom:1px solid #E7E4DC;">
    <span class="font-display" style="color:#0B1229; font-size:13px; font-weight:700; letter-spacing:0.6px; text-transform:uppercase;">
      ${text}
    </span>
  </td>
</tr>`;

// ─────────────────────────────────────────────────────────────────────────────
// ① NEWSLETTER TEMPLATES
// ─────────────────────────────────────────────────────────────────────────────

export const newsletterConfirmationTemplate = (email: string) => wrap(
  `${bodySection(`
    ${greeting("You're officially subscribed!")}
    ${p(`Thank you for joining the Annita newsletter. You'll be among the first to receive exclusive updates, product launches, ecosystem milestones, and insights from Africa's most ambitious digital infrastructure company.`)}
  `)}
  ${secondaryBlock(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailHeader('Subscription Details')}
      <tr><td style="padding-top:14px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${detailRow('Subscribed as', escapeHtml(email))}
          ${detailRow('Subscribed at', new Date().toUTCString())}
        </table>
      </td></tr>
    </table>
  `)}
  ${bodySection(`
    ${p(`<strong style="color:#0B1229;">What's coming your way:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
    ${p('• Ecosystem milestones &amp; product launch announcements')}
    ${p('• Partnership news across Africa and globally')}
    ${p('• Exclusive beta access &amp; early invitations')}
    ${p('• Insights from Annita\'s tech &amp; innovation team', 'margin:0;')}
  `)}
  ${ctaButton('https://an-nita.com', 'Explore Annita')}`,
  { eyebrow: 'Subscribed', eyebrowColor: 'teal', headline: "You're on the list", subhead: "You'll now get Annita news and updates in your inbox.", preheader: "You're subscribed to the Annita newsletter — here's what to expect." }
);

export const newsletterAdminNoticeTemplate = (email: string) => wrap(
  `${bodySection(`
    ${greeting('New subscriber registered.')}
    ${p(`A new user has subscribed to the Annita newsletter.`)}
  `)}
  ${secondaryBlock(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailHeader('Subscriber Details')}
      <tr><td style="padding-top:14px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${detailRow('Email', escapeHtml(email))}
          ${detailRow('Subscribed at', new Date().toUTCString())}
        </table>
      </td></tr>
    </table>
  `)}`,
  { eyebrow: 'Admin Notification', eyebrowColor: 'red', headline: 'New Newsletter Subscriber', subhead: 'Annita Newsletter System' }
);

// ─────────────────────────────────────────────────────────────────────────────
// ② CONTACT FORM TEMPLATES
// ─────────────────────────────────────────────────────────────────────────────

export const contactFormAdminTemplate = (data: {
  name: string; email: string; phone?: string; subject?: string; message: string;
}) => wrap(
  `${bodySection(`
    ${greeting('A new contact form submission has been received.')}
  `)}
  ${secondaryBlock(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailHeader('Submission Details')}
      <tr><td style="padding-top:14px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${detailRow('Name', escapeHtml(data.name))}
          ${detailRow('Email', `<a href="mailto:${safeUrl(data.email)}" class="text-link" style="color:#17B8A6;">${escapeHtml(data.email)}</a>`)}
          ${data.phone ? detailRow('Phone', escapeHtml(data.phone)) : ''}
          ${data.subject ? detailRow('Subject', escapeHtml(data.subject)) : ''}
          ${detailRow('Received at', new Date().toUTCString())}
        </table>
      </td></tr>
      <tr><td style="padding-top:14px;border-top:1px solid #E7E4DC;">
        <span class="font-display" style="color:#0B1229;font-size:13px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;">Message</span>
        <p class="font-body" style="color:#3A4150;font-size:14px;line-height:22px;margin-top:8px;">${escapeHtmlMultiline(data.message)}</p>
      </td></tr>
    </table>
  `)}`,
  { eyebrow: 'Admin · New Contact', eyebrowColor: 'red', headline: 'New Contact Form Submission', subhead: 'Annita Landing Page · Contact Form' }
);

export const contactFormConfirmationTemplate = (data: { name: string }) => wrap(
  `${bodySection(`
    ${greeting(`Hi ${escapeHtml(data.name)},`)}
    ${p(`Thank you for contacting Annita. We've received your message and our team will be in touch with you shortly.`)}
    ${p(`<strong>Expected response time: 1–2 business days</strong>`, 'font-size:13px;')}
  `)}
  ${divider()}
  ${bodySection(`
    ${p(`<strong style="color:#0B1229;">What happens next:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
    ${p('1. Our team reviews your inquiry')}
    ${p('2. We\'ll respond via email or phone')}
    ${p('3. If needed, we\'ll schedule a consultation call', 'margin:0;')}
    ${p(`For urgent matters, call us at <strong>+231 77 505 7227</strong>.`, 'margin-top:16px;')}
  `)}
  ${ctaButton('https://an-nita.com', 'Explore Annita')}`,
  { eyebrow: 'Message Received', eyebrowColor: 'teal', headline: "We got your message", subhead: 'Thank you for reaching out to Annita', preheader: `Hi ${escapeHtml(data.name)}, we've received your message and will respond within 1–2 business days.` }
);

// ─────────────────────────────────────────────────────────────────────────────
// ③ CONTACT SALES TEMPLATES
// ─────────────────────────────────────────────────────────────────────────────

export const salesInquiryAdminTemplate = (data: {
  name: string; email: string; phone?: string; companyName: string;
  projectDescription: string; budget: string;
}) => wrap(
  `${bodySection(`${greeting('A new sales inquiry has been received.')}`)}
  ${secondaryBlock(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailHeader('Inquiry Details')}
      <tr><td style="padding-top:14px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${detailRow('Name', escapeHtml(data.name))}
          ${detailRow('Company', escapeHtml(data.companyName))}
          ${detailRow('Email', `<a href="mailto:${safeUrl(data.email)}" class="text-link" style="color:#17B8A6;">${escapeHtml(data.email)}</a>`)}
          ${data.phone ? detailRow('Phone', escapeHtml(data.phone)) : ''}
          ${detailRow('Budget range', escapeHtml(data.budget))}
          ${detailRow('Received at', new Date().toUTCString())}
        </table>
      </td></tr>
      <tr><td style="padding-top:14px;border-top:1px solid #E7E4DC;">
        <span class="font-display" style="color:#0B1229;font-size:13px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;">Project Description</span>
        <p class="font-body" style="color:#3A4150;font-size:14px;line-height:22px;margin-top:8px;">${escapeHtmlMultiline(data.projectDescription)}</p>
      </td></tr>
    </table>
  `)}`,
  { eyebrow: 'Admin · Sales Inquiry', eyebrowColor: 'red', headline: 'New Sales Inquiry', subhead: 'Annita Enterprise Solutions' }
);

export const salesInquiryConfirmationTemplate = (data: { name: string; companyName: string }) => wrap(
  `${bodySection(`
    ${greeting(`Hi ${escapeHtml(data.name)},`)}
    ${p(`Thank you for your interest in Annita's enterprise solutions. We've received your inquiry from <strong>${escapeHtml(data.companyName)}</strong> and our sales team will be in touch promptly.`)}
    ${p(`<strong>Our sales team responds within 1 business day.</strong>`, 'font-size:13px;')}
  `)}
  ${divider()}
  ${bodySection(`
    ${p(`<strong style="color:#0B1229;">Your next steps:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
    ${p('1. Our enterprise team reviews your project requirements')}
    ${p('2. A senior solutions advisor contacts you within 1 business day')}
    ${p('3. We schedule a detailed discovery &amp; consultation call')}
    ${p('4. You receive a customised proposal &amp; pricing', 'margin:0;')}
    ${p(`For urgent enterprise matters: <strong>sales@an-nita.com</strong> · <strong>+231 77 505 7227</strong>`, 'margin-top:16px;')}
  `)}
  ${ctaButton('https://an-nita.com/solutions', 'View Our Solutions')}`,
  { eyebrow: 'Sales Inquiry Received', eyebrowColor: 'teal', headline: 'Your inquiry is with our team', subhead: 'Annita Enterprise Solutions', preheader: `Hi ${escapeHtml(data.name)}, your sales inquiry for ${escapeHtml(data.companyName)} has been received.` }
);

// ─────────────────────────────────────────────────────────────────────────────
// ④ SOLUTIONS REQUEST TEMPLATES
// ─────────────────────────────────────────────────────────────────────────────

export const solutionsRequestAdminTemplate = (data: {
  fullName: string; email: string; phone: string; organization: string;
  projectName: string; projectSummary: string; solutionTypes: string[];
  budget: string; timeline: string;
}) => wrap(
  `${bodySection(`${greeting('A new custom solutions request has been received.')}`)}
  ${secondaryBlock(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailHeader('Project Details')}
      <tr><td style="padding-top:14px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${detailRow('Full name', escapeHtml(data.fullName))}
          ${detailRow('Organization', escapeHtml(data.organization))}
          ${detailRow('Email', `<a href="mailto:${safeUrl(data.email)}" class="text-link" style="color:#17B8A6;">${escapeHtml(data.email)}</a>`)}
          ${detailRow('Phone', escapeHtml(data.phone))}
          ${detailRow('Project name', escapeHtml(data.projectName))}
          ${detailRow('Solution types', escapeHtml(data.solutionTypes.join(' · ')))}
          ${detailRow('Budget', escapeHtml(data.budget))}
          ${detailRow('Timeline', escapeHtml(data.timeline))}
          ${detailRow('Received at', new Date().toUTCString())}
        </table>
      </td></tr>
      <tr><td style="padding-top:14px;border-top:1px solid #E7E4DC;">
        <span class="font-display" style="color:#0B1229;font-size:13px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;">Project Summary</span>
        <p class="font-body" style="color:#3A4150;font-size:14px;line-height:22px;margin-top:8px;">${escapeHtmlMultiline(data.projectSummary)}</p>
      </td></tr>
    </table>
  `)}`,
  { eyebrow: 'Admin · Solutions Request', eyebrowColor: 'red', headline: 'New Custom Solutions Request', subhead: 'Annita Custom Solutions Pipeline' }
);

export const solutionsRequestConfirmationTemplate = (data: { name: string; projectName: string }) => wrap(
  `${bodySection(`
    ${greeting(`Hi ${escapeHtml(data.name)},`)}
    ${p(`Thank you for submitting your solutions request for <strong>"${escapeHtml(data.projectName)}"</strong>. Our technical team has received all your project details and will begin reviewing them immediately.`)}
    ${p(`<strong>Our solutions team will contact you within 1–2 business days.</strong>`, 'font-size:13px;')}
  `)}
  ${divider()}
  ${bodySection(`
    ${p(`<strong style="color:#0B1229;">Your build journey begins:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
    ${p('1. Technical team reviews your full project requirements')}
    ${p('2. We schedule a technical discovery &amp; scoping call')}
    ${p('3. You receive a detailed proposal, architecture plan &amp; timeline')}
    ${p('4. Development begins on your custom-built solution', 'margin:0;')}
    ${p(`For urgent project inquiries: <strong>solutions@an-nita.com</strong>`, 'margin-top:16px;')}
  `)}
  ${ctaButton('https://an-nita.com/solutions', 'View Our Solutions')}`,
  { eyebrow: 'Solutions Request Received', eyebrowColor: 'teal', headline: 'Your project is in our hands', subhead: 'Annita Custom Solutions', preheader: `Hi ${escapeHtml(data.name)}, your custom solutions request for "${escapeHtml(data.projectName)}" has been received.` }
);

// ─────────────────────────────────────────────────────────────────────────────
// ⑤ BETA SIGNUP TEMPLATES
// ─────────────────────────────────────────────────────────────────────────────

const roleLabelMap: Record<string, string> = {
  buyer: 'Buyer',
  seller: 'Seller / Business',
  logistics: 'Logistics / Courier',
};

export const betaSignupConfirmationTemplate = (data: {
  fullName: string; role: string; queuePosition: number; country: string;
}) => wrap(
  `${bodySection(`
    ${greeting(`Hi ${escapeHtml(data.fullName)},`)}
    ${p(`You've successfully joined the <strong>Annita Beta</strong> as a <strong>${escapeHtml(roleLabelMap[data.role] || data.role)}</strong>. Your spot is reserved and we'll notify you the moment your access is ready.`)}
  `)}
  ${bodySection(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B1229;border-radius:14px;">
      <tr>
        <td align="center" style="padding:28px 20px;">
          <p class="font-display" style="color:#F5A623;font-size:52px;font-weight:800;line-height:1;margin:0;">#${escapeHtml(data.queuePosition)}</p>
          <p class="font-body" style="color:#8B93A7;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;margin-top:8px;">Your Queue Position</p>
        </td>
      </tr>
    </table>
  `)}
  ${secondaryBlock(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailHeader('Your Details')}
      <tr><td style="padding-top:14px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${detailRow('Country', escapeHtml(data.country))}
          ${detailRow('Role', escapeHtml(roleLabelMap[data.role] || data.role))}
          ${detailRow('Status', 'Waitlisted — access granted in order')}
        </table>
      </td></tr>
    </table>
  `)}
  ${divider()}
  ${bodySection(`
    ${p(`<strong style="color:#0B1229;">What is Annita?</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
    ${p(`Annita is Africa's first all-in-one digital ecosystem, integrating e-commerce, fintech, AI, communication, marketing, logistics, and more into a single, connected system.`)}
    ${p('• One interface for buying, selling &amp; shipping')}
    ${p('• AI-powered product discovery &amp; payments')}
    ${p('• Works offline — built for Africa\'s connectivity realities', 'margin:0;')}
  `)}
  ${ctaButton('https://an-nita.com', 'Learn More About Annita')}`,
  { eyebrow: 'Annita Beta', eyebrowColor: 'amber', headline: "You're on the waitlist!", subhead: 'Annita Beta — Limited to 100 spots per role', preheader: `You're #${escapeHtml(data.queuePosition)} on the Annita Beta waitlist as a ${escapeHtml(roleLabelMap[data.role] || data.role)}.` }
);

export const betaSignupAdminTemplate = (data: {
  fullName: string; email: string; phone?: string; role: string;
  country: string; queuePosition: number; businessName?: string;
}) => wrap(
  `${bodySection(`${greeting('A new beta signup has been received.')}`)}
  ${secondaryBlock(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailHeader('Signup Details')}
      <tr><td style="padding-top:14px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${detailRow('Full name', escapeHtml(data.fullName))}
          ${detailRow('Role', escapeHtml(roleLabelMap[data.role] || data.role))}
          ${detailRow('Email', `<a href="mailto:${safeUrl(data.email)}" class="text-link" style="color:#17B8A6;">${escapeHtml(data.email)}</a>`)}
          ${data.phone ? detailRow('Phone', escapeHtml(data.phone)) : ''}
          ${detailRow('Country', escapeHtml(data.country))}
          ${detailRow('Queue position', `#${escapeHtml(data.queuePosition)}`)}
          ${data.businessName ? detailRow('Business name', escapeHtml(data.businessName)) : ''}
          ${detailRow('Signed up at', new Date().toUTCString())}
        </table>
      </td></tr>
    </table>
  `)}`,
  { eyebrow: 'Admin · Beta Signup', eyebrowColor: 'red', headline: 'New Annita Beta Signup', subhead: `Position #${escapeHtml(data.queuePosition)} · Role: ${escapeHtml(roleLabelMap[data.role] || data.role)}` }
);

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

  return wrap(
    `${bodySection(`
      ${greeting('Hello,')}
      ${p(`We received a request to delete your account from <strong>${escapeHtml(productName)}</strong>. To protect your privacy, we require email verification before processing this request.`)}
    `)}
    ${secondaryBlock(`
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${detailHeader('Request Details')}
        <tr><td style="padding-top:14px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow('Email', escapeHtml(data.email))}
            ${detailRow('Product', escapeHtml(productName))}
          </table>
        </td></tr>
      </table>
    `)}
    ${divider()}
    ${bodySection(`
      ${p(`<strong style="color:#0B1229;">To confirm this request:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
    `)}
    ${ctaButton(verificationUrl, 'Confirm Deletion Request')}
    ${bodySection(`
      ${p(`Or copy and paste this link into your browser:`, 'font-size:12px;')}
      ${p(`<span style="color:#17B8A6;word-break:break-all;font-size:12px;">${escapeHtml(verificationUrl)}</span>`, 'margin:0;')}
    `)}
    ${divider()}
    ${bodySection(`
      ${p(`<strong style="color:#EF4444;">Important:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
      ${p('• This link expires in 24 hours')}
      ${p('• Once verified, your deletion request will be processed within 30 days')}
      ${p('• You cannot undo this request after verification', 'margin:0;')}
      ${p(`If you did not request this deletion, please ignore this email or contact us at <a href="mailto:info@an-nita.com" class="text-link" style="color:#17B8A6;">info@an-nita.com</a>.`, 'margin-top:16px;')}
    `)}`,
    { eyebrow: 'Account Deletion', eyebrowColor: 'red', headline: 'Confirm Your Deletion Request', subhead: 'Please verify your email to proceed', preheader: `Confirm your account deletion request for ${productName}` }
  );
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

  return wrap(
    `${bodySection(`
      ${greeting('Hello,')}
      ${p(`We have received your request to delete your account from <strong>${escapeHtml(productName)}</strong>.`)}
    `)}
    ${secondaryBlock(`
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${detailHeader('Request Details')}
        <tr><td style="padding-top:14px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow('Request ID', `#${escapeHtml(data.requestId)}`)}
            ${detailRow('Email', escapeHtml(data.email))}
            ${detailRow('Product', escapeHtml(productName))}
          </table>
        </td></tr>
      </table>
    `)}
    ${divider()}
    ${bodySection(`
      ${p(`<strong style="color:#0B1229;">What happens next:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
      ${p('• Your request will be processed within 30 days')}
      ${p('• You will receive a confirmation email when deletion is complete')}
      ${p('• Your data will be permanently deleted from our systems')}
      ${p('• You will not be able to recover your account after deletion', 'margin:0;')}
      ${p(`If you did not request this deletion, please contact us immediately at <a href="mailto:info@an-nita.com" class="text-link" style="color:#17B8A6;">info@an-nita.com</a>.`, 'margin-top:16px;')}
      ${p('Thank you for using Annita services.')}
    `)}`,
    { eyebrow: 'Account Deletion', eyebrowColor: 'red', headline: 'Deletion Request Received', subhead: 'Your request has been submitted for processing' }
  );
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

  return wrap(
    `${bodySection(`
      ${greeting('Admin,')}
      ${p('A new account deletion request has been submitted:')}
    `)}
    ${secondaryBlock(`
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${detailHeader('Deletion Request')}
        <tr><td style="padding-top:14px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow('Request ID', `#${escapeHtml(data.requestId)}`)}
            ${detailRow('Email', `<a href="mailto:${safeUrl(data.email)}" class="text-link" style="color:#17B8A6;">${escapeHtml(data.email)}</a>`)}
            ${detailRow('Product', escapeHtml(productName))}
            ${detailRow('Communication', escapeHtml(data.communicationChannel))}
          </table>
        </td></tr>
        <tr><td style="padding-top:14px;border-top:1px solid #E7E4DC;">
          <span class="font-display" style="color:#0B1229;font-size:13px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;">Reason for Deletion</span>
          <p class="font-body" style="color:#3A4150;font-size:14px;line-height:22px;margin-top:8px;">${escapeHtmlMultiline(data.reason)}</p>
        </td></tr>
      </table>
    `)}
    ${divider()}
    ${bodySection(`
      ${p(`<strong style="color:#0B1229;">Action Required:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
      ${p('1. Review the deletion request')}
      ${p('2. Verify the user\'s identity')}
      ${p('3. Process the deletion within 30 days')}
      ${p('4. Update the request status in the system', 'margin:0;')}
    `)}`,
    { eyebrow: 'Admin Notification', eyebrowColor: 'red', headline: 'Account Deletion Request', subhead: 'New deletion request submitted' }
  );
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

  return wrap(
    `${bodySection(`
      ${greeting('Hello,')}
      ${p(`Your account deletion request for <strong>${escapeHtml(productName)}</strong> has been completed.`)}
    `)}
    ${secondaryBlock(`
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${detailHeader('Completion Details')}
        <tr><td style="padding-top:14px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow('Email', escapeHtml(data.email))}
            ${detailRow('Product', escapeHtml(productName))}
            ${detailRow('Completed at', new Date().toUTCString())}
          </table>
        </td></tr>
      </table>
    `)}
    ${divider()}
    ${bodySection(`
      ${p(`<strong style="color:#EF4444;">Important:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
      ${p('• Your account has been permanently deleted')}
      ${p('• All your data has been removed from our systems')}
      ${p('• You will no longer receive communications from this service')}
      ${p('• You cannot recover this account', 'margin:0;')}
      ${p('If you wish to use our services again in the future, you will need to create a new account.', 'margin-top:16px;')}
      ${p('Thank you for your time with Annita.')}
    `)}`,
    { eyebrow: 'Account Deletion', eyebrowColor: 'red', headline: 'Deletion Completed', subhead: 'Your account has been permanently deleted' }
  );
}

// Career Application Templates
function careerApplicationConfirmationTemplate(data: { applicantName: string; email: string; jobTitle?: string }) {
  return wrap(
    `${bodySection(`
      ${greeting(`Hello ${escapeHtml(data.applicantName)},`)}
      ${p(`We have received your application${data.jobTitle ? ` for the <strong>${escapeHtml(data.jobTitle)}</strong> position` : ' to join our talent pool'}.`)}
    `)}
    ${secondaryBlock(`
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${detailHeader('Application Details')}
        <tr><td style="padding-top:14px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow('Email', escapeHtml(data.email))}
            ${detailRow('Position', data.jobTitle ? escapeHtml(data.jobTitle) : 'Talent Pool')}
            ${detailRow('Received', new Date().toUTCString())}
          </table>
        </td></tr>
      </table>
    `)}
    ${divider()}
    ${bodySection(`
      ${p(`<strong style="color:#0B1229;">What happens next:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
      ${p('• Our team will review your application')}
      ${p('• We will contact you if your profile matches our needs')}
      ${p('• This process typically takes 1-2 weeks', 'margin:0;')}
      ${p(`If you have any questions, feel free to reach out to us at <a href="mailto:info@an-nita.com" class="text-link" style="color:#17B8A6;">info@an-nita.com</a>.`, 'margin-top:16px;')}
      ${p('Thank you for considering Annita as your next career move.')}
    `)}`,
    { eyebrow: 'Career Application', eyebrowColor: 'teal', headline: 'Application Received', subhead: 'Thank you for your interest in joining Annita' }
  );
}

function careerApplicationAdminTemplate(data: { applicantName: string; email: string; jobTitle?: string; country: string; phone?: string }) {
  return wrap(
    `${bodySection(`
      ${greeting('HR Team,')}
      ${p('A new career application has been submitted:')}
    `)}
    ${secondaryBlock(`
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${detailHeader('Applicant Details')}
        <tr><td style="padding-top:14px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow('Name', escapeHtml(data.applicantName))}
            ${detailRow('Email', `<a href="mailto:${safeUrl(data.email)}" class="text-link" style="color:#17B8A6;">${escapeHtml(data.email)}</a>`)}
            ${detailRow('Position', data.jobTitle ? escapeHtml(data.jobTitle) : 'Talent Pool')}
            ${detailRow('Country', escapeHtml(data.country))}
            ${data.phone ? detailRow('Phone', escapeHtml(data.phone)) : ''}
          </table>
        </td></tr>
      </table>
    `)}
    ${divider()}
    ${bodySection(`
      ${p(`<strong style="color:#0B1229;">Action Required:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
      ${p('1. Review the application in the system')}
      ${p('2. Check if the candidate matches open positions')}
      ${p('3. Schedule an interview if appropriate', 'margin:0;')}
    `)}`,
    { eyebrow: 'Admin Notification', eyebrowColor: 'red', headline: 'New Career Application', subhead: 'Talent pool or job application received' }
  );
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

  return wrap(
    `${bodySection(`
      ${greeting(`Hello ${escapeHtml(data.contactName)},`)}
      ${p(`We have received your partnership inquiry from <strong>${escapeHtml(data.companyName)}</strong>.`)}
    `)}
    ${secondaryBlock(`
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${detailHeader('Inquiry Details')}
        <tr><td style="padding-top:14px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow('Company', escapeHtml(data.companyName))}
            ${detailRow('Email', escapeHtml(data.email))}
            ${detailRow('Type', escapeHtml(partnershipLabel))}
            ${detailRow('Received', new Date().toUTCString())}
          </table>
        </td></tr>
      </table>
    `)}
    ${divider()}
    ${bodySection(`
      ${p(`<strong style="color:#0B1229;">What happens next:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
      ${p('• Our partnerships team will review your inquiry')}
      ${p('• We will assess alignment with our strategic goals')}
      ${p('• We will contact you within 5-7 business days', 'margin:0;')}
      ${p(`If you have any questions, feel free to reach out to us at <a href="mailto:info@an-nita.com" class="text-link" style="color:#17B8A6;">info@an-nita.com</a>.`, 'margin-top:16px;')}
      ${p('Thank you for considering a partnership with Annita.')}
    `)}`,
    { eyebrow: 'Partnership Inquiry', eyebrowColor: 'teal', headline: 'Inquiry Received', subhead: 'Thank you for your interest in partnering with Annita' }
  );
}

function partnershipAdminTemplate(data: { contactName: string; email: string; companyName: string; partnershipType: string; partnershipGoals: string }) {
  const partnershipLabels: Record<string, string> = {
    'technology': 'Technology Partnership',
    'distribution': 'Distribution Partnership',
    'investment': 'Investment Partnership',
    'other': 'Other Partnership'
  };
  const partnershipLabel = partnershipLabels[data.partnershipType] || data.partnershipType;

  return wrap(
    `${bodySection(`
      ${greeting('Partnerships Team,')}
      ${p('A new partnership inquiry has been submitted:')}
    `)}
    ${secondaryBlock(`
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${detailHeader('Inquiry Details')}
        <tr><td style="padding-top:14px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow('Company', escapeHtml(data.companyName))}
            ${detailRow('Contact', escapeHtml(data.contactName))}
            ${detailRow('Email', `<a href="mailto:${safeUrl(data.email)}" class="text-link" style="color:#17B8A6;">${escapeHtml(data.email)}</a>`)}
            ${detailRow('Type', escapeHtml(partnershipLabel))}
          </table>
        </td></tr>
        <tr><td style="padding-top:14px;border-top:1px solid #E7E4DC;">
          <span class="font-display" style="color:#0B1229;font-size:13px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;">Partnership Goals</span>
          <p class="font-body" style="color:#3A4150;font-size:14px;line-height:22px;margin-top:8px;">${escapeHtmlMultiline(data.partnershipGoals)}</p>
        </td></tr>
      </table>
    `)}
    ${divider()}
    ${bodySection(`
      ${p(`<strong style="color:#0B1229;">Action Required:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
      ${p('1. Review the partnership inquiry in the system')}
      ${p('2. Assess strategic alignment and potential value')}
      ${p('3. Schedule a discovery call if appropriate', 'margin:0;')}
    `)}`,
    { eyebrow: 'Admin Notification', eyebrowColor: 'red', headline: 'New Partnership Inquiry', subhead: 'Strategic partnership opportunity received' }
  );
}

// New Position Notification Template (for talent pool)
function newPositionNotificationTemplate(data: { email: string; applicantName: string; jobTitle: string; jobDescription: string; location: string }) {
  return wrap(
    `${bodySection(`
      ${greeting(`Hello ${escapeHtml(data.applicantName)},`)}
      ${p('We have a new position that matches your profile in our talent pool:')}
    `)}
    ${secondaryBlock(`
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${detailHeader('Position Details')}
        <tr><td style="padding-top:14px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow('Position', escapeHtml(data.jobTitle))}
            ${detailRow('Location', escapeHtml(data.location))}
          </table>
        </td></tr>
        <tr><td style="padding-top:14px;border-top:1px solid #E7E4DC;">
          <span class="font-display" style="color:#0B1229;font-size:13px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;">Job Description</span>
          <p class="font-body" style="color:#3A4150;font-size:14px;line-height:22px;margin-top:8px;">${escapeHtmlMultiline(data.jobDescription)}</p>
        </td></tr>
      </table>
    `)}
    ${divider()}
    ${bodySection(`
      ${p(`If you're interested in this position, please visit our careers page to apply.`)}
      ${p(`<a href="https://an-nita.com/careers" class="text-link" style="color:#17B8A6;font-weight:600;">View Careers Page</a>`)}
      ${p(`If you have any questions, feel free to reach out to us at <a href="mailto:info@an-nita.com" class="text-link" style="color:#17B8A6;">info@an-nita.com</a>.`)}
      ${p('Best regards,<br>The Annita Team', 'margin:0;')}
    `)}`,
    { eyebrow: 'New Opportunity', eyebrowColor: 'amber', headline: 'New Position Available', subhead: 'A role matching your profile has opened' }
  );
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
  return send({ to: data.email, subject: sanitizeHeader(`🚀 You're #${data.queuePosition} on Annita Beta!`), html: betaSignupConfirmationTemplate(data) });
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

// ⑩ Download Notification (Annita launch)
export async function sendDownloadNotifyConfirmation(email: string) {
  return send({ to: email, subject: '📱 You\'re on the Annita List — We\'ll Notify You!', html: downloadNotifyConfirmationTemplate(email) });
}
export async function sendDownloadNotifyAdminNotice(email: string) {
  return send({ to: adminEmail, subject: sanitizeHeader(`📱 New Annita Download Notification: ${email}`), html: downloadNotifyAdminTemplate(email) });
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
// DOWNLOAD NOTIFICATION TEMPLATES (Annita launch)
// ─────────────────────────────────────────────────────────────────────────────

export const downloadNotifyConfirmationTemplate = (email: string) => wrap(
  `${bodySection(`
    ${greeting("You're officially on the waitlist!")}
    ${p(`Thank you for your interest in <strong>Annita</strong> — Africa's all-in-one digital ecosystem app. We're putting the finishing touches on something powerful, and you'll be among the first to know when it's available for download on the App Store and Google Play.`)}
  `)}
  ${secondaryBlock(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailHeader('What happens next?')}
      <tr><td style="padding-top:14px;">
        <p class="font-body" style="color:#3A4150;font-size:14px;line-height:22px;margin:0;">We'll send you a launch notification email the moment Annita is live. No spam, just the good stuff.</p>
      </td></tr>
    </table>
  `)}
  ${divider()}
  ${bodySection(`
    ${p(`You're receiving this because you signed up for launch notifications at <a href="https://an-nita.com/download" class="text-link" style="color:#17B8A6;">an-nita.com/download</a>. If you didn't sign up, you can safely ignore this email.`, 'font-size:12px;color:#5B6472;')}
  `)}`,
  { eyebrow: 'Annita · Coming Soon', eyebrowColor: 'amber', headline: "You're on the List", subhead: "We'll notify you the moment Annita goes live", preheader: "You're on the Annita launch notification list — we'll email you when it's live." }
);

export const downloadNotifyAdminTemplate = (email: string) => wrap(
  `${bodySection(`
    ${greeting('New signup received')}
  `)}
  ${secondaryBlock(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${detailHeader('Signup Details')}
      <tr><td style="padding-top:14px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${detailRow('Email address', escapeHtml(email))}
        </table>
      </td></tr>
    </table>
  `)}
  ${divider()}
  ${bodySection(`
    ${p(`This user signed up at <a href="https://an-nita.com/download" class="text-link" style="color:#17B8A6;">an-nita.com/download</a> to be notified when Annita launches.`, 'font-size:12px;color:#5B6472;')}
  `)}`,
  { eyebrow: 'New Notification Signup', eyebrowColor: 'red', headline: 'Annita Launch List', subhead: 'New user wants to be notified at launch', preheader: 'New Annita launch notification signup.' }
);

// ─────────────────────────────────────────────────────────────────────────────
// DAILY HEALTH REPORT TEMPLATE
// ─────────────────────────────────────────────────────────────────────────────

export const adminAccessTemplate = (accessUrl: string) => wrap(
  `${bodySection(`
    ${greeting('Administrator,')}
    ${p(`You have been granted <strong>one-time secure access</strong> to the Annita system monitoring dashboard. This link expires in <span style="color:#F5A623;font-weight:700;">15 minutes</span> and can only be used <strong>once</strong> from the same device and network you requested it from.`)}
  `)}
  ${bodySection(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B1229;border-radius:14px;">
      <tr>
        <td align="center" style="padding:28px 20px;">
          <p class="font-display" style="color:#F5A623;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;margin-bottom:16px;">Secure Access Link</p>
          <a href="${safeUrl(accessUrl)}" class="font-body" target="_blank" style="display:inline-block;background-color:#F5A623;color:#0B1229;font-size:14px;font-weight:700;padding:14px 32px;border-radius:100px;text-decoration:none;">Open Admin Dashboard &nbsp;&rarr;</a>
          <p class="font-body" style="color:#8B93A7;font-size:11px;margin-top:12px;">Expires: ${new Date(Date.now() + 15 * 60000).toUTCString()}</p>
        </td>
      </tr>
    </table>
  `)}
  ${divider()}
  ${bodySection(`
    ${p(`<strong style="color:#EF4444;">⚠ This link is single-use, IP-bound, and device-bound. Do not forward or share.</strong>`, 'font-size:12px;')}
    ${p('If you did not request this, ignore this email. All admin access is audited.', 'font-size:12px;color:#5B6472;margin:0;')}
  `)}`,
  { eyebrow: 'Secure Admin Access', eyebrowColor: 'red', headline: 'Admin Dashboard Access', subhead: 'One-time secure access link — Do not share', preheader: 'Admin dashboard access — one-time secure link. Expires in 15 minutes.' }
);

export const adminCodeTemplate = (code: string) => wrap(
  `${bodySection(`
    ${greeting('Administrator,')}
    ${p(`A hidden admin access request was triggered. Use the verification code below to access the Annita admin dashboard. This code expires in <span style="color:#F5A623;font-weight:700;">5 minutes</span> and can only be used <strong>once</strong>.`)}
  `)}
  ${bodySection(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B1229;border-radius:14px;">
      <tr>
        <td align="center" style="padding:32px 20px;">
          <p class="font-display" style="color:#F5A623;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;margin-bottom:16px;">Verification Code</p>
          <p class="font-display" style="color:#FFFFFF;font-size:42px;font-weight:800;letter-spacing:0.3em;font-family:monospace;margin:0;">${escapeHtml(code)}</p>
          <p class="font-body" style="color:#8B93A7;font-size:11px;margin-top:16px;">Expires: ${new Date(Date.now() + 5 * 60000).toUTCString()}</p>
        </td>
      </tr>
    </table>
  `)}
  ${divider()}
  ${bodySection(`
    ${p(`<strong style="color:#EF4444;">⚠ This code is single-use and device-bound. Do not forward or share.</strong>`, 'font-size:12px;')}
    ${p('If you did not request this, ignore this email. All admin access is audited.', 'font-size:12px;color:#5B6472;margin:0;')}
  `)}`,
  { eyebrow: 'Secure Admin Access', eyebrowColor: 'red', headline: 'Admin Access Code', subhead: 'One-time verification code — Do not share', preheader: 'Admin access code — one-time verification. Expires in 5 minutes.' }
);

export const dailyHealthReportTemplate = (data: ReportData) => {
  const dbColor = healthStatusColor(data.dbStatus);
  const errColor = errorRateColor(data.errorRate);
  const dbLat = data.dbResponseTime != null ? `${data.dbResponseTime.toFixed(1)}ms` : 'N/A';

  const endpointRows = data.topEndpoints.slice(0, 6).map(ep => `
<tr>
  <td style="padding:6px 8px;font-size:12px;color:#0B1229;border-bottom:1px solid #E7E4DC;font-family:monospace;">${escapeHtml(ep.path)}</td>
  <td style="padding:6px 8px;font-size:12px;color:#0B1229;text-align:right;border-bottom:1px solid #E7E4DC;">${ep.hits}</td>
  <td style="padding:6px 8px;font-size:12px;color:#0B1229;text-align:right;border-bottom:1px solid #E7E4DC;">${ep.avgLatency.toFixed(1)}ms</td>
</tr>`).join('');

  const errorRows = data.recentErrors.slice(0, 5).map(e => `
<tr>
  <td style="padding:4px 8px;font-size:11px;color:#5B6472;font-family:monospace;">${escapeHtml(e.timestamp.split('T')[1].slice(0, 8))}</td>
  <td style="padding:4px 8px;font-size:11px;color:${severityColor(e.level)};font-weight:700;">${escapeHtml(e.level)}</td>
  <td style="padding:4px 8px;font-size:11px;color:#0B1229;">${escapeHtml(e.message.slice(0, 80))}</td>
</tr>`).join('');

  return wrap(
    `${bodySection(`
      ${greeting('Administrator,')}
      ${p(`Here is the ${escapeHtml(data.reportType)} system health summary for the Annita Landing Page server.`)}
    `)}
    ${bodySection(`
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td width="33%" align="center" style="padding:12px;background-color:#F7F6F2;border-radius:8px;">
            <p class="font-display" style="font-size:24px;font-weight:800;color:${escapeHtml(errColor)};margin:0;">${data.errorRate.toFixed(1)}%</p>
            <p class="font-body" style="font-size:10px;text-transform:uppercase;color:#5B6472;margin-top:4px;">Error Rate</p>
          </td>
          <td width="33%" align="center" style="padding:12px;background-color:#F7F6F2;border-radius:8px;">
            <p class="font-display" style="font-size:24px;font-weight:800;color:#F5A623;margin:0;">${data.totalRequests.toLocaleString()}</p>
            <p class="font-body" style="font-size:10px;text-transform:uppercase;color:#5B6472;margin-top:4px;">Total Requests</p>
          </td>
          <td width="33%" align="center" style="padding:12px;background-color:#F7F6F2;border-radius:8px;">
            <p class="font-display" style="font-size:24px;font-weight:800;color:${escapeHtml(dbColor)};margin:0;">${escapeHtml(data.dbStatus)}</p>
            <p class="font-body" style="font-size:10px;text-transform:uppercase;color:#5B6472;margin-top:4px;">Database</p>
          </td>
        </tr>
      </table>
    `)}
    ${divider()}
    ${secondaryBlock(`
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${detailHeader('Server Stats')}
        <tr><td style="padding-top:14px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow('Uptime', escapeHtml(data.uptime))}
            ${detailRow('Avg response', `${data.avgResponseTime.toFixed(1)}ms`)}
            ${detailRow('Errors', `${data.totalErrors} (${data.errorRate.toFixed(1)}%)`)}
            ${detailRow('DB latency', escapeHtml(dbLat))}
          </table>
        </td></tr>
      </table>
    `)}
    ${divider()}
    ${bodySection(`
      ${p(`<strong style="color:#0B1229;">Top Endpoints</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;">
        <tr style="border-bottom:2px solid #E7E4DC;">
          <th style="text-align:left;padding:4px 8px;font-size:10px;color:#5B6472;text-transform:uppercase;">Path</th>
          <th style="text-align:right;padding:4px 8px;font-size:10px;color:#5B6472;text-transform:uppercase;">Hits</th>
          <th style="text-align:right;padding:4px 8px;font-size:10px;color:#5B6472;text-transform:uppercase;">Latency</th>
        </tr>
        ${endpointRows}
      </table>
    `)}
    ${errorRows ? `
    ${divider()}
    ${bodySection(`
      ${p(`<strong style="color:#EF4444;">Recent Errors/Warnings</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;">
        ${errorRows}
      </table>
    `)}` : ''}
    ${ctaButton('https://an-nita.com', 'View Admin Dashboard')}`,
    { eyebrow: `${escapeHtml(data.reportType.toUpperCase())} Report`, eyebrowColor: 'red', headline: 'System Health Report', subhead: `${escapeHtml(data.date)} — Annita Landing Page Server`, preheader: `System Health Report — ${escapeHtml(data.date)} — Error Rate: ${data.errorRate.toFixed(1)}% — ${data.totalRequests.toLocaleString()} Requests` }
  );
};

export const weeklyHealthReportTemplate = (data: ReportData) => {
  return dailyHealthReportTemplate(data);
};

export const emergencyAlertTemplate = (data: { message: string; severity: string; timestamp: string; metrics?: Partial<ReportData> }) => wrap(
  `${bodySection(`
    ${greeting('⚠ Administrator — ACTION REQUIRED', '#EF4444')}
    ${p('A critical event was detected on the Annita Landing Page server. Please investigate immediately.')}
  `)}
  ${secondaryBlock(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.20);border-radius:14px;">
      <tr><td style="padding:16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${detailRow('Severity', `<span style="color:#EF4444;font-weight:700;">${escapeHtml(data.severity)}</span>`)}
        </table>
        <p class="font-display" style="color:#0B1229;font-size:13px;font-weight:700;letter-spacing:0.6px;text-transform:uppercase;margin-top:14px;padding-top:14px;border-top:1px solid #E7E4DC;">Alert Message</p>
        <p class="font-body" style="color:#3A4150;font-size:14px;line-height:22px;margin-top:8px;">${escapeHtmlMultiline(data.message)}</p>
      </td></tr>
    </table>
  `)}
  ${data.metrics ? `
  ${divider()}
  ${bodySection(`
    ${p(`<strong style="color:#0B1229;">Current Metrics Snapshot</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
    ${p(`DB: <span style="color:${escapeHtml(healthStatusColor(data.metrics.dbStatus || ''))};">${escapeHtml(data.metrics.dbStatus || '?')}</span>`)}
    ${p(`Errors: <span style="color:${escapeHtml(errorRateColor(data.metrics.errorRate || 0))};">${(data.metrics.errorRate || 0).toFixed(1)}%</span>`, 'margin:0;')}
  `)}` : ''}
  ${divider()}
  ${bodySection(`
    ${p(`<strong style="color:#EF4444;">Required Actions:</strong>`, 'font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;')}
    ${p('1. Check server health endpoint immediately')}
    ${p('2. Review recent logs for root cause')}
    ${p('3. Access admin dashboard for full diagnostics', 'margin:0;')}
  `)}`,
  { eyebrow: 'EMERGENCY ALERT', eyebrowColor: 'red', headline: 'Critical System Alert', subhead: `${escapeHtml(data.timestamp)} — Immediate attention required`, preheader: `CRITICAL ALERT — ${escapeHtml(data.severity)} — ${escapeHtml(data.message.slice(0, 100))}` }
);

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

export async function sendAdminCodeEmail(email: string, code: string) {
  return send({
    to: email,
    subject: '🔐 Annita Admin — Access Code',
    html: adminCodeTemplate(code),
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
