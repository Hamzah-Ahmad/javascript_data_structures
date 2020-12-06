//Explanation: Linear data structure .The elements in the linked list (node) are not stored in sequential memory locations. Instead the elements are linked toether using pointers.

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; //List will be empty when class is instantiated so head is null.
    this.size = 0;
  }

  //Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head); //this node becomes the new head and the original head becomes this node's next node.
    this.size++;
  }

  //Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //Edge case where the linked list is empty, in which case we need to just add the head. So the node will be both the first and last element
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  //Insert at index
  insertAt(index, data) {
    //If index is out of range
    if (index < 0 || index > this.size) {
      return;
    }

    //If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    //Set current to first
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; //Node before index we want to insert at
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      //getAt uses current instead of current.next in the while loop because we want the loop to run at the final element as well. In other while loops, we only needed to see if the next element was the final element, but here we need to use that element too
      if (count == index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //Remove at index
  removeAt(index) {
    //Handling if index out of range
    if (index < 0 || index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    //If first index, remove head
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  //Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);
// ll.insertFirst(500);
// ll.insertFirst(600);
ll.reverseList();
// console.log(ll.getAt(5));
ll.printListData();
