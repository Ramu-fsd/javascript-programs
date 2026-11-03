/**
 * Last-In-First-Out (LIFO) stack.
 */
export class Stack {
  #items = [];

  push(value) { this.#items.push(value); }
  pop() { return this.#items.pop(); }
  peek() { return this.#items.at(-1); }
  isEmpty() { return this.#items.length === 0; }
  get size() { return this.#items.length; }
}

const stack = new Stack();
stack.push("first");
stack.push("second");
console.log(stack.pop(), stack.peek());
