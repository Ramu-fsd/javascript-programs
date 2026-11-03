/**
 * A closure retains access to variables from its lexical scope.
 */
export function createCounter(initialValue = 0) {
  let count = initialValue;
  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count
  };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.value()); // 11
