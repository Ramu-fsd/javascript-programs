/**
 * Ensures a callback runs at most once per interval.
 */
export function throttle(callback, intervalMs) {
  let lastRun = 0;
  let timeoutId;

  return function (...args) {
    const context = this;
    const remaining = intervalMs - (Date.now() - lastRun);
    if (remaining <= 0) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
      lastRun = Date.now();
      callback.apply(context, args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastRun = Date.now();
        timeoutId = undefined;
        callback.apply(context, args);
      }, remaining);
    }
  };
}
