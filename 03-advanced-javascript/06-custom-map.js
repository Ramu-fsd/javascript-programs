/**
 * Educational implementation of Array.prototype.map semantics for dense arrays.
 */
export function customMap(array, callback, thisArg) {
  if (array == null) throw new TypeError("Array is null or undefined");
  if (typeof callback !== "function") throw new TypeError("Callback must be a function");
  const input = Object(array);
  const result = new Array(input.length);
  for (let index = 0; index < input.length; index++) {
    if (index in input) result[index] = callback.call(thisArg, input[index], index, input);
  }
  return result;
}

console.log(customMap([1, 2, 3], value => value * 2));
