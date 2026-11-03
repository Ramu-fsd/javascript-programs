/**
 * Delays invocation until no call has occurred during the wait period.
 */
export function debounce(callback, delayMs) {
  let timerId;
  return function (...args) {
    const context = this;
    clearTimeout(timerId);
    timerId = setTimeout(() => callback.apply(context, args), delayMs);
  };
}

// Example:
// const onSearch = debounce(query => console.log("Searching:", query), 300);
// onSearch("java"); onSearch("javascript");
