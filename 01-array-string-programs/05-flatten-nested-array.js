/**
 * Recursively flattens nested arrays without mutating the input.
 */
export function flattenArray(values) {
  return values.reduce(
    (result, value) => result.concat(Array.isArray(value) ? flattenArray(value) : value),
    []
  );
}

console.log(flattenArray([1, [2, [3, 4]], 5]));
