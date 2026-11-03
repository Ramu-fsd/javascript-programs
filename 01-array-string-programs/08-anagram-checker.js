/**
 * Checks whether two strings contain the same characters.
 * This version is case-insensitive and ignores whitespace.
 */
export function areAnagrams(first, second) {
  const normalize = value => [...value.toLowerCase().replace(/\s/g, "")].sort().join("");
  return normalize(first) === normalize(second);
}

console.log(areAnagrams("Dormitory", "Dirty room")); // true
