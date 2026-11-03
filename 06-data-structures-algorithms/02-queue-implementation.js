/**
 * First-In-First-Out (FIFO) queue with O(1) amortized dequeue.
 */
export class Queue {
  #items = [];
  #head = 0;

  enqueue(value) { this.#items.push(value); }
  dequeue() {
    if (this.isEmpty()) return undefined;
    const value = this.#items[this.#head++];
    if (this.#head > 50 && this.#head * 2 >= this.#items.length) {
      this.#items = this.#items.slice(this.#head);
      this.#head = 0;
    }
    return value;
  }
  peek() { return this.#items[this.#head]; }
  isEmpty() { return this.size === 0; }
  get size() { return this.#items.length - this.#head; }
}

const queue = new Queue();
queue.enqueue("A"); queue.enqueue("B");
console.log(queue.dequeue(), queue.peek());
