/**
 * ╔═════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║              ANNITA LANDING PAGE SERVER - EMAIL SERVICE                                       ║
 * ║                   Fortune 500 Enterprise Email Communication                                  ║
 * ╚═════════════════════════════════════════════════════════════════════════════════════════════╗
 * 
 * EMAIL SERVICE FEATURES:
 * 1. Resend API Integration - Enterprise email delivery
 * 2. Contact Form Emails - Automated contact form submissions
 * 3. Newsletter Subscriptions - Email list management
 * 4. Sales Inquiries - Enterprise sales email routing
 * 5. HTML Email Templates - Beautiful branded emails
 */

import { Resend } from 'resend';
import { logger } from './logger.js';

// ═══════════════════════════════════════════════════════════════════════════════
// EMAIL CLIENT INITIALIZATION
// ═══════════════════════════════════════════════════════════════════════════════

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'Annita LLC <annita@an-nita.com>';
const adminEmail = process.env.ADMIN_EMAIL || 'info@an-nita.com';

let resendClient: Resend | null = null;

if (resendApiKey) {
  resendClient = new Resend(resendApiKey);
  logger.info('Email service initialized', { provider: 'Resend' });
} else {
  logger.warn('Email service not initialized - RESEND_API_KEY missing');
}

// ═══════════════════════════════════════════════════════════════════════════════
// EMAIL TEMPLATES
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Contact Form Email Template (Admin)
 */
