'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, use } from 'react'
import { Briefcase, MapPin, Users, ArrowRight, ArrowLeft, Mail, Phone, Globe, FileText, Building2, Phone as PhoneIcon, MessageSquare, AlertCircle, Loader2, CheckCircle, X } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import NewsletterSection from '@/components/newsletter-section'
import { HoneypotField } from '@/components/HoneypotField'
import { fetchJobPosting, submitCareerApplication, type JobPosting } from '@/lib/api'

interface CustomField {
  id: string
  label: string
  type: 'text' | 'textarea' | 'select' | 'number' | 'url'
  required?: boolean
  options?: string[]
  placeholder?: string
}

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [job, setJob] = useState<JobPosting | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [customFields, setCustomFields] = useState<CustomField[]>([])

  const [formData, setFormData] = useState({
    jobId: undefined as number | undefined,
    applicantName: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    linkedInUrl: '',
    portfolioUrl: '',
    resumeUrl: '',
    coverLetter: '',
    customResponses: {} as Record<string, string>,
    website_url: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    loadJob()
  }, [id])

  const loadJob = async () => {
    const jobId = parseInt(id, 10)
    if (Number.isNaN(jobId)) {
      setError('Invalid job ID')
      setLoading(false)
      return
    }

    const data = await fetchJobPosting(jobId)
    if (!data) {
      setError('Job posting not found')
      setLoading(false)
      return
    }

    if (data.status !== 'open') {
      setError('This position is no longer accepting applications')
      setLoading(false)
      return
    }

    setJob(data)
    setFormData(prev => ({ ...prev, jobId: data.id }))

    // Parse customFields if present
    try {
      const parsed = data.customFields
      if (parsed && Array.isArray(parsed)) {
        setCustomFields(parsed as CustomField[])
      } else if (parsed && typeof parsed === 'object') {
        // Support object format: { fieldName: { label, type, ... } }
        const fields: CustomField[] = Object.entries(parsed as Record<string, any>).map(([key, value]: [string, any]) => ({
          id: key,
          label: value.label || key,
          type: value.type || 'text',
          required: value.required,
          options: value.options,
          placeholder: value.placeholder,
        }))
        setCustomFields(fields)
      }
    } catch (e) {
      // Ignore malformed customFields
    }

    setLoading(false)
  }

  const handleApplyClick = () => {
    setShowApplicationForm(true)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const result = await submitCareerApplication(formData)
      if (result.success) {
        setSubmitStatus('success')
        setSubmitMessage(result.message || 'Application submitted successfully!')
        setFormData({
          jobId: job?.id,
          applicantName: '',
          email: '',
          phone: '',
          country: '',
          address: '',
          linkedInUrl: '',
          portfolioUrl: '',
          resumeUrl: '',
          coverLetter: '',
          customResponses: {},
          website_url: '',
        })
        setShowApplicationForm(false)
      } else {
        setSubmitStatus('error')
        setSubmitMessage(result.message || 'An error occurred. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappNumbers = [
    { name: 'Customer Service 1', number: '+231886213748' },
    { name: 'Customer Service 2', number: '+231775057227' },
  ]

  if (loading) {
    return (
      <div className="min-h-screen tech-grid theme-bg">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col items-center gap-4 text-[var(--color-text-tertiary)]">
            <Loader2 className="w-10 h-10 animate-spin text-[var(--color-accent)]" />
            <span className="text-sm font-mono uppercase tracking-widest">Loading Position...</span>
          </div>
        </div>
      </div>
    )
  }

  if (error || !job) {
    return (
      <div className="min-h-screen tech-grid theme-bg">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 mt-8">
          <div className="border border-[var(--color-border-card)] rounded-xl p-8 md:p-12 bg-[var(--color-surface-card)]/30 backdrop-blur-sm text-center">
            <AlertCircle className="w-16 h-16 text-[var(--color-accent)] mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
              {error || 'Position Not Found'}
            </h1>
            <p className="text-[var(--color-text-secondary)] mb-6">
              The position you're looking for may have been closed or removed.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] rounded-lg font-semibold hover:brightness-110 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Positions
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen tech-grid theme-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center px-4 md:px-8 py-16 md:py-20 overflow-hidden tech-scanline">
        <div className="absolute inset-0 tech-grid opacity-[0.08]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% -20%, rgba(0, 194, 138, 0.15), transparent 70%), linear-gradient(135deg, rgba(0, 194, 138, 0.03) 0%, transparent 50%), linear-gradient(225deg, rgba(0, 194, 138, 0.03) 0%, transparent 50%)',
          backgroundSize: '100% 100%, 40px 40px, 40px 40px'
        }} />

        <span className="absolute top-8 left-8 w-6 h-6 border-t border-l border-[var(--color-accent)]/20" />
        <span className="absolute top-8 right-8 w-6 h-6 border-t border-r border-[var(--color-accent)]/20" />
        <span className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-[var(--color-accent)]/20" />
        <span className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-[var(--color-accent)]/20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-4 px-3 py-1.5 rounded-md mb-8 border border-[var(--color-accent)]/20 bg-[var(--color-surface-card)]/60 backdrop-blur-md relative overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--color-accent)]/50" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--color-accent)]/50" />
            <Briefcase className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-[10px] font-mono tracking-widest text-[var(--color-text-tertiary)] uppercase">
              Careers // <span className="text-[var(--color-accent)] font-bold">{job.department}</span>
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-syne)' }}>
            {job.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/60 text-sm text-[var(--color-text-secondary)]">
              <MapPin className="w-4 h-4 text-[var(--color-accent)]" /> {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/60 text-sm text-[var(--color-text-secondary)]">
              <Briefcase className="w-4 h-4 text-[var(--color-accent)]" /> {job.employmentType}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-card)]/60 text-sm text-[var(--color-text-secondary)]">
              <Users className="w-4 h-4 text-[var(--color-accent)]" /> {job.experienceLevel}
            </span>
            {job.salaryRange && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] text-sm text-[var(--color-accent)] font-medium">
                {job.salaryRange}
              </span>
            )}
          </div>
        </motion.div>
      </section>

      {/* Content + Application */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> All Positions
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">About the Role</h2>
              <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)] whitespace-pre-wrap leading-relaxed">
                {job.description}
              </div>
            </div>

            <div className="border border-[var(--color-border-card)] rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Requirements</h2>
              <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)] whitespace-pre-wrap leading-relaxed">
                {job.requirements}
              </div>
            </div>
          </motion.div>

          {/* Sidebar / Application */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            {!showApplicationForm ? (
              <div className="border border-[var(--color-accent)]/30 rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm sticky top-20">
                <div className="text-center mb-6">
                  <Building2 className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Ready to Apply?</h3>
                  <p className="text-sm text-[var(--color-text-tertiary)]">
                    Submit your application and our team will be in touch.
                  </p>
                </div>

                <button
                  onClick={handleApplyClick}
                  className="w-full px-6 py-3 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] rounded-lg font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/careers"
                  className="block text-center mt-3 text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  Or join our Talent Pool
                </Link>

                {/* WhatsApp Contact */}
                <div className="mt-6 pt-6 border-t border-[var(--color-border-card)]">
                  <p className="text-xs text-[var(--color-text-tertiary)] mb-3 text-center">
                    Questions? Contact our HR team via WhatsApp:
                  </p>
                  <div className="flex flex-col gap-2">
                    {whatsappNumbers.map((contact) => (
                      <a
                        key={contact.number}
                        href={`https://wa.me/${contact.number.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-all text-xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{contact.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="border border-[var(--color-accent)]/30 rounded-xl p-6 md:p-8 bg-[var(--color-surface-card)]/30 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Application Form</h3>
                  <button
                    onClick={() => setShowApplicationForm(false)}
                    className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
                    aria-label="Close form"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  <HoneypotField onChange={(value) => setFormData(prev => ({ ...prev, website_url: value }))} />

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.applicantName}
                      onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                      placeholder="+231 ..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                      placeholder="Liberia"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                      placeholder="Your address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">LinkedIn URL</label>
                    <input
                      type="url"
                      value={formData.linkedInUrl}
                      onChange={(e) => setFormData({ ...formData, linkedInUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Portfolio URL</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-tertiary)]" />
                      <input
                        type="url"
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                        className="w-full pl-10 px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Resume/CV URL</label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-tertiary)]" />
                      <input
                        type="url"
                        value={formData.resumeUrl}
                        onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                        className="w-full pl-10 px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                        placeholder="https://drive.google.com/..."
                      />
                    </div>
                    <p className="text-xs text-[var(--color-text-tertiary)] mt-1">Upload to Google Drive and paste the link here</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Cover Letter</label>
                    <textarea
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us why you're the right fit for this role..."
                    />
                  </div>

                  {/* Dynamic Custom Fields */}
                  {customFields.length > 0 && (
                    <div className="pt-4 border-t border-[var(--color-border-card)]/50">
                      <p className="text-sm font-medium text-[var(--color-text-primary)] mb-4">Role-Specific Questions</p>
                      <div className="space-y-4">
                        {customFields.map((field) => (
                          <div key={field.id}>
                            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                              {field.label}{field.required && ' *'}
                            </label>
                            {field.type === 'textarea' ? (
                              <textarea
                                required={field.required}
                                value={formData.customResponses[field.id] || ''}
                                onChange={(e) => setFormData({
                                  ...formData,
                                  customResponses: { ...formData.customResponses, [field.id]: e.target.value }
                                })}
                                rows={3}
                                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                                placeholder={field.placeholder}
                              />
                            ) : field.type === 'select' && field.options ? (
                              <select
                                required={field.required}
                                value={formData.customResponses[field.id] || ''}
                                onChange={(e) => setFormData({
                                  ...formData,
                                  customResponses: { ...formData.customResponses, [field.id]: e.target.value }
                                })}
                                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                              >
                                <option value="">Select an option</option>
                                {field.options.map((opt) => (
                                  <option key={opt} value={opt}>{opt}</option>
                                ))}
                              </select>
                            ) : (
                              <input
                                type={field.type === 'number' ? 'number' : field.type === 'url' ? 'url' : 'text'}
                                required={field.required}
                                value={formData.customResponses[field.id] || ''}
                                onChange={(e) => setFormData({
                                  ...formData,
                                  customResponses: { ...formData.customResponses, [field.id]: e.target.value }
                                })}
                                className="w-full px-4 py-3 rounded-lg border border-[var(--color-border-card)] bg-[var(--color-surface-raised)]/30 text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                                placeholder={field.placeholder}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {submitStatus === 'success' && (
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500 text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{submitMessage}</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{submitMessage || 'An error occurred. Please try again.'}</span>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowApplicationForm(false)}
                      className="flex-1 px-6 py-3 border border-[var(--color-border-card)] rounded-lg font-semibold hover:bg-[var(--color-surface-raised)]/30 transition-all text-[var(--color-text-primary)]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] rounded-lg font-semibold hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </div>
                </form>

                {/* WhatsApp Contact */}
                <div className="mt-6 pt-6 border-t border-[var(--color-border-card)]">
                  <p className="text-xs text-[var(--color-text-tertiary)] mb-3 text-center">
                    Need help? Contact our HR team via WhatsApp:
                  </p>
                  <div className="flex flex-col gap-2">
                    {whatsappNumbers.map((contact) => (
                      <a
                        key={contact.number}
                        href={`https://wa.me/${contact.number.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-all text-xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{contact.name}: {contact.number}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <NewsletterSection
          title="Join Our Talent Network"
          subtitle="Be the first to know about new opportunities, career updates, and insider insights from Annita's growing team."
        />
      </section>
    </div>
  )
}
