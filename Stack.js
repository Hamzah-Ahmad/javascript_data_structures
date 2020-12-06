//Stacks are data structures that follow the Last-In-First-Out (LIFO) principle.
class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //Add Items
  add(item) {
    this.items[this.count] = item;
    this.count++;
  }

  //Remove Items
  //When we pop an element from the stack, we have to remove the element in the top position of the items array and need to decrement the count variable so that the top will point to the previous element's position
  pop() {
    if (this.count == 0) return undefined; //checking whether array is empty
    let deleteItem = this.items[this.count - 1];
    this.count = this.count - 1;
    return deleteItem;
  }
  //Peak
  peak() {
    return this.items[this.count - 1];
  }

  //Print Stack
  print() {
    //we can't simply log this.items here because the pop method doesn't remove the item from the internal array. It just decreases the top index / count.
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }

  //Get the stack array
  getStack() {
    return this.items;
  }

  //Check if the stack is emty
  isEmpty() {
    return this.count === 0;
  }

  //Get size of stack
  size() {
    return this.count;
  }

  //Clear Stack
  clear() {
    this.items = [];
    this.count = 0;
  }
}

let stack = new Stack();
stack.add(100);
stack.add(200);
stack.add(300);
stack.add(400);
let res1 = stack.print();
console.log(res1);

console.log(stack.peak());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peak());

let res = stack.print();
console.log(res);
