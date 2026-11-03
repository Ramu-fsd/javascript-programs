/**
 * Singly linked list with append, delete, find, and iteration.
 */
class Node {
  constructor(value) { this.value = value; this.next = null; }
}

export class LinkedList {
  head = null;
  tail = null;
  size = 0;

  append(value) {
    const node = new Node(value);
    if (!this.head) this.head = node;
    else this.tail.next = node;
    this.tail = node;
    this.size++;
  }

  find(value) {
    for (let current = this.head; current; current = current.next) {
      if (current.value === value) return current;
    }
    return null;
  }

  delete(value) {
    let previous = null;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (previous) previous.next = current.next;
        else this.head = current.next;
        if (this.tail === current) this.tail = previous;
        this.size--;
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }

  *[Symbol.iterator]() {
    for (let current = this.head; current; current = current.next) yield current.value;
  }
}

const list = new LinkedList();
[10, 20, 30].forEach(value => list.append(value));
list.delete(20);
console.log([...list]);
