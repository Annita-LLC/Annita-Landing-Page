'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, Upload, X, Loader2 } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import { submitSolutionsRequestForm } from '@/lib/api'

const solutionTypes = [
  { id: 'mobile', name: 'Mobile Application', icon: '📱' },
  { id: 'web', name: 'Web Application', icon: '💻' },
  { id: 'portal', name: 'Business or Government Portal', icon: '🏢' },
  { id: 'website', name: 'Website / Landing Page', icon: '🌐' },
  { id: 'saas', name: 'SaaS Platform', icon: '☁️' },
  { id: 'marketplace', name: 'Marketplace or E-commerce System', icon: '🛒' },
  { id: 'erp', name: 'ERP / Business Management System', icon: '📊' },
  { id: 'fintech', name: 'Fintech or Payment Infrastructure', icon: '💳' },
  { id: 'ai', name: 'AI-Powered Tool or Automation', icon: '🤖' },
  { id: 'dashboard', name: 'Data Dashboard or Analytics System', icon: '📈' },
  { id: 'health', name: 'Digital Health Platform', icon: '❤️' },
  { id: 'api', name: 'API Development or Third-Party Integration', icon: '🔗' },
  { id: 'cms', name: 'CMS / Content Management System', icon: '📝' },
  { id: 'iot', name: 'IoT / Hardware-Connected System', icon: '🔌' },
  { id: 'devops', name: 'DevOps / Infrastructure Setup', icon: '⚙️' },
  { id: 'unsure', name: "I'm not sure — I will describe it below", icon: '❓' },
]

const importantFeatures = [
  'User Authentication (Login / Signup)',
  'Role-Based Access Control',
  'Dashboard & Analytics',
  'Push Notifications (Mobile)',
  'Email & SMS Notifications',
  'Payment Processing or Wallet',
  'Offline Mode / Low-Bandwidth Support',
  'Multi-language Support',
  'Document Upload / File Management',
  'Real-Time Chat or Messaging',
  'Maps & Geolocation',
  'Third-Party API Integrations',
  'Reporting & Export (PDF / Excel)',
  'Search & Advanced Filtering',
  'Inventory or Product Management',
  'Booking or Scheduling System',
  'Form Builder or Survey Tool',
  'Multi-Tenant / Multi-Organization Support',
  'AI Features (recommendations, automation, chatbot)',
  'Audit Logs & Compliance Tracking',
  'E-signature or Contract Management',
  'Barcode / QR Code Scanning',
  'Biometric Authentication',
  'Hardware or Device Integration',
]

const techStackOptions = [
  'React / Next.js',
  'React Native',
  'Flutter',
  'Node.js',
  'Python',
  'Django',
  'Laravel',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'DigitalOcean',
  'Firebase',
  'Other',
]

const securityRequirements = [
  'GDPR Compliance',
  'HIPAA / Health Data Standards',
  'Government / Public Sector Security Standards',
  'End-to-End Encryption Required',
  'Two-Factor Authentication Required',
  'Data Residency Requirements',
  'None / Standard Security is fine',
  'Not sure',
]

