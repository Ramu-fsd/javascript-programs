/**
 * Checks a phrase as a palindrome, ignoring punctuation, spaces, and case.
 */
export function isPalindrome(value) {
  const normalized = value.toLowerCase().replace(/[^a-z0-9]/g, "");
  return normalized === [...normalized].reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
