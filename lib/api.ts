/**
 * Landing Page API Client
 * Handles form submissions to the server
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://annita-landing-page-production.up.railway.app';

export interface ContactUsFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website_url?: string;
}

export interface ContactSalesFormData {
  name: string;
  email: string;
  phone?: string;
  companyName: string;
  projectDescription: string;
  budget: string;
  website_url?: string;
}

export interface SolutionsRequestFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  projectName: string;
  projectSummary: string;
  solutionTypes: string[];
  budget: string;
  timeline: string;
  website_url?: string;
  [key: string]: any;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

/**
 * Submit Contact Us form
 */
export async function submitContactForm(data: ContactUsFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status >= 500) {
        return {
          success: false,
          message: `Database Connection Offline. The database is currently down or the server failed to respond (HTTP ${response.status}). Please try again shortly.`
        };
      }
      const errRes = await response.json().catch(() => ({ message: `Request failed with status ${response.status}` }));
      return {
        success: false,
        message: errRes.message || 'Submission failed. Please try again.'
      };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting Contact Us form:', error);
    const isNetworkError = error instanceof TypeError || (error as any).message?.includes('fetch') || (error as any).message?.includes('network');
    return {
      success: false,
      message: isNetworkError
        ? 'Database Connection Offline. The server is unreachable. Please verify your network connection and try again.'
        : 'An unexpected error occurred. Please try again later.'
    };
  }
}

/**
 * Submit Contact Sales form
 */
