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
}

export interface ContactSalesFormData {
  name: string;
  email: string;
  phone?: string;
  companyName: string;
  projectDescription: string;
  budget: string;
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

