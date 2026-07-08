/**
 * Form Feedback Modal
 * Reusable modal for showing form submission status (success, error, server unavailable)
 */

'use client';

import React from 'react';
import { X, CheckCircle, AlertCircle, Wifi, WifiOff, Loader2, MessageSquare } from 'lucide-react';

export type ModalType = 'success' | 'error' | 'server-unavailable' | 'checking';

interface FormFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType;
  title?: string;
  message?: string;
  latency?: number;
}

export function FormFeedbackModal({
  isOpen,
  onClose,
  type,
  title,
  message,
  latency,
}: FormFeedbackModalProps) {
  if (!isOpen) return null;

  const getDefaultContent = () => {
    switch (type) {
      case 'success':
        return {
          title: title || 'Submission Successful',
          message: message || 'Your form has been submitted successfully. We will get back to you within 1-2 business days.',
          icon: <CheckCircle className="w-16 h-16" />,
          iconColor: 'var(--color-accent)',
          bgColor: 'var(--color-accent-soft)',
          borderColor: 'var(--color-accent)',
        };
      case 'error':
        return {
          title: title || 'Submission Failed',
          message: message || 'There was an error submitting your form. Please try again later.',
          icon: <AlertCircle className="w-16 h-16" />,
          iconColor: 'var(--color-brand-error, #DC2626)',
          bgColor: 'rgba(239, 68, 68, 0.1)',
          borderColor: 'var(--color-brand-error, #DC2626)',
        };
      case 'server-unavailable':
        return {
          title: title || 'Server Unavailable',
          message: message || 'Our server is currently unavailable. Please check your internet connection and try again later.',
          icon: <WifiOff className="w-16 h-16" />,
          iconColor: 'var(--color-brand-warning, #F59E0B)',
          bgColor: 'rgba(245, 158, 11, 0.1)',
          borderColor: 'var(--color-brand-warning, #F59E0B)',
        };
      case 'checking':
        return {
          title: title || 'Checking Server',
          message: message || 'Verifying server connection...',
          icon: <Loader2 className="w-16 h-16 animate-spin" />,
          iconColor: 'var(--color-brand-info, #0284C7)',
          bgColor: 'rgba(59, 130, 246, 0.1)',
          borderColor: 'var(--color-brand-info, #0284C7)',
        };
    }
  };

  const content = getDefaultContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative rounded-2xl p-8 max-w-md w-full tech-glow-card"
        style={{
          backgroundColor: 'var(--color-surface-modal)',
          border: `1px solid ${content.borderColor}`,
          boxShadow: 'var(--shadow-premium)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg transition-colors hover:bg-white/10"
          style={{ color: 'var(--color-text-tertiary)' }}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="rounded-full p-4"
            style={{
              backgroundColor: content.bgColor,
              color: content.iconColor,
            }}
          >
            {content.icon}
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-2xl font-bold text-center mb-4"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-syne)' }}
        >
          {content.title}
        </h3>

        {/* Message */}
        <p
          className="text-center mb-6"
          style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}
        >
          {content.message}
        </p>

        {/* Latency Display (for success) */}
        {type === 'success' && latency && (
          <div className="text-center mb-6">
            <span
              className="text-sm"
              style={{ color: 'var(--color-accent)' }}
            >
              Response time: {latency}ms
            </span>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full px-6 py-3 rounded-full font-semibold transition-all"
          style={{
            backgroundColor: type === 'success' ? 'var(--color-accent)' : 'var(--color-surface-raised)',
            color: type === 'success' ? 'var(--color-accent-foreground)' : 'var(--color-text-primary)',
            border: type === 'success' ? 'none' : '1px solid var(--color-border-subtle)',
          }}
        >
          {type === 'success' ? 'Continue' : 'Close'}
        </button>

        {/* WhatsApp Contact for Error States */}
        {(type === 'error' || type === 'server-unavailable') && (
          <div className="mt-4 pt-4 border-t border-[var(--color-border-subtle)]">
            <p className="text-center text-sm mb-3" style={{ color: 'var(--color-text-tertiary)' }}>
              Need immediate assistance? Contact us via WhatsApp:
            </p>
            <div className="space-y-2">
              <a
                href="https://wa.me/231886213748"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-all text-sm w-full"
              >
                <MessageSquare className="w-4 h-4" />
                <span>+231 886 213 748</span>
              </a>
              <a
                href="https://wa.me/231775057227"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-all text-sm w-full"
              >
                <MessageSquare className="w-4 h-4" />
                <span>+231 77 505 7227</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
