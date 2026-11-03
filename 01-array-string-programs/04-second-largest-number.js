/**
 * Returns the second-largest distinct number in one pass.
 * Returns undefined when fewer than two distinct numbers exist.
 */
export function secondLargest(values) {
  let largest = -Infinity;
  let second = -Infinity;

  for (const value of values) {
    if (!Number.isFinite(value)) throw new TypeError("Values must be finite numbers");
    if (value > largest) {
      second = largest;
      largest = value;
    } else if (value < largest && value > second) {
      second = value;
    }
  }
  return second === -Infinity ? undefined : second;
}

console.log(secondLargest([10, 5, 20, 20, 8])); // 10
