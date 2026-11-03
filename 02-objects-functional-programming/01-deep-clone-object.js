/**
 * Deep-clones structured-clone-compatible values.
 * structuredClone supports cycles, Date, Map, Set, and many built-ins.
 */
export function deepClone(value) {
  if (typeof structuredClone !== "function") {
    throw new Error("This runtime does not support structuredClone");
  }
  return structuredClone(value);
}

const original = { user: { name: "Ravi" }, tags: new Set(["java", "javascript"]) };
const copy = deepClone(original);
copy.user.name = "Maya";
console.log({ original, copy });
