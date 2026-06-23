/**
 * Server Health Check
 * Checks if the backend server and database are available before allowing form submissions
 * Redis is not required for landing page forms
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface HealthCheckResult {
  isHealthy: boolean;
  message: string;
  latency?: number;
  database?: boolean;
}

/**
 * Check if the server and database are healthy and responsive
 * Uses deep health check endpoint but only requires database connectivity
 * Redis is optional for landing page forms
 */
export async function checkServerHealth(): Promise<HealthCheckResult> {
  const startTime = Date.now();
  
  try {
    const response = await fetch(`${API_URL}/api/health/deep`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });

    const latency = Date.now() - startTime;

    if (response.ok) {
      const data = await response.json();
      
      // Only check database connectivity - Redis is not required for forms
      if (data.database) {
        return {
          isHealthy: true,
          message: 'Server and database are online and responsive',
          latency,
          database: data.database,
        };
      } else {
        return {
          isHealthy: false,
          message: 'Database is not connected. Please try again later.',
          latency,
          database: data.database,
        };
      }
    } else {
      return {
        isHealthy: false,
        message: `Server returned status ${response.status}`,
        latency,
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
        };
      }
      if (error.message.includes('fetch')) {
        return {
          isHealthy: false,
          message: 'Unable to connect to server',
          latency,
        };
      }
    }
    
    return {
      isHealthy: false,
      message: 'Server connection failed',
      latency,
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
