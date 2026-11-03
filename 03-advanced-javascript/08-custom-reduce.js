/**
 * Educational implementation of Array.prototype.reduce.
 */
export function customReduce(array, callback, initialValue) {
  if (array == null) throw new TypeError("Array is null or undefined");
  if (typeof callback !== "function") throw new TypeError("Callback must be a function");
  const input = Object(array);
  let index = 0;
  let accumulator;

  if (arguments.length >= 3) {
    accumulator = initialValue;
  } else {
    while (index < input.length && !(index in input)) index++;
    if (index >= input.length) throw new TypeError("Reduce of empty array with no initial value");
    accumulator = input[index++];
  }

  for (; index < input.length; index++) {
    if (index in input) accumulator = callback(accumulator, input[index], index, input);
  }
  return accumulator;
}

console.log(customReduce([1, 2, 3], (sum, value) => sum + value, 0));
