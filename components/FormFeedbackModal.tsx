/**
 * Form Feedback Modal
 * Reusable modal for showing form submission status (success, error, server unavailable)
 */

'use client';

import React from 'react';
import { X, CheckCircle, AlertCircle, Wifi, WifiOff, Loader2 } from 'lucide-react';

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
          iconColor: '#00C28A',
          bgColor: 'rgba(0, 194, 138, 0.1)',
          borderColor: '#00C28A',
        };
      case 'error':
        return {
          title: title || 'Submission Failed',
          message: message || 'There was an error submitting your form. Please try again later.',
          icon: <AlertCircle className="w-16 h-16" />,
          iconColor: '#EF4444',
          bgColor: 'rgba(239, 68, 68, 0.1)',
          borderColor: '#EF4444',
        };
      case 'server-unavailable':
        return {
          title: title || 'Server Unavailable',
          message: message || 'Our server is currently unavailable. Please check your internet connection and try again later.',
          icon: <WifiOff className="w-16 h-16" />,
          iconColor: '#F59E0B',
          bgColor: 'rgba(245, 158, 11, 0.1)',
          borderColor: '#F59E0B',
        };
      case 'checking':
        return {
          title: title || 'Checking Server',
          message: message || 'Verifying server connection...',
          icon: <Loader2 className="w-16 h-16 animate-spin" />,
          iconColor: '#3B82F6',
          bgColor: 'rgba(59, 130, 246, 0.1)',
          borderColor: '#3B82F6',
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
          backgroundColor: '#0F1729',
          border: `1px solid ${content.borderColor}`,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg transition-colors hover:bg-white/10"
          style={{ color: '#8A9BBB' }}
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
          style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}
        >
          {content.title}
        </h3>

        {/* Message */}
        <p
          className="text-center mb-6"
          style={{ color: '#8A9BBB', lineHeight: '1.6' }}
        >
          {content.message}
        </p>

        {/* Latency Display (for success) */}
        {type === 'success' && latency && (
          <div className="text-center mb-6">
            <span
              className="text-sm"
              style={{ color: '#00C28A' }}
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
            backgroundColor: type === 'success' ? '#00C28A' : '#1A2640',
            color: type === 'success' ? '#080D1A' : '#F0F4FF',
            border: type === 'success' ? 'none' : '1px solid #2A3A5C',
          }}
        >
          {type === 'success' ? 'Continue' : 'Close'}
        </button>
      </div>
    </div>
  );
}
