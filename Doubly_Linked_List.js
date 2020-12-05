//Explanation: Data structure similar to linked list. Differences are that each node also has a pointer to its previous node alongwith a pointer to the next node. The data structure also has a tail property that points to the last node of the list.

class Node {
  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; //List will be empty when class is instantiated so head is null.
    this.tail = null;
    this.size = 0;
  }

  //Insert first node
  insertFirst(data) {
    if (this.head === null) {
      this.head = new Node(data, this.head);
      this.tail = this.head;
    } else {
      let current = this.head;
      let newNode = new Node(data, current);
      this.head = newNode;
      current.previous = newNode;
    }
    this.size++;
  }

  //Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //Edge case where the linked list is empty, in which case we need to just add the head. So the node will be both the first and last element
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.previous = current;
      this.tail = node;
    }
    this.size++;
  }
  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        return current.data;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //Insert at index
  insertAt(index, data) {
    //If index is out of range
    if (index > 0 && index > this.size) {
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
    node.previous = previous;
    previous.next = node;
    if (current) current.previous = node; //current will be null if we insert at the end of the list (because current is assigned the value curremt.next in the while loop and there will be no current.next for the last item in the last. Hence we used this if statement)
    if (this.tail.next) this.tail = this.tail.next; //If after inserting an item in the list, the tail node gains a next property, this means that the item was entered at the end of the list hence the tail node needs to be updated.

    this.size++;
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
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = current.next;
        current.next.previous = null; //current.next will be the new head and we are removing its previous linked node (as that node will be removed). this.head.previous would work as well.
      }
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      if (current.next) current.next.previous = previous; //if statement to ensure that there is a current.next property before trying to assign a value to its previous node
      if (this.tail === current) {
        this.tail = current.previous;
      }
    }

    this.size--;
  }

  //Clear list
  clearList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log({
        data: current.data,
        head: this.head.data,
        tail: this.tail.data,
      });
      current = current.next;
    }
  }
}

const ll = new DoublyLinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
// ll.insertFirst(300);

// ll.insertLast(400);

// ll.insertAt(140, 2);

// let res = ll.getAt(3);
// console.log(res);
// ll.removeAt(1);
ll.insertAt(2, 50);
ll.insertAt(1, 150);
// ll.clearList();
ll.printListData();
