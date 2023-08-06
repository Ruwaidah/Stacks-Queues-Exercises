/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newQueue = new Node(val);
    if (!this.first) {
      this.first = newQueue;
      this.last = newQueue;
      this.size = 1;

    } else {
      const node = this.last;
      node.next = newQueue;
      this.last = newQueue;
      this.size++;

    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) return "queue is empty";
    else {
      const removedQueue = this.first;
      this.first = this.first.next;
      this.size--;
      return removedQueue;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) return "Queue is empty";
    else return this.first;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) return true;
    else return false;
  }
}

module.exports = Queue;
