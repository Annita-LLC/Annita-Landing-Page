'use client'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://annita-landing-page-production.up.railway.app'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Check, ChevronRight, X, User, Store, Truck, Loader2 } from 'lucide-react'
import { HoneypotField } from '@/components/HoneypotField'

type Role = 'buyer' | 'seller' | 'logistics'

interface SignupStatus {
  buyer: { count: number; remaining: number; isOpen: boolean }
  seller: { count: number; remaining: number; isOpen: boolean }
  logistics: { count: number; remaining: number; isOpen: boolean }
}

interface BetaSignupProps {
  className?: string
}

export default function BetaSignup({ className = '' }: BetaSignupProps) {
  const [currentRole, setCurrentRole] = useState<Role>('buyer')
  const [signupStatus, setSignupStatus] = useState<SignupStatus | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [queuePosition, setQueuePosition] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    device: '',
    website_url: '',
    // Buyer fields
    shopsFor: [] as string[],
    payMethod: '',
    age: '',
    // Seller fields
    businessName: '',
    businessCategory: '',
    needs: [] as string[],
    yearsInBusiness: '',
    justStarting: '',
    // Logistics fields
    companyName: '',
    serviceTypes: [] as string[],
    areasCovered: '',
    fleetSize: '',
    yearsLogistics: '',
    logisticsType: '',
    vehicleTypes: [] as string[],
  })

  const buyerOptions = ['Groceries & household', 'Electronics', 'Fashion', 'Food & dining', 'Services', 'Other']
  const sellerNeeds = ['Order & inventory management', 'Getting paid faster', 'Customer chat & support', 'Marketing & reach', 'All of the above', 'Other']
  const logisticsTypes = ['Last-mile delivery', 'Warehousing', 'Freight / long-haul', 'Courier / dispatch']
  const vehicleTypes = ['Bike', 'Car', 'Van', 'Truck', 'Motorcycle', 'Other']

  useEffect(() => {
    fetchSignupStatus()
  }, [])

  const fetchSignupStatus = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/beta-signup/status`)
      const data = await response.json()
      if (data.success) {
        setSignupStatus(data.data)
      }
    } catch (err) {
      console.error('Failed to fetch signup status:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const toggleChip = (value: string, field: 'shopsFor' | 'needs' | 'serviceTypes' | 'vehicleTypes') => {
    setFormData(prev => {
      const currentArray = (prev as any)[field] as string[]
      return {
        ...prev,
        [field]: currentArray.includes(value)
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value]
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.country.trim()) {
      setError('Please fill in all required fields')
      setIsSubmitting(false)
      return
    }



    if (currentRole === 'seller') {
      if (!formData.businessName.trim()) {
        setError('Please enter your business name')
        setIsSubmitting(false)
        return
      }
      if (formData.needs.length === 0) {
        setError('Please select at least one need')
        setIsSubmitting(false)
        return
      }
    }

    if (currentRole === 'logistics') {
      if (!formData.companyName.trim()) {
        setError('Please enter your company/fleet name')
        setIsSubmitting(false)
        return
      }
      if (formData.serviceTypes.length === 0) {
        setError('Please select at least one service type')
        setIsSubmitting(false)
        return
      }
    }

    try {
      const payload = {
        role: currentRole,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        device: formData.device,
        website_url: formData.website_url,
        ...(currentRole === 'buyer' && {
          payMethod: formData.payMethod,
          age: formData.age,
        }),
        ...(currentRole === 'seller' && {
          businessName: formData.businessName,
          businessCategory: formData.businessCategory,
          needs: formData.needs,
          yearsInBusiness: formData.yearsInBusiness,
          justStarting: formData.justStarting,
        }),
        ...(currentRole === 'logistics' && {
          companyName: formData.companyName,
          serviceTypes: formData.serviceTypes,
          areasCovered: formData.areasCovered,
          fleetSize: formData.fleetSize,
          yearsLogistics: formData.yearsLogistics,
          logisticsType: formData.logisticsType,
          vehicleTypes: formData.vehicleTypes,
        }),
      }

      const response = await fetch(`${API_BASE_URL}/api/beta-signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitSuccess(true)
        setQueuePosition(data.data.queuePosition)
        await fetchSignupStatus() // Refresh status
      } else {
        setError(data.message || 'Failed to submit signup')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isRoleClosed = signupStatus ? !signupStatus[currentRole].isOpen : false

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center p-12 ${className}`}>
        <Loader2 className="w-8 h-8 animate-spin" style={{ color: 'var(--color-accent)' }} />
      </div>
    )
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="w-full bg-[var(--color-surface-base)]/95 border border-[var(--color-border-card)]/80 rounded-xl overflow-hidden shadow-2xl relative flex flex-col text-left tech-glow-card transition-all duration-300">
        {/* OS Bar */}
        <div className="bg-[var(--color-surface-card)] border-b border-[var(--color-border-card)] flex items-center justify-between px-4 py-3 select-none">
          {/* Left: Window Circles */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="ml-2 text-xs font-mono text-[var(--color-text-muted)]">beta_signup_portal.sh</span>
          </div>
          {/* Right Status */}
          <div className="text-[10px] font-mono text-[var(--color-accent)] font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            SECURE_CONNECTION
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 relative">
          {/* Corner accents */}
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l" style={{ borderColor: 'var(--color-accent)' }} />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r" style={{ borderColor: 'var(--color-accent)' }} />

          {!submitSuccess ? (
            <>
              {/* Header */}
              <div className="mb-6">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--color-accent-soft)', border: '1px solid var(--color-border-accent)' }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }} />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-mono" style={{ color: 'var(--color-accent)' }}>Beta Access</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 font-syne" style={{ color: 'var(--color-text-primary)' }}>
                  Join AnnitaPlug Beta
                </h2>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Limited spots: 100 per role. First come, first served.
                </p>
              </div>

              {/* Role Selector */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { role: 'buyer' as Role, icon: User, label: 'Buyer' },
                  { role: 'seller' as Role, icon: Store, label: 'MSMEs' },
                  { role: 'logistics' as Role, icon: Truck, label: 'Logistics' },
                ].map(({ role, icon: Icon, label }) => {
                  const status = signupStatus?.[role]
                  const isClosed = signupStatus ? !status?.isOpen : false
                  const isSelected = currentRole === role

                  return (
                    <motion.button
                      key={role}
                      type="button"
                      onClick={() => !isClosed && setCurrentRole(role)}
                      disabled={isClosed}
                      whileHover={!isClosed ? { scale: 1.02 } : {}}
                      whileTap={!isClosed ? { scale: 0.98 } : {}}
                      className="relative p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2"
                      style={{
                        borderColor: isSelected
                          ? 'var(--color-accent)'
                          : isClosed
                          ? 'var(--color-border-default)'
                          : 'var(--color-border-card)',
                        backgroundColor: isSelected
                          ? 'var(--color-accent-soft)'
                          : isClosed
                          ? 'var(--color-surface-card)'
                          : 'var(--color-surface-card)',
                        opacity: isClosed ? 0.5 : 1,
                        cursor: isClosed ? 'not-allowed' : 'pointer',
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{
                          color: isSelected
                            ? 'var(--color-accent)'
                            : isClosed
                            ? 'var(--color-text-muted)'
                            : 'var(--color-text-secondary)',
                        }}
                      />
                      <span
                        className="text-xs font-semibold font-mono"
                        style={{
                          color: isSelected
                            ? 'var(--color-accent)'
                            : isClosed
                            ? 'var(--color-text-muted)'
                            : 'var(--color-text-secondary)',
                        }}
                      >
                        {label}
                      </span>
                      {isClosed && (
                        <span className="absolute top-1 right-1 text-[8px] font-mono" style={{ color: 'var(--color-brand-error, #DC2626)' }}>FULL</span>
                      )}
                      {!isClosed && (
                        <span className="text-[9px] font-mono" style={{ color: 'var(--color-text-muted)' }}>
                          {status ? `${status.remaining} left` : '100 left'}
                        </span>
                      )}
                    </motion.button>
                  )
                })}
              </div>

            {/* Form */}
            {isRoleClosed ? (
              <div
                className="text-center py-8 px-4 rounded-xl"
                style={{ backgroundColor: 'rgba(220, 38, 38, 0.08)', border: '1px solid rgba(220, 38, 38, 0.2)' }}
              >
                <X className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--color-brand-error, #DC2626)' }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Beta Full for {currentRole}s</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>All 100 spots have been filled. Check back later for updates.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <HoneypotField onChange={(value) => setFormData(prev => ({ ...prev, website_url: value }))} />
                {/* Shared fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Full Name <span style={{ color: 'var(--color-accent)' }}>*</span>
                    </label>
                    <div className="relative group">
                      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        placeholder="Dwedor Freeman"
                        className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Email <span style={{ color: 'var(--color-accent)' }}>*</span>
                    </label>
                    <div className="relative group">
                      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="you@business.com"
                        className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      WhatsApp Number
                    </label>
                    <div className="relative group">
                      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+231 ..."
                        className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                      Country <span style={{ color: 'var(--color-accent)' }}>*</span>
                    </label>
                    <div className="relative group">
                      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                        className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                        required
                      >
                        <option value="">Select country</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Ivory Coast">Ivory Coast</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Role-specific fields */}
                {currentRole === 'buyer' && (
                  <>
                    <div>
                      <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        How do you usually pay?
                      </label>
                      <div className="relative group">
                        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <select
                          value={formData.payMethod}
                          onChange={(e) => setFormData(prev => ({ ...prev, payMethod: e.target.value }))}
                          className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                        >
                          <option value="">Select one</option>
                          <option value="Cash">Cash</option>
                          <option value="Mobile money">Mobile money</option>
                          <option value="Bank transfer">Bank transfer</option>
                          <option value="Card">Card</option>
                          <option value="Mix of methods">Mix of methods</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        Age
                      </label>
                      <div className="relative group">
                        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <input
                          type="number"
                          value={formData.age}
                          onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                          placeholder="25"
                          className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                          min="18"
                          max="100"
                        />
                      </div>
                    </div>
                  </>
                )}

                {currentRole === 'seller' && (
                  <>
                    <div>
                      <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        Business Name <span style={{ color: 'var(--color-accent)' }}>*</span>
                      </label>
                      <div className="relative group">
                        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                          placeholder="Nimba Pastry"
                          className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        Business Category
                      </label>
                      <div className="relative group">
                        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <select
                          value={formData.businessCategory}
                          onChange={(e) => setFormData(prev => ({ ...prev, businessCategory: e.target.value }))}
                          className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                        >
                          <option value="">Select one</option>
                          <option value="Retail / shop">Retail / shop</option>
                          <option value="Food & agro-processing">Food & agro-processing</option>
                          <option value="Fashion & beauty">Fashion & beauty</option>
                          <option value="Services">Services</option>
                          <option value="Electronics / tech">Electronics / tech</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        Years in Business
                      </label>
                      <div className="relative group">
                        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <select
                          value={formData.yearsInBusiness}
                          onChange={(e) => setFormData(prev => ({ ...prev, yearsInBusiness: e.target.value, justStarting: '' }))}
                          className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                        >
                          <option value="">Select one</option>
                          <option value="Less than 1 year">Less than 1 year</option>
                          <option value="1-2 years">1-2 years</option>
                          <option value="3-5 years">3-5 years</option>
                          <option value="6-10 years">6-10 years</option>
                          <option value="10+ years">10+ years</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        Just Starting?
                      </label>
                      <div className="relative group">
                        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <select
                          value={formData.justStarting}
                          onChange={(e) => setFormData(prev => ({ ...prev, justStarting: e.target.value, yearsInBusiness: '' }))}
                          className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                        >
                          <option value="">Select one</option>
                          <option value="Yes, planning to start">Yes, planning to start</option>
                          <option value="Yes, just launched">Yes, just launched</option>
                          <option value="No">No, already established</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        What do you need most? <span style={{ color: 'var(--color-accent)' }}>*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {sellerNeeds.map(need => (
                          <button
                            key={need}
                            type="button"
                            onClick={() => toggleChip(need, 'needs')}
                            className="px-3 py-2 rounded-full text-xs font-mono border transition-all"
                            style={{
                              borderColor: formData.needs.includes(need) ? 'var(--color-accent)' : 'var(--color-border-card)',
                              backgroundColor: formData.needs.includes(need) ? 'var(--color-accent-soft)' : 'var(--color-surface-raised)',
                              color: formData.needs.includes(need) ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                            }}
                          >
                            {formData.needs.includes(need) && <Check className="w-3 h-3 inline mr-1" />}
                            {need}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {currentRole === 'logistics' && (
                  <>
                    <div>
                      <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        Company / Fleet Name <span style={{ color: 'var(--color-accent)' }}>*</span>
                      </label>
                      <div className="relative group">
                        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                          placeholder="Swift Riders Logistics"
                          className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        Service Type <span style={{ color: 'var(--color-accent)' }}>*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {logisticsTypes.map(type => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => toggleChip(type, 'serviceTypes')}
                            className="px-3 py-2 rounded-full text-xs font-mono border transition-all"
                            style={{
                              borderColor: formData.serviceTypes.includes(type) ? 'var(--color-accent)' : 'var(--color-border-card)',
                              backgroundColor: formData.serviceTypes.includes(type) ? 'var(--color-accent-soft)' : 'var(--color-surface-raised)',
                              color: formData.serviceTypes.includes(type) ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                            }}
                          >
                            {formData.serviceTypes.includes(type) && <Check className="w-3 h-3 inline mr-1" />}
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                          Cities / Areas Covered
                        </label>
                        <div className="relative group">
                          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                          <input
                            type="text"
                            value={formData.areasCovered}
                            onChange={(e) => setFormData(prev => ({ ...prev, areasCovered: e.target.value }))}
                            placeholder="Monrovia, Paynesville"
                            className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                          Years in Logistics
                        </label>
                        <div className="relative group">
                          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                          <select
                            value={formData.yearsLogistics}
                            onChange={(e) => setFormData(prev => ({ ...prev, yearsLogistics: e.target.value }))}
                            className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                          >
                            <option value="">Select one</option>
                            <option value="Less than 1 year">Less than 1 year</option>
                            <option value="1-2 years">1-2 years</option>
                            <option value="3-5 years">3-5 years</option>
                            <option value="6-10 years">6-10 years</option>
                            <option value="10+ years">10+ years</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                          Individual or Company? <span style={{ color: 'var(--color-accent)' }}>*</span>
                        </label>
                        <div className="relative group">
                          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                          <select
                            value={formData.logisticsType}
                            onChange={(e) => setFormData(prev => ({ ...prev, logisticsType: e.target.value }))}
                            className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                            required
                          >
                            <option value="">Select one</option>
                            <option value="Individual">Individual</option>
                            <option value="Company">Company</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                          Fleet Size
                        </label>
                        <div className="relative group">
                          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                          <select
                            value={formData.fleetSize}
                            onChange={(e) => setFormData(prev => ({ ...prev, fleetSize: e.target.value }))}
                            className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                          >
                            <option value="">Select one</option>
                            <option value="1-5">1–5 vehicles</option>
                            <option value="6-20">6–20 vehicles</option>
                            <option value="21-50">21–50 vehicles</option>
                            <option value="50+">50+ vehicles</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                        Vehicle Types <span style={{ color: 'var(--color-accent)' }}>*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {vehicleTypes.map(type => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => toggleChip(type, 'vehicleTypes')}
                            className="px-3 py-2 rounded-full text-xs font-mono border transition-all"
                            style={{
                              borderColor: formData.vehicleTypes.includes(type) ? 'var(--color-accent)' : 'var(--color-border-card)',
                              backgroundColor: formData.vehicleTypes.includes(type) ? 'var(--color-accent-soft)' : 'var(--color-surface-raised)',
                              color: formData.vehicleTypes.includes(type) ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                            }}
                          >
                            {formData.vehicleTypes.includes(type) && <Check className="w-3 h-3 inline mr-1" />}
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-xs font-mono mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                    Primary Device
                  </label>
                  <div className="relative group">
                    <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-border-card)] group-focus-within:border-[var(--color-accent)] transition-colors pointer-events-none z-10" />
                    <select
                      value={formData.device}
                      onChange={(e) => setFormData(prev => ({ ...prev, device: e.target.value }))}
                      className="theme-input w-full px-4 py-3 rounded-lg text-sm"
                    >
                      <option value="">Select one</option>
                      <option value="Android">Android</option>
                      <option value="iOS">iPhone (iOS)</option>
                      <option value="Both">Both / not sure</option>
                    </select>
                  </div>
                </div>

                {error && (
                  <div
                    className="p-3 rounded-lg text-xs font-mono"
                    style={{ backgroundColor: 'rgba(220, 38, 38, 0.08)', border: '1px solid rgba(220, 38, 38, 0.2)', color: 'var(--color-brand-error, #DC2626)' }}
                  >
                    {error}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-accent-foreground)' }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Beta Access
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-[10px] font-mono" style={{ color: 'var(--color-text-muted)' }}>
                  NO SPAM · EARLY ACCESS ONLY · ANNITA LLC
                </p>
              </form>
            )}
          </>
        ) : (
          /* Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div
              className="w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-4"
              style={{ borderColor: 'var(--color-accent)', backgroundColor: 'var(--color-accent-soft)' }}
            >
              <Check className="w-8 h-8" style={{ color: 'var(--color-accent)' }} />
            </div>
            <h3 className="text-xl font-bold mb-2 font-syne" style={{ color: 'var(--color-text-primary)' }}>You're on the list!</h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              We've queued your {currentRole} beta request for AnnitaPlug.
            </p>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Watch your email/WhatsApp for your access invite.
            </p>
            {queuePosition && (
              <div
                className="inline-block px-4 py-2 rounded-lg"
                style={{ backgroundColor: 'var(--color-accent-soft)', border: '1px solid var(--color-border-accent)' }}
              >
                <span className="text-xs font-mono" style={{ color: 'var(--color-accent)' }}>
                  QUEUE_POSITION: #{String(queuePosition).padStart(3, '0')}
                </span>
              </div>
            )}
          </motion.div>
        )}
        </div>
      </div>
    </div>
  )
}
