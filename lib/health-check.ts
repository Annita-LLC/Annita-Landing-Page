/**
 * Server Health Check
 * Checks if the backend server and database are available before allowing form submissions
 * Redis is not required for landing page forms
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://annita-landing-page-production.up.railway.app';

export interface HealthCheckResult {
  isHealthy: boolean;
  message: string;
  latency?: number;
  database?: boolean;
}

/**
 * Check if the server and database are healthy and responsive
 * Uses the landing page server's /health endpoint
 */
export async function checkServerHealth(): Promise<HealthCheckResult> {
  const startTime = Date.now();
  
  try {
    const response = await fetch(`${API_URL}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });

    const latency = Date.now() - startTime;

    if (response.ok) {
      const data = await response.json();
      
      // Check database status from health endpoint
      if (data.database && data.database.status === 'CONNECTED') {
        return {
          isHealthy: true,
          message: 'Server and database are online and responsive',
          latency,
          database: true,
        };
      } else {
        return {
          isHealthy: false,
          message: 'Database is not connected. Please try again later.',
          latency,
          database: false,
        };
      }
    } else {
      return {
        isHealthy: false,
        message: `Server returned status ${response.status}`,
        latency,
        database: false,
      };
    }
  } catch (error) {
    const latency = Date.now() - startTime;
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return {
          isHealthy: false,
          message: 'Server connection timed out',
          latency,
          database: false,
        };
      }
      if (error.message.includes('fetch')) {
        return {
          isHealthy: false,
          message: 'Unable to connect to server',
          latency,
          database: false,
        };
      }
    }
    
    return {
      isHealthy: false,
      message: 'Server connection failed',
      latency,
      database: false,
    };
  }
}

/**
 * Check server health with retry logic
 */
export async function checkServerHealthWithRetry(
  maxRetries = 2,
  retryDelay = 1000
): Promise<HealthCheckResult> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const result = await checkServerHealth();
    
    if (result.isHealthy) {
      return result;
    }
    
    // If not the last attempt, wait before retrying
    if (attempt < maxRetries) {
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
  }
  
  return {
    isHealthy: false,
    message: 'Server or database is currently unavailable. Please try again later.',
  };
}
