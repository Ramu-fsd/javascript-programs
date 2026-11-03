/**
 * Iterative binary search on an ascending, sorted array.
 * Returns the matching index or -1. Time: O(log n), space: O(1).
 */
export function binarySearch(values, target) {
  let low = 0;
  let high = values.length - 1;

  while (low <= high) {
    const middle = low + Math.floor((high - low) / 2);
    if (values[middle] === target) return middle;
    if (values[middle] < target) low = middle + 1;
    else high = middle - 1;
  }
  return -1;
}

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38], 16)); // 4
