/**
 * Landing Page API Client
 * Handles form submissions to the server
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

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
    const response = await fetch(`${API_BASE_URL}/api/landing/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting Contact Us form:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.'
    };
  }
}

/**
 * Submit Contact Sales form
 */
export async function submitSalesForm(data: ContactSalesFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/landing/contact-sales`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting Contact Sales form:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.'
    };
  }
}

/**
 * Submit Solutions Request form
 */
export async function submitSolutionsRequestForm(data: SolutionsRequestFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/landing/solutions-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting Solutions Request form:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.'
    };
  }
}
