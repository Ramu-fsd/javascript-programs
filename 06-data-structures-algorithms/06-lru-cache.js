/**
 * Least Recently Used cache.
 * Map preserves insertion order; recently accessed entries are moved to the end.
 */
export class LruCache {
  #cache = new Map();

  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity < 1) {
      throw new RangeError("Capacity must be a positive integer");
    }
    this.capacity = capacity;
  }

  get(key) {
    if (!this.#cache.has(key)) return undefined;
    const value = this.#cache.get(key);
    this.#cache.delete(key);
    this.#cache.set(key, value);
    return value;
  }

  put(key, value) {
    this.#cache.delete(key);
    this.#cache.set(key, value);
    if (this.#cache.size > this.capacity) {
      const leastRecentlyUsedKey = this.#cache.keys().next().value;
      this.#cache.delete(leastRecentlyUsedKey);
    }
  }

  get size() { return this.#cache.size; }
  entries() { return [...this.#cache.entries()]; }
}

const cache = new LruCache(2);
cache.put("A", 1); cache.put("B", 2); cache.get("A"); cache.put("C", 3);
console.log(cache.entries()); // B is evicted
