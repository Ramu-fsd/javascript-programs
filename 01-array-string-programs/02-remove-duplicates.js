/**
 * Removes duplicate values while preserving their first-seen order.
 * Set uses SameValueZero equality semantics.
 */
export function removeDuplicates(values) {
  if (!Array.isArray(values)) throw new TypeError("Expected an array");
  return [...new Set(values)];
}

console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));
