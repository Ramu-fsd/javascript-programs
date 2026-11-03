/**
 * Educational implementation of Array.prototype.filter.
 */
export function customFilter(array, callback, thisArg) {
  if (array == null) throw new TypeError("Array is null or undefined");
  if (typeof callback !== "function") throw new TypeError("Callback must be a function");
  const input = Object(array);
  const result = [];
  for (let index = 0; index < input.length; index++) {
    if (index in input && callback.call(thisArg, input[index], index, input)) {
      result.push(input[index]);
    }
  }
  return result;
}

console.log(customFilter([1, 2, 3, 4], value => value % 2 === 0));
