// Priority Queue is an extension of Queue having some properties as follows:

//     Each element of the priority queue has an property associated with it.
//     Elements are added to the queue as per the priority.
//     Lowest priority elements are removed first.

// A priority queue can be designed using two approaches. In the first case we can add the queue element at the end of the queue and we can remove the elements of the queue depending on the priority. In the second case we can add elements to the queue according to the priority and remove them from the front of the queeue. In this implementation the second approach will be used to implement a Priority Queue.

class PriorityQueueElement {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    if (!this.data || !this.priority) {
      throw new Error(
        "Valid Data and Priority arguments must be passed as arguments when instantiating a priority queue element"
      );
    }
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(data, priority) {
    let newElement = new PriorityQueueElement(data, priority);
    let added = false;

    // iterating through the entire item array to add element at the correct location of the Queue
    for (let i = 0; i < this.items.length; i++) {
      //if element has lesser priority than element at i index, then the new element will be placed in front of the element at index 'i', because low-priority elements are removed first. The code below will never run if the prioity provided is greater than all other element priorities. We handle that case after the for loop.
      if (this.items[i].priority > newElement.priority) {
        this.items.splice(i, 0, newElement);
        added = true;
        break;
      }
    }

    // if the element have the highest priority it is added at the end of the queue.
    if (!added) {
      this.items.push(newElement);
    }
  }

  dequeue() {
    if (this.items.length === 0) {
      console.log("Cannot complete dequeue function. Queue is empty");
      return;
    }
    return this.items.shift();
  }

  peek() {
    if (this.items.length === 0) {
      console.log("No items in the queue");
      return;
    }
    console.log("Peak " + this.items[0].data);
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
      str += `data: ${this.items[i].data} ~ priority: ${this.items[i].priority} | `;
    }
    console.log(str);
  }
}

let q = new PriorityQueue();
// q.printQueue();
q.enqueue(100, 10);
q.enqueue(200, 4);
q.enqueue(300, 3);
q.enqueue(400, 2);
q.enqueue(500, 1);
q.printQueue();
q.dequeue();
q.dequeue();
q.peek();
// q.enqueue(400);
// console.log(q.peek());
// q.printQueue();
// console.log(q.dequeue());
q.printQueue();