export const contactFormTemplate = (data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 5px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #667eea; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 New Contact Form Submission</h1>
      <p>Annita LLC Landing Page</p>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <span>${data.name}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span>${data.email}</span>
      </div>
      ${data.phone ? `
      <div class="field">
        <span class="label">Phone:</span>
        <span>${data.phone}</span>
      </div>
      ` : ''}
      ${data.company ? `
      <div class="field">
        <span class="label">Company:</span>
        <span>${data.company}</span>
      </div>
      ` : ''}
      <div class="field">
        <span class="label">Message:</span>
        <p>${data.message}</p>
      </div>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Annita LLC - Africa's Digital Heartbeat</p>
      <p>Monrovia, Liberia | +231 77 505 7227 | info@an-nita.com</p>
    </div>
  </div>
</body>
</html>
`;

/**
 * Contact Form Confirmation Template (Client)
 */
export const contactFormConfirmationTemplate = (data: { name: string }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Annita</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #00C28A 0%, #00A870 100%); color: white; padding: 30px; text-align: center; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 5px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ Thank You!</h1>
      <p>Your message has been received</p>
    </div>
    <div class="content">
      <h2>Dear ${data.name},</h2>
      <p>Thank you for contacting Annita LLC. We have received your message and our team will get back to you within 1-2 business days.</p>
      <p><strong>What happens next:</strong></p>
      <ul>
        <li>Our team reviews your inquiry</li>
        <li>We'll respond via email or phone</li>
        <li>If needed, we'll schedule a consultation</li>
      </ul>
      <p>If you have any urgent questions, please call us at +231 77 505 7227.</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Annita LLC - Africa's Digital Heartbeat</p>
      <p>www.an-nita.com | info@an-nita.com</p>
    </div>
  </div>
</body>
</html>
`;

/**
 * Newsletter Subscription Template
 */
export const newsletterTemplate = (email: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Newsletter Subscription</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 5px; text-align: center; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 Welcome to Annita LLC</h1>
      <p>Africa's Digital Heartbeat</p>
    </div>
    <div class="content">
      <h2>Newsletter Subscription Confirmed</h2>
      <p>Thank you for subscribing to our newsletter!</p>
      <p>You'll receive updates about our latest innovations, events, and insights.</p>
      <p><strong>Email:</strong> ${email}</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Annita LLC</p>
      <p>www.an-nita.com</p>
    </div>
  </div>
</body>
</html>
`;

/**
 * Sales Inquiry Template (Admin)
 */
export const salesInquiryTemplate = (data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  solutionInterest?: string;
  message: string;
}) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Sales Inquiry</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 5px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #667eea; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>💼 New Sales Inquiry</h1>
      <p>Enterprise Solutions Request</p>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <span>${data.name}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span>${data.email}</span>
      </div>
      ${data.phone ? `
      <div class="field">
        <span class="label">Phone:</span>
        <span>${data.phone}</span>
      </div>
      ` : ''}
      ${data.company ? `
      <div class="field">
        <span class="label">Company:</span>
        <span>${data.company}</span>
      </div>
      ` : ''}
      ${data.solutionInterest ? `
      <div class="field">
        <span class="label">Solution Interest:</span>
        <span>${data.solutionInterest}</span>
      </div>
      ` : ''}
      <div class="field">
        <span class="label">Message:</span>
        <p>${data.message}</p>
      </div>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Annita LLC - Enterprise Solutions</p>
      <p>enterprise@an-nita.com</p>
    </div>
  </div>
</body>
</html>
`;

/**
 * Sales Inquiry Confirmation Template (Client)
 */
export const salesInquiryConfirmationTemplate = (data: { name: string; company: string }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enterprise Inquiry Received</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #00C28A 0%, #00A870 100%); color: white; padding: 30px; text-align: center; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 5px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ Enterprise Inquiry Received</h1>
      <p>Annita Enterprise Solutions</p>
    </div>
    <div class="content">
      <h2>Dear ${data.name},</h2>
      <p>Thank you for your interest in Annita Enterprise Solutions. We have received your inquiry from <strong>${data.company}</strong>.</p>
      <p><strong>What happens next:</strong></p>
      <ul>
        <li>Our enterprise team reviews your project requirements</li>
        <li>We'll contact you within 1-2 business days</li>
        <li>We'll schedule a detailed consultation call</li>
        <li>You'll receive a customized proposal</li>
      </ul>
      <p>For urgent matters, please call our enterprise team at +231 77 505 7227.</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Annita LLC - Enterprise Solutions</p>
      <p>www.an-nita.com | sales@an-nita.com</p>
    </div>
  </div>
</body>
</html>
`;

// ═══════════════════════════════════════════════════════════════════════════════
// EMAIL SENDING FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Send contact form email (admin notification)
 */
export async function sendContactFormEmail(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  if (!resendClient) {
    const error = 'Email service not initialized';
    logger.error('Contact form email failed', { error });
    return { success: false, error };
  }

  try {
    const html = contactFormTemplate(data);
    
    await resendClient.emails.send({
      from: resendFromEmail,
      to: adminEmail,
      subject: `New Contact Form Submission from ${data.name}`,
      html,
    });

    logger.info('Contact form email sent to admin', { to: adminEmail, from: data.email });
    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Contact form email failed', { error: errorMessage });
    return { success: false, error: errorMessage };
  }
}

/**
 * Send contact form confirmation email (client)
 */
export async function sendContactFormConfirmation(data: {
  name: string;
  email: string;
}): Promise<{ success: boolean; error?: string }> {
  if (!resendClient) {
    const error = 'Email service not initialized';
    logger.error('Contact form confirmation email failed', { error });
    return { success: false, error };
  }

  try {
    const html = contactFormConfirmationTemplate(data);
    
    await resendClient.emails.send({
      from: resendFromEmail,
      to: data.email,
      subject: 'Thank you for contacting Annita LLC',
      html,
    });

    logger.info('Contact form confirmation email sent', { to: data.email });
    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Contact form confirmation email failed', { error: errorMessage });
    return { success: false, error: errorMessage };
  }
}

/**
 * Send newsletter confirmation email
 */
export async function sendNewsletterConfirmation(email: string): Promise<{ success: boolean; error?: string }> {
  if (!resendClient) {
    const error = 'Email service not initialized';
    logger.error('Newsletter confirmation email failed', { error });
    return { success: false, error };
  }

  try {
    const html = newsletterTemplate(email);
    
    await resendClient.emails.send({
      from: resendFromEmail,
      to: email,
      subject: 'Welcome to Annita LLC Newsletter',
      html,
    });

    logger.info('Newsletter confirmation email sent', { to: email });
    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Newsletter confirmation email failed', { error: errorMessage });
    return { success: false, error: errorMessage };
  }
}

/**
 * Send sales inquiry email (admin notification)
 */
export async function sendSalesInquiryEmail(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  solutionInterest?: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  if (!resendClient) {
    const error = 'Email service not initialized';
    logger.error('Sales inquiry email failed', { error });
    return { success: false, error };
  }

  try {
    const html = salesInquiryTemplate(data);
    const enterpriseEmail = process.env.ENTERPRISE_EMAIL || adminEmail;
    
    await resendClient.emails.send({
      from: resendFromEmail,
      to: enterpriseEmail,
      subject: `New Sales Inquiry from ${data.name}`,
      html,
    });

    logger.info('Sales inquiry email sent to admin', { to: enterpriseEmail, from: data.email });
    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Sales inquiry email failed', { error: errorMessage });
    return { success: false, error: errorMessage };
  }
}

/**
 * Send sales inquiry confirmation email (client)
 */
export async function sendSalesInquiryConfirmation(data: {
  name: string;
  email: string;
  company: string;
}): Promise<{ success: boolean; error?: string }> {
  if (!resendClient) {
    const error = 'Email service not initialized';
    logger.error('Sales inquiry confirmation email failed', { error });
    return { success: false, error };
  }

  try {
    const html = salesInquiryConfirmationTemplate(data);
    
    await resendClient.emails.send({
      from: resendFromEmail,
      to: data.email,
      subject: 'Enterprise Inquiry Received - Annita LLC',
      html,
    });

    logger.info('Sales inquiry confirmation email sent', { to: data.email });
    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Sales inquiry confirmation email failed', { error: errorMessage });
    return { success: false, error: errorMessage };
  }
}

/**
 * Send custom email
 */
export async function sendCustomEmail(params: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}): Promise<{ success: boolean; error?: string }> {
  if (!resendClient) {
    const error = 'Email service not initialized';
    logger.error('Custom email failed', { error });
    return { success: false, error };
  }

  try {
    await resendClient.emails.send({
      from: params.from || resendFromEmail,
      to: params.to,
      subject: params.subject,
      html: params.html,
    });

    logger.info('Custom email sent', { to: params.to, subject: params.subject });
    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Custom email failed', { error: errorMessage });
    return { success: false, error: errorMessage };
  }
}

/**
 * Solutions Request Confirmation Template (Client)
 */
export const solutionsRequestConfirmationTemplate = (data: { name: string; projectName: string }) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Solutions Request Received</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #00C28A 0%, #00A870 100%); color: white; padding: 30px; text-align: center; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 5px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ Solutions Request Received</h1>
      <p>Annita Custom Solutions</p>
    </div>
    <div class="content">
      <h2>Dear ${data.name},</h2>
      <p>Thank you for submitting your solutions request for <strong>${data.projectName}</strong>. Our team has received your detailed requirements.</p>
      <p><strong>What happens next:</strong></p>
      <ul>
        <li>Our solutions team reviews your project requirements</li>
        <li>We'll contact you within 1-2 business days</li>
        <li>We'll schedule a technical consultation</li>
        <li>You'll receive a detailed proposal and timeline</li>
      </ul>
      <p>For urgent matters, please call our solutions team at +231 77 505 7227.</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} Annita LLC - Custom Solutions</p>
      <p>www.an-nita.com | solutions@an-nita.com</p>
    </div>
  </div>
</body>
</html>
`;

/**
 * Send solutions request confirmation email (client)
 */
export async function sendSolutionsRequestConfirmation(data: {
  name: string;
  email: string;
  projectName: string;
}): Promise<{ success: boolean; error?: string }> {
  if (!resendClient) {
    const error = 'Email service not initialized';
    logger.error('Solutions request confirmation email failed', { error });
    return { success: false, error };
  }

  try {
    const html = solutionsRequestConfirmationTemplate(data);
    
    await resendClient.emails.send({
      from: resendFromEmail,
      to: data.email,
      subject: 'Solutions Request Received - Annita LLC',
      html,
    });

    logger.info('Solutions request confirmation email sent', { to: data.email });
    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logger.error('Solutions request confirmation email failed', { error: errorMessage });
    return { success: false, error: errorMessage };
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// EMAIL SERVICE STATUS
// ═══════════════════════════════════════════════════════════════════════════════

export function getEmailServiceStatus() {
  return {
    initialized: !!resendClient,
    provider: 'Resend',
    fromEmail: resendFromEmail,
    adminEmail: adminEmail,
  };
}
