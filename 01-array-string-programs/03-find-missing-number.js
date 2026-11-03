/**
 * Finds the missing value from a permutation of integers 1..n.
 * Assumes exactly one number is missing and there are no duplicates.
 */
export function findMissingNumber(values, n = values.length + 1) {
  if (!Number.isInteger(n) || n < 1) throw new RangeError("n must be positive");
  const expected = (n * (n + 1)) / 2;
  const actual = values.reduce((sum, value) => sum + value, 0);
  return expected - actual;
}

console.log(findMissingNumber([1, 2, 4, 5], 5)); // 3