export default function RequestPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState({
    // Step 1: About You
    fullName: '',
    organization: '',
    jobTitle: '',
    organizationType: '',
    country: '',
    city: '',
    email: '',
    phone: '',
    contactMethod: '',
    howDidYouHear: '',
    referrerName: '',
    // Step 2: Your Project
    projectName: '',
    projectSummary: '',
    solutionType: [] as string[],
    solutionTypeOther: '',
    targetUsers: '',
    userCount: '',
    geographicDeployment: [] as string[],
    geographicCountry: '',
    languages: [] as string[],
    offlineRequired: '',
    existingSystem: '',
    existingSystemDescription: '',
    // Step 3: Requirements
    coreFeatures: '',
    importantFeatures: [] as string[],
    thirdPartyIntegrations: '',
    techStack: [] as string[],
    techStackOther: '',
    brandIdentity: '',
    brandAssets: [] as File[],
    wireframes: '',
    wireframesFiles: [] as File[],
    wireframesUrl: '',
    designStyle: '',
    securityRequirements: [] as string[],
    additionalNotes: '',
    // Step 4: Budget & Timeline
    budget: '',
    fundingContext: '',
    budgetFlexibility: '',
    timeline: '',
    specificDeadline: '',
    projectStartDate: '',
    engagementStyle: '',
    maintenanceNeeded: '',
    finalThoughts: '',
    agreement: false,
  })

  const [uploadedFiles, setUploadedFiles] = useState<{ brand: File[], wireframes: File[] }>({ brand: [], wireframes: [] })

  // Save form data to localStorage
  useEffect(() => {
    localStorage.setItem('solutionsFormDraft', JSON.stringify(formData))
  }, [formData])

  // Load form data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('solutionsFormDraft')
    if (saved) {
      try {
        setFormData(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading saved form:', e)
      }
    }
  }, [])

  const steps = [
    { number: 1, title: 'About You' },
    { number: 2, title: 'Your Project' },
    { number: 3, title: 'Requirements' },
    { number: 4, title: 'Budget & Timeline' },
  ]

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleArrayItem = (field: string, value: string) => {
    const currentArray = formData[field as keyof typeof formData] as string[]
    if (currentArray.includes(value)) {
      setFormData({
        ...formData,
        [field]: currentArray.filter((item) => item !== value),
      })
    } else {
      setFormData({
        ...formData,
        [field]: [...currentArray, value],
      })
    }
  }

  const handleFileUpload = (field: 'brandAssets' | 'wireframesFiles', files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files).slice(0, 3)
      setFormData({
        ...formData,
        [field]: [...(formData[field] as File[]), ...fileArray],
      })
    }
  }

  const removeFile = (field: 'brandAssets' | 'wireframesFiles', index: number) => {
    const currentFiles = formData[field] as File[]
    setFormData({
      ...formData,
      [field]: currentFiles.filter((_, i) => i !== index),
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // Map file arrays to file metadata objects for JSON serialization
      // Cast is required: TypeScript cannot structurally verify solutionTypes via spread + index signature
      const submissionData = {
        ...formData,
        solutionTypes: formData.solutionType,
        brandAssets: formData.brandAssets.map((file: File) => ({
          name: file.name,
          size: file.size,
          type: file.type,
        })),
        wireframesFiles: formData.wireframesFiles.map((file: File) => ({
          name: file.name,
          size: file.size,
          type: file.type,
        })),
      } as import('@/lib/api').SolutionsRequestFormData

      const result = await submitSolutionsRequestForm(submissionData)
      if (result.success) {
        // Save form data to localStorage for confirmation page rendering
        localStorage.setItem('solutionsFormSubmitted', JSON.stringify(formData))
        // Clear drafts
        localStorage.removeItem('solutionsFormDraft')
        // Redirect to confirmation page
        window.location.href = '/solutions/request/submitted'
      } else {
        setSubmitError(result.message)
      }
    } catch (err) {
      console.error('Error submitting form:', err)
      setSubmitError('An unexpected error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen tech-grid" style={{ backgroundColor: '#080D1A', color: '#F0F4FF' }}>
      <Navigation />

      {/* Progress Bar */}
      <div className="sticky top-[56px] md:top-16 z-40 px-4 md:px-8 py-4" style={{ backgroundColor: '#080D1A', borderBottom: '1px solid #1A2640' }}>
        <div className="max-w-[720px] mx-auto">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    currentStep >= step.number 
                      ? 'bg-[#00C28A] text-[#080D1A]' 
                      : 'bg-[#1A2640] text-[#8A9BBB]'
                  }`}>
                    {currentStep > step.number ? <CheckCircle2 className="w-4 h-4" /> : step.number}
                  </div>
                  <span className={`text-xs mt-2 hidden md:block transition-all ${
                    currentStep >= step.number ? 'text-[#00C28A]' : 'text-[#8A9BBB]'
                  }`}>{step.title}</span>
                </div>
                {step.number < 4 && (
                  <div className={`flex-1 h-0.5 mx-2 transition-all ${
                    currentStep > step.number ? 'bg-[#00C28A]' : 'bg-[#1A2640]'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-[720px] mx-auto">
          <Link href="/solutions" className="inline-flex items-center gap-2 mb-8 transition-colors" style={{ color: '#8A9BBB' }}>
            <ArrowLeft className="w-4 h-4" />
            Back to Solutions
          </Link>

          <form onSubmit={handleSubmit} className="space-y-8">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#00C28A', fontFamily: 'var(--font-syne)' }}>WHO ARE YOU?</p>
                    <h2 className="text-2xl font-bold mb-6" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>Tell us about yourself</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Full Name *</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Organization / Company Name *</label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        placeholder="Your business or institution name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Job Title / Role *</label>
                      <input
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        placeholder="e.g. CEO, CTO, Director of Digital Services"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Organization Type *</label>
                    <select
                      value={formData.organizationType}
                      onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                      required
                    >
                      <option value="">Select organization type</option>
                      <option value="msme">MSME / Small Business</option>
                      <option value="startup">Startup</option>
                      <option value="government">Government Ministry or Agency</option>
                      <option value="ngo">NGO / Non-Profit</option>
                      <option value="international">International Organization</option>
                      <option value="education">Educational Institution</option>
                      <option value="corporation">Corporation / Enterprise</option>
                      <option value="individual">Individual / Freelancer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Country *</label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        placeholder="Your country"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>City / Region</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        placeholder="Your city or region"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        placeholder="+231 XXX XXX XXXX"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Preferred Contact Method *</label>
                      <select
                        value={formData.contactMethod}
                        onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        required
                      >
                        <option value="">Select contact method</option>
                        <option value="email">Email</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="phone">Phone Call</option>
                        <option value="video">Video Call</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>How did you hear about Annita Custom Solutions?</label>
                    <select
                      value={formData.howDidYouHear}
                      onChange={(e) => setFormData({ ...formData, howDidYouHear: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                    >
                      <option value="">Select an option</option>
                      <option value="ecosystem">Annita Ecosystem (an-nita.com)</option>
                      <option value="aiim">AIIM Hub (aiim.com)</option>
                      <option value="social">Social Media (Instagram, LinkedIn, X/Twitter)</option>
                      <option value="referral">Referred by someone</option>
                      <option value="conference">Conference or Event</option>
                      <option value="news">News or Media</option>
                      <option value="google">Google Search</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {formData.howDidYouHear === 'referral' && (
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Referrer's name</label>
                      <input
                        type="text"
                        value={formData.referrerName}
                        onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        placeholder="Who referred you?"
                      />
                    </div>
                  )}
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#00C28A', fontFamily: 'var(--font-syne)' }}>TELL US ABOUT YOUR PROJECT</p>
                    <h2 className="text-2xl font-bold mb-6" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>Describe your project</h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Project Name / Working Title *</label>
                    <input
                      type="text"
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                      placeholder="Give your project a name, even a working one"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Project Summary *</label>
                    <textarea
                      value={formData.projectSummary}
                      onChange={(e) => setFormData({ ...formData, projectSummary: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all min-h-[120px]"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                      placeholder="Describe your project in plain language. What does it do? Who is it for? What problem does it solve? Write freely — we will ask follow-up questions in our discovery call."
                      required
                      minLength={80}
                    />
                    <p className="text-xs mt-1" style={{ color: formData.projectSummary.length >= 80 ? '#00C28A' : '#8A9BBB' }}>
                      {formData.projectSummary.length}/80 characters minimum
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>What type of solution do you need? *</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {solutionTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => toggleArrayItem('solutionType', type.id)}
                          className={`p-4 rounded-lg border-2 text-left transition-all ${
                            formData.solutionType.includes(type.id)
                              ? 'border-[#00C28A] bg-[#00C28A]/10'
                              : 'border-[#1A2640] hover:border-[#00C28A]/50'
                          }`}
                        >
                          <span className="text-2xl mb-2 block">{type.icon}</span>
                          <span className="text-sm font-medium" style={{ color: '#F0F4FF' }}>{type.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {(formData.solutionType.includes('unsure') || formData.solutionType.length > 0) && (
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>
                        {formData.solutionType.includes('unsure') ? 'Tell us more about the kind of system you have in mind' : 'Tell us more about the kind of system you have in mind'}
                      </label>
                      <textarea
                        value={formData.solutionTypeOther}
                        onChange={(e) => setFormData({ ...formData, solutionTypeOther: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all min-h-[80px]"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        placeholder="Describe even loosely what you are imagining. You do not need a technical name for it."
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Who will use this solution? (Target Users) *</label>
                    <textarea
                      value={formData.targetUsers}
                      onChange={(e) => setFormData({ ...formData, targetUsers: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all min-h-[80px]"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                      placeholder="Who are the end users? e.g. small business owners in rural Liberia, hospital staff, government procurement officers"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Expected Number of Users at Launch *</label>
                    <div className="flex flex-wrap gap-3">
                      {['Under 100', '100 – 1,000', '1,000 – 10,000', '10,000 – 100,000', '100,000+', 'Not sure yet'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData({ ...formData, userCount: option })}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            formData.userCount === option
                              ? 'bg-[#00C28A] text-[#080D1A]'
                              : 'bg-[#0F1729] text-[#8A9BBB] border border-[#1A2640] hover:border-[#00C28A]'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Geographic Deployment</label>
                    <div className="space-y-2">
                      {['Single city or region', 'One country', 'Multiple African countries', 'Pan-African', 'Global', 'Not yet decided'].map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.geographicDeployment.includes(option)}
                            onChange={(e) => toggleArrayItem('geographicDeployment', option)}
                            className="w-4 h-4 rounded"
                            style={{ accentColor: '#00C28A' }}
                          />
                          <span className="text-sm" style={{ color: '#8A9BBB' }}>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {formData.geographicDeployment.includes('One country') && (
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Which country?</label>
                      <input
                        type="text"
                        value={formData.geographicCountry}
                        onChange={(e) => setFormData({ ...formData, geographicCountry: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        placeholder="Country name"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Languages the solution must support</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {['English', 'French', 'Arabic', 'Swahili', 'Portuguese', 'Hausa', 'Amharic'].map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => toggleArrayItem('languages', lang)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                            formData.languages.includes(lang)
                              ? 'bg-[#00C28A] text-[#080D1A]'
                              : 'bg-[#0F1729] text-[#8A9BBB] border border-[#1A2640]'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                    <input
                      type="text"
                      value={formData.languages.filter(l => !['English', 'French', 'Arabic', 'Swahili', 'Portuguese', 'Hausa', 'Amharic'].includes(l)).join(', ')}
                      onChange={(e) => {
                        const otherLangs = e.target.value.split(',').map(l => l.trim()).filter(l => l)
                        setFormData({
                          ...formData,
                          languages: [...formData.languages.filter(l => ['English', 'French', 'Arabic', 'Swahili', 'Portuguese', 'Hausa', 'Amharic'].includes(l)), ...otherLangs]
                        })
                      }}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                      placeholder="Type additional languages separated by commas"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Must work offline or in low-connectivity environments? *</label>
                    <div className="flex flex-wrap gap-3">
                      {['Yes, critical', 'Partially', 'No', 'Not sure'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData({ ...formData, offlineRequired: option })}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            formData.offlineRequired === option
                              ? 'bg-[#00C28A] text-[#080D1A]'
                              : 'bg-[#0F1729] text-[#8A9BBB] border border-[#1A2640] hover:border-[#00C28A]'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Does a version of this solution already exist?</label>
                    <select
                      value={formData.existingSystem}
                      onChange={(e) => setFormData({ ...formData, existingSystem: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                    >
                      <option value="">Select an option</option>
                      <option value="no">No, this is brand new</option>
                      <option value="replace">Yes, we have an existing system to replace</option>
                      <option value="extend">Yes, we want to extend or upgrade an existing system</option>
                    </select>
                  </div>

                  {(formData.existingSystem === 'replace' || formData.existingSystem === 'extend') && (
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Describe the existing system briefly</label>
                      <textarea
                        value={formData.existingSystemDescription}
                        onChange={(e) => setFormData({ ...formData, existingSystemDescription: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all min-h-[80px]"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        placeholder="Briefly describe the existing system"
                      />
                    </div>
                  )}
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#00C28A', fontFamily: 'var(--font-syne)' }}>WHAT DO YOU NEED IT TO DO?</p>
                    <h2 className="text-2xl font-bold mb-6" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>Core requirements</h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Core Features Required *</label>
                    <textarea
                      value={formData.coreFeatures}
                      onChange={(e) => setFormData({ ...formData, coreFeatures: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all min-h-[150px]"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                      placeholder="List the features your solution must have. Be specific. You can use bullet points. Examples: 'User login with phone OTP', 'Product catalog with search and filter', 'Admin dashboard with analytics', 'Offline data sync when reconnected'."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Are any of these features important to you?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {importantFeatures.map((feature) => (
                        <button
                          key={feature}
                          type="button"
                          onClick={() => toggleArrayItem('importantFeatures', feature)}
                          className={`p-3 rounded-lg border-2 text-left text-sm transition-all ${
                            formData.importantFeatures.includes(feature)
                              ? 'border-[#00C28A] bg-[#00C28A]/10'
                              : 'border-[#1A2640] hover:border-[#00C28A]/50'
                          }`}
                        >
                          {feature}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Specific third-party systems this must integrate with</label>
                    <input
                      type="text"
                      value={formData.thirdPartyIntegrations}
                      onChange={(e) => setFormData({ ...formData, thirdPartyIntegrations: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                      placeholder="e.g. QuickBooks, Flutterwave, Salesforce, an existing government database, WhatsApp Business API"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Technology stack preference (optional)</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {techStackOptions.map((stack) => (
                        <button
                          key={stack}
                          type="button"
                          onClick={() => toggleArrayItem('techStack', stack)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                            formData.techStack.includes(stack)
                              ? 'bg-[#00C28A] text-[#080D1A]'
                              : 'bg-[#0F1729] text-[#8A9BBB] border border-[#1A2640]'
                          }`}
                        >
                          {stack}
                        </button>
                      ))}
                    </div>
                    {formData.techStack.includes('Other') && (
                      <input
                        type="text"
                        value={formData.techStackOther}
                        onChange={(e) => setFormData({ ...formData, techStackOther: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        placeholder="Specify other technology"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Do you have an existing brand identity?</label>
                    <div className="flex flex-wrap gap-3">
                      {['Yes, full brand guidelines available', 'Yes, partial (logo only or basic colors)', 'No, Annita should design from scratch', 'No preference'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData({ ...formData, brandIdentity: option })}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            formData.brandIdentity === option
                              ? 'bg-[#00C28A] text-[#080D1A]'
                              : 'bg-[#0F1729] text-[#8A9BBB] border border-[#1A2640] hover:border-[#00C28A]'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {(formData.brandIdentity === 'Yes, full brand guidelines available' || formData.brandIdentity === 'Yes, partial (logo only or basic colors)') && (
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Upload brand assets (logo, brand guide, references)</label>
                      <div className="border-2 border-dashed rounded-lg p-6 text-center" style={{ borderColor: '#1A2640' }}>
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.zip,.png,.jpg,.ai"
                          onChange={(e) => handleFileUpload('brandAssets', e.target.files)}
                          className="hidden"
                          id="brand-upload"
                        />
                        <label htmlFor="brand-upload" className="cursor-pointer">
                          <Upload className="w-8 h-8 mx-auto mb-2" style={{ color: '#00C28A' }} />
                          <p className="text-sm mb-1" style={{ color: '#8A9BBB' }}>Click to upload or drag and drop</p>
                          <p className="text-xs" style={{ color: '#8A9BBB' }}>PDF, ZIP, PNG, JPG, AI (max 20MB, max 3 files)</p>
                        </label>
                      </div>
                      {formData.brandAssets.length > 0 && (
                        <div className="mt-2 space-y-2">
                          {formData.brandAssets.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-2 rounded" style={{ backgroundColor: '#0F1729' }}>
                              <span className="text-sm truncate" style={{ color: '#8A9BBB' }}>{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile('brandAssets', index)}
                                className="text-red-400 hover:text-red-300"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Do you have wireframes, mockups, or design references?</label>
                    <select
                      value={formData.wireframes}
                      onChange={(e) => setFormData({ ...formData, wireframes: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                    >
                      <option value="">Select an option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="sketches">I have rough sketches</option>
                    </select>
                  </div>

                  {formData.wireframes === 'yes' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Upload wireframes or mockups</label>
                        <div className="border-2 border-dashed rounded-lg p-6 text-center" style={{ borderColor: '#1A2640' }}>
                          <input
                            type="file"
                            multiple
                            accept=".pdf,.zip,.png,.jpg,.fig"
                            onChange={(e) => handleFileUpload('wireframesFiles', e.target.files)}
                            className="hidden"
                            id="wireframes-upload"
                          />
                          <label htmlFor="wireframes-upload" className="cursor-pointer">
                            <Upload className="w-8 h-8 mx-auto mb-2" style={{ color: '#00C28A' }} />
                            <p className="text-sm mb-1" style={{ color: '#8A9BBB' }}>Click to upload or drag and drop</p>
                            <p className="text-xs" style={{ color: '#8A9BBB' }}>PDF, ZIP, PNG, JPG, FIG (max 20MB, max 3 files)</p>
                          </label>
                        </div>
                        {formData.wireframesFiles.length > 0 && (
                          <div className="mt-2 space-y-2">
                            {formData.wireframesFiles.map((file, index) => (
                              <div key={index} className="flex items-center justify-between p-2 rounded" style={{ backgroundColor: '#0F1729' }}>
                                <span className="text-sm truncate" style={{ color: '#8A9BBB' }}>{file.name}</span>
                                <button
                                  type="button"
                                  onClick={() => removeFile('wireframesFiles', index)}
                                  className="text-red-400 hover:text-red-300"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Figma or hosted references URL (optional)</label>
                        <input
                          type="url"
                          value={formData.wireframesUrl}
                          onChange={(e) => setFormData({ ...formData, wireframesUrl: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                          style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                          placeholder="https://figma.com/..."
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Design style preference *</label>
                    <div className="flex flex-wrap gap-3">
                      {['Minimal & Clean', 'Bold & Expressive', 'Corporate & Formal', 'Friendly & Approachable', 'Technical / Data-Heavy', 'No strong preference'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData({ ...formData, designStyle: option })}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            formData.designStyle === option
                              ? 'bg-[#00C28A] text-[#080D1A]'
                              : 'bg-[#0F1729] text-[#8A9BBB] border border-[#1A2640] hover:border-[#00C28A]'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Security and compliance requirements</label>
                    <div className="flex flex-wrap gap-2">
                      {securityRequirements.map((req) => (
                        <button
                          key={req}
                          type="button"
                          onClick={() => toggleArrayItem('securityRequirements', req)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                            formData.securityRequirements.includes(req)
                              ? 'bg-[#00C28A] text-[#080D1A]'
                              : 'bg-[#0F1729] text-[#8A9BBB] border border-[#1A2640]'
                          }`}
                        >
                          {req}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Anything else we should know?</label>
                    <textarea
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all min-h-[100px]"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                      placeholder="Regulatory context, cultural considerations, previous failed attempts, specific concerns, or anything else on your mind."
                    />
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#00C28A', fontFamily: 'var(--font-syne)' }}>INVESTMENT & TIMING</p>
                    <h2 className="text-2xl font-bold mb-6" style={{ color: '#F0F4FF', fontFamily: 'var(--font-syne)' }}>Budget and timeline</h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Estimated budget for this project *</label>
                    <div className="space-y-3">
                      {[
                        { value: 'under-5k', label: 'Under $5,000 USD', desc: 'Suitable for simple websites, basic apps, or MVPs.' },
                        { value: '5k-15k', label: '$5,000 – $15,000 USD', desc: 'Suitable for mid-complexity apps, portals, or platforms.' },
                        { value: '15k-50k', label: '$15,000 – $50,000 USD', desc: 'Suitable for full-featured platforms, SaaS products, or enterprise tools.' },
                        { value: '50k-150k', label: '$50,000 – $150,000 USD', desc: 'Suitable for large-scale systems, government deployments, or multi-module platforms.' },
                        { value: '150k+', label: '$150,000+ USD', desc: 'Enterprise-grade, multi-phase, or national-scale infrastructure.' },
                        { value: 'proposal', label: 'I do not have a budget in mind yet — I would like a proposal first.' },
                        { value: 'funded', label: 'This project has existing funding or grant backing.' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: option.value })}
                          className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                            formData.budget === option.value
                              ? 'border-[#00C28A] bg-[#00C28A]/10'
                              : 'border-[#1A2640] hover:border-[#00C28A]/50'
                          }`}
                        >
                          <div className="font-semibold mb-1" style={{ color: '#F0F4FF' }}>{option.label}</div>
                          {option.desc && <p className="text-sm" style={{ color: '#8A9BBB' }}>{option.desc}</p>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.budget === 'funded' && (
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Describe the funding context briefly</label>
                      <textarea
                        value={formData.fundingContext}
                        onChange={(e) => setFormData({ ...formData, fundingContext: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all min-h-[80px]"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                        placeholder="Describe the funding context briefly"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Is your budget fixed or flexible?</label>
                    <div className="flex flex-wrap gap-3">
                      {['Fixed', 'Flexible', 'Dependent on proposal'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetFlexibility: option })}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            formData.budgetFlexibility === option
                              ? 'bg-[#00C28A] text-[#080D1A]'
                              : 'bg-[#0F1729] text-[#8A9BBB] border border-[#1A2640] hover:border-[#00C28A]'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>When do you need this solution to launch? *</label>
                    <div className="space-y-3">
                      {[
                        { value: 'asap', label: 'As soon as possible (within 1–2 months)' },
                        { value: '3-6mo', label: 'Within 3–6 months' },
                        { value: '6-12mo', label: 'Within 6–12 months' },
                        { value: '12mo+', label: '12+ months (long-term or phased project)' },
                        { value: 'deadline', label: 'I have a specific deadline' },
                        { value: 'quality', label: 'No fixed deadline — quality over speed' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: option.value })}
                          className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                            formData.timeline === option.value
                              ? 'border-[#00C28A] bg-[#00C28A]/10'
                              : 'border-[#1A2640] hover:border-[#00C28A]/50'
                          }`}
                        >
                          <div className="font-semibold" style={{ color: '#F0F4FF' }}>{option.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.timeline === 'deadline' && (
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Specific deadline</label>
                      <input
                        type="date"
                        value={formData.specificDeadline}
                        onChange={(e) => setFormData({ ...formData, specificDeadline: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                        style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Preferred project start date (optional)</label>
                    <input
                      type="date"
                      value={formData.projectStartDate}
                      onChange={(e) => setFormData({ ...formData, projectStartDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                    />
                    <p className="text-xs mt-1" style={{ color: '#8A9BBB' }}>If you have a grant deadline, event launch, or board milestone, tell us when.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>How would you prefer to manage this engagement?</label>
                    <div className="flex flex-wrap gap-3">
                      {['Fully managed by Annita (hands-off on my end)', 'Collaborative (regular check-ins, I will be involved)', 'I have an in-house team — Annita to lead or augment'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData({ ...formData, engagementStyle: option })}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            formData.engagementStyle === option
                              ? 'bg-[#00C28A] text-[#080D1A]'
                              : 'bg-[#0F1729] text-[#8A9BBB] border border-[#1A2640] hover:border-[#00C28A]'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Do you need ongoing maintenance and support after launch?</label>
                    <select
                      value={formData.maintenanceNeeded}
                      onChange={(e) => setFormData({ ...formData, maintenanceNeeded: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                    >
                      <option value="">Select an option</option>
                      <option value="yes-scope">Yes, include it in scope</option>
                      <option value="yes-separate">Yes, as a separate post-launch arrangement</option>
                      <option value="not-sure">Not sure yet</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#8A9BBB' }}>Final thoughts before we review your brief</label>
                    <textarea
                      value={formData.finalThoughts}
                      onChange={(e) => setFormData({ ...formData, finalThoughts: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none transition-all min-h-[80px]"
                      style={{ backgroundColor: '#0F1729', border: '1px solid #1A2640', color: '#F0F4FF' }}
                      placeholder="Any final questions, concerns, or things you want the Annita team to know before your consultation."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreement"
                      checked={formData.agreement}
                      onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded"
                      style={{ accentColor: '#00C28A' }}
                      required
                    />
                    <label htmlFor="agreement" className="text-sm" style={{ color: '#8A9BBB' }}>
                      I agree to be contacted by Annita regarding my project request. (Your information is never shared with third parties.) *
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {submitError && (
              <div className="mb-6 p-4 rounded-lg text-sm" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid #EF4444', color: '#EF4444' }}>
                {submitError}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6" style={{ borderTop: '1px solid #1A2640' }}>
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-lg font-semibold transition-all"
                  style={{ backgroundColor: '#0F1729', color: '#8A9BBB', border: '1px solid #1A2640', opacity: isSubmitting ? 0.5 : 1 }}
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2"
                  style={{ backgroundColor: '#00C28A', color: '#080D1A' }}
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#00C28A', color: '#080D1A', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting Brief...
                    </>
                  ) : (
                    'Submit My Project Brief'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 max-w-[1400px] mx-auto" style={{ backgroundColor: '#080D1A', borderTop: '1px solid #1A2640' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm" style={{ color: '#8A9BBB' }}>© 2026 Annita LLC. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="/login" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Annita Ecosystem</Link>
            <a href="https://www.an-nitapay.com" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>AnnitaPay</a>
            <a href="https://www.an-nita-pulse.org" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Annita Pulse</a>
            <a href="https://www.ezri-africa.com" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Ezri</a>
            <a href="https://www.aiim.com" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>AIIM</a>
            <Link href="/solutions" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Custom Solutions</Link>
            <Link href="/awards" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Awards</Link>
            <Link href="/contact" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Contact Us</Link>
            <Link href="/contact-sales" className="text-sm hover:text-[#00C28A] transition-colors" style={{ color: '#8A9BBB' }}>Contact Sales</Link>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm" style={{ color: '#8A9BBB' }}>Built in Liberia. Built for the World.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
