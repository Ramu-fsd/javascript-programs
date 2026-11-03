/**
 * Stable merge sort. Time: O(n log n), auxiliary space: O(n).
 */
export function mergeSort(values) {
  if (values.length <= 1) return [...values];

  const middle = Math.floor(values.length / 2);
  const left = mergeSort(values.slice(0, middle));
  const right = mergeSort(values.slice(middle));
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i), right.slice(j));
}

console.log(mergeSort([38, 12, 27, 43, 9, 31, 18]));
