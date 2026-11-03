/**
 * Counts Unicode code points in a string.
 */
export function characterFrequency(input) {
  const frequencies = new Map();
  for (const character of input) {
    frequencies.set(character, (frequencies.get(character) ?? 0) + 1);
  }
  return frequencies;
}

console.log([...characterFrequency("javascript")]);
