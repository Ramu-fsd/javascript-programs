/**
 * Retries an asynchronous operation with exponential backoff.
 */
const delay = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

export async function retry(operation, {
  retries = 3,
  baseDelayMs = 200,
  shouldRetry = () => true
} = {}) {
  let attempt = 0;

  while (true) {
    try {
      return await operation(attempt);
    } catch (error) {
      if (attempt >= retries || !shouldRetry(error)) throw error;
      await delay(baseDelayMs * (2 ** attempt));
      attempt++;
    }
  }
}

// Example:
// const result = await retry(() => fetch("https://example.com"), { retries: 2 });
