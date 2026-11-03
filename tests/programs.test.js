import test from "node:test";
import assert from "node:assert/strict";
import { removeDuplicates } from "../01-array-string-programs/02-remove-duplicates.js";
import { findMissingNumber } from "../01-array-string-programs/03-find-missing-number.js";
import { secondLargest } from "../01-array-string-programs/04-second-largest-number.js";
import { flattenArray } from "../01-array-string-programs/05-flatten-nested-array.js";
import { areAnagrams } from "../01-array-string-programs/08-anagram-checker.js";
import { isPalindrome } from "../01-array-string-programs/09-palindrome-checker.js";
import { memoize } from "../03-advanced-javascript/03-memoization.js";
import { promiseAll } from "../04-asynchronous-javascript/02-promise-all-implementation.js";
import { Stack } from "../06-data-structures-algorithms/01-stack-implementation.js";
import { Queue } from "../06-data-structures-algorithms/02-queue-implementation.js";
import { binarySearch } from "../06-data-structures-algorithms/04-binary-search.js";
import { mergeSort } from "../06-data-structures-algorithms/05-merge-sort.js";
import { LruCache } from "../06-data-structures-algorithms/06-lru-cache.js";

test("removeDuplicates preserves first-seen order", () => {
  assert.deepEqual(removeDuplicates([1, 2, 2, 3, 1]), [1, 2, 3]);
});
test("findMissingNumber finds the missing integer", () => {
  assert.equal(findMissingNumber([1, 2, 4, 5], 5), 3);
});
test("secondLargest returns second distinct value", () => {
  assert.equal(secondLargest([10, 20, 20, 8]), 10);
  assert.equal(secondLargest([5, 5]), undefined);
});
test("flattenArray flattens nested arrays", () => {
  assert.deepEqual(flattenArray([1, [2, [3]]]), [1, 2, 3]);
});
test("string checks normalize input", () => {
  assert.equal(areAnagrams("Dormitory", "Dirty room"), true);
  assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
});
test("memoize caches a result", () => {
  let calls = 0;
  const fn = memoize(value => { calls++; return value * 2; });
  assert.equal(fn(4), 8);
  assert.equal(fn(4), 8);
  assert.equal(calls, 1);
});
test("promiseAll preserves input order", async () => {
  assert.deepEqual(await promiseAll([Promise.resolve("a"), "b"]), ["a", "b"]);
});
test("stack follows LIFO order", () => {
  const stack = new Stack(); stack.push(1); stack.push(2);
  assert.equal(stack.pop(), 2);
});
test("queue follows FIFO order", () => {
  const queue = new Queue(); queue.enqueue(1); queue.enqueue(2);
  assert.equal(queue.dequeue(), 1);
});
test("binarySearch returns matching index or -1", () => {
  assert.equal(binarySearch([1, 3, 5, 7], 5), 2);
  assert.equal(binarySearch([1, 3, 5, 7], 4), -1);
});
test("mergeSort sorts without mutating input", () => {
  const input = [4, 1, 3, 2];
  assert.deepEqual(mergeSort(input), [1, 2, 3, 4]);
  assert.deepEqual(input, [4, 1, 3, 2]);
});
test("LRU cache evicts least recently used entry", () => {
  const cache = new LruCache(2);
  cache.put("a", 1); cache.put("b", 2); cache.get("a"); cache.put("c", 3);
  assert.equal(cache.get("b"), undefined);
  assert.equal(cache.get("a"), 1);
});
