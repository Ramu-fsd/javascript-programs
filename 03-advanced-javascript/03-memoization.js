/**
 * Memoizes a function using its arguments as a JSON cache key.
 * Suitable for deterministic functions with JSON-serializable arguments.
 */
export function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const slowSquare = memoize(number => number ** 2);
console.log(slowSquare(12), slowSquare(12));
