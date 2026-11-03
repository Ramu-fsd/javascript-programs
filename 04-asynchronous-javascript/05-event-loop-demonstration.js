/**
 * Run with Node.js to observe synchronous, microtask, and timer ordering.
 */
console.log("1. synchronous start");

setTimeout(() => console.log("4. timer callback"), 0);

Promise.resolve().then(() => console.log("3. promise microtask"));

console.log("2. synchronous end");

// Expected order: 1, 2, 3, 4