export async function submitSalesForm(data: ContactSalesFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact-sales`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status >= 500) {
        return {
          success: false,
          message: `Database Connection Offline. The database is currently down or the server failed to respond (HTTP ${response.status}). Please try again shortly.`
        };
      }
      const errRes = await response.json().catch(() => ({ message: `Request failed with status ${response.status}` }));
      return {
        success: false,
        message: errRes.message || 'Submission failed. Please try again.'
      };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting Contact Sales form:', error);
    const isNetworkError = error instanceof TypeError || (error as any).message?.includes('fetch') || (error as any).message?.includes('network');
    return {
      success: false,
      message: isNetworkError
        ? 'Database Connection Offline. The server is unreachable. Please verify your network connection and try again.'
        : 'An unexpected error occurred. Please try again later.'
    };
  }
}

/**
 * Submit Solutions Request form
 */
export async function submitSolutionsRequestForm(data: SolutionsRequestFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/solutions-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status >= 500) {
        return {
          success: false,
          message: `Database Connection Offline. The database is currently down or the server failed to respond (HTTP ${response.status}). Please try again shortly.`
        };
      }
      const errRes = await response.json().catch(() => ({ message: `Request failed with status ${response.status}` }));
      return {
        success: false,
        message: errRes.message || 'Submission failed. Please try again.'
      };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting Solutions Request form:', error);
    const isNetworkError = error instanceof TypeError || (error as any).message?.includes('fetch') || (error as any).message?.includes('network');
    return {
      success: false,
      message: isNetworkError
        ? 'Database Connection Offline. The server is unreachable. Please verify your network connection and try again.'
        : 'An unexpected error occurred. Please try again later.'
    };
  }
}

export interface NewsletterFormData {
  email: string;
  website_url?: string;
}

/**
 * Subscribe to newsletter
 */
export async function submitNewsletterForm(data: NewsletterFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status >= 500) {
        return {
          success: false,
          message: `Server error (HTTP ${response.status}). Please try again shortly.`
        };
      }
      const errRes = await response.json().catch(() => ({ message: `Request failed with status ${response.status}` }));
      return {
        success: false,
        message: errRes.message || 'Subscription failed. Please try again.'
      };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting newsletter form:', error);
    const isNetworkError = error instanceof TypeError || (error as any).message?.includes('fetch') || (error as any).message?.includes('network');
    return {
      success: false,
      message: isNetworkError
        ? 'Server is unreachable. Please check your connection and try again.'
        : 'An unexpected error occurred. Please try again later.'
    };
  }
}

export interface AccountDeletionFormData {
  email: string;
  softwareProduct: 'annita-ecosystem' | 'annita-pay' | 'annita-pulse' | 'ezri' | 'aiim-hub';
  reason: string;
  communicationChannel: 'email' | 'phone' | 'in-app';
  alternativeContact?: string;
  website_url?: string;
}

/**
 * Submit account deletion request
 */
export async function submitAccountDeletionRequest(data: AccountDeletionFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/account-deletion/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status >= 500) {
        return {
          success: false,
          message: `Server error (HTTP ${response.status}). Please try again shortly.`
        };
      }
      const errRes = await response.json().catch(() => ({ message: `Request failed with status ${response.status}` }));
      return {
        success: false,
        message: errRes.message || 'Deletion request failed. Please try again.'
      };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting account deletion request:', error);
    const isNetworkError = error instanceof TypeError || (error as any).message?.includes('fetch') || (error as any).message?.includes('network');
    return {
      success: false,
      message: isNetworkError
        ? 'Server is unreachable. Please check your connection and try again.'
        : 'An unexpected error occurred. Please try again later.'
    };
  }
}

export interface CareerApplicationFormData {
  jobId?: number;
  applicantName: string;
  email: string;
  phone?: string;
  country: string;
  address?: string;
  linkedInUrl?: string;
  portfolioUrl?: string;
  resumeUrl?: string;
  coverLetter?: string;
  customResponses?: Record<string, any>;
  website_url?: string;
}

/**
 * Submit career application
 */
export async function submitCareerApplication(data: CareerApplicationFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/careers/apply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status >= 500) {
        return {
          success: false,
          message: `Server error (HTTP ${response.status}). Please try again shortly.`
        };
      }
      const errRes = await response.json().catch(() => ({ message: `Request failed with status ${response.status}` }));
      return {
        success: false,
        message: errRes.message || 'Application submission failed. Please try again.'
      };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting career application:', error);
    const isNetworkError = error instanceof TypeError || (error as any).message?.includes('fetch') || (error as any).message?.includes('network');
    return {
      success: false,
      message: isNetworkError
        ? 'Server is unreachable. Please check your connection and try again.'
        : 'An unexpected error occurred. Please try again later.'
    };
  }
}

export interface JobPosting {
  id: number;
  title: string;
  description: string;
  requirements: string;
  department: string;
  location: string;
  employmentType: string;
  salaryRange?: string;
  experienceLevel: string;
  status: string;
  customFields?: any;
  createdAt: string;
  updatedAt: string;
}

/**
 * Fetch all open job postings
 */
export async function fetchJobPostings(): Promise<JobPosting[] | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/careers/jobs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch job postings:', response.status);
      return null;
    }

    const result = await response.json();
    return result.success ? result.data : null;
  } catch (error) {
    console.error('Error fetching job postings:', error);
    return null;
  }
}

/**
 * Fetch a single job posting by ID
 */
export async function fetchJobPosting(id: number): Promise<JobPosting | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/careers/jobs/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch job posting:', response.status);
      return null;
    }

    const result = await response.json();
    return result.success ? result.data : null;
  } catch (error) {
    console.error('Error fetching job posting:', error);
    return null;
  }
}

export interface PartnershipFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  partnershipType: 'technology' | 'distribution' | 'investment' | 'other';
  companyDescription: string;
  partnershipGoals: string;
  mouDocumentUrl?: string;
  proposedTerms?: string;
  additionalNotes?: string;
  website_url?: string;
}

/**
 * Submit partnership inquiry
 */
export async function submitPartnershipInquiry(data: PartnershipFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/partnerships/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status >= 500) {
        return {
          success: false,
          message: `Server error (HTTP ${response.status}). Please try again shortly.`
        };
      }
      const errRes = await response.json().catch(() => ({ message: `Request failed with status ${response.status}` }));
      return {
        success: false,
        message: errRes.message || 'Partnership inquiry failed. Please try again.'
      };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting partnership inquiry:', error);
    const isNetworkError = error instanceof TypeError || (error as any).message?.includes('fetch') || (error as any).message?.includes('network');
    return {
      success: false,
      message: isNetworkError
        ? 'Server is unreachable. Please check your connection and try again.'
        : 'An unexpected error occurred. Please try again later.'
    };
  }
}

export interface DownloadNotifyFormData {
  email: string;
  website_url?: string;
}

/**
 * Submit download notification signup (AnnitaPlug launch waitlist)
 */
export async function submitDownloadNotifyForm(data: DownloadNotifyFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/download-notify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      if (response.status >= 500) {
        return {
          success: false,
          message: `Server error (HTTP ${response.status}). Please try again shortly.`
        };
      }
      const errRes = await response.json().catch(() => ({ message: `Request failed with status ${response.status}` }));
      return {
        success: false,
        message: errRes.message || 'Signup failed. Please try again.'
      };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting download notification form:', error);
    const isNetworkError = error instanceof TypeError || (error as any).message?.includes('fetch') || (error as any).message?.includes('network');
    return {
      success: false,
      message: isNetworkError
        ? 'Server is unreachable. Please check your connection and try again.'
        : 'An unexpected error occurred. Please try again later.'
    };
  }
}
