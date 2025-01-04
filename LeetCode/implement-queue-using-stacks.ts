class MyQueue {
  stack1;
  stack2;

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }

    const value = this.stack2.pop();

    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }

    return value;
  }

  peek(): number {
    return this.stack1[0];
  }

  empty(): boolean {
    return this.stack1.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
