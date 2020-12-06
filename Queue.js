// A queue is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue. A queue works based on the first-in, first-out (FIFO) principle.

class Queue {
  constructor() {
    this.items = [];
  }

  //Add item to the end of the queue
  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.items.length === 0) {
      console.log("Cannot complete dequeue function. Queue is empty");
      return;
    }
    return this.items.shift();
  }

  // returns the Front element of
  // the queue without removing it.
  peek() {
    if (this.items.length === 0) {
      console.log("No items in the queue");
      return;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
  printQueue() {
    if (this.items.length === 0) {
      console.log("Queue is empty");
      return;
    }
    let str = "|";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + "|";
    }
    console.log(str);
  }
}

let q = new Queue();
q.printQueue();
q.enqueue(100);
q.enqueue(200);
q.enqueue(300);
q.printQueue();
q.dequeue();
q.enqueue(400);
console.log(q.peek());
q.printQueue();
console.log(q.dequeue());
q.printQueue();
