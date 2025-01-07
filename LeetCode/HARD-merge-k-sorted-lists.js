/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const heap = [];

  // Grow the heap
  for (let list of lists) {
    while (list) {
      heap.push(list.val);

      let pos = heap.length - 1;
      let parent = Math.floor((pos - 1) / 2);
      while (parent >= 0 && heap[pos] < heap[parent]) {
        // Bubble up
        [heap[pos], heap[parent]] = [heap[parent], heap[pos]];
        pos = parent;
        parent = Math.floor((pos - 1) / 2);
      }

      list = list.next;
    }
  }

  let result = new ListNode();
  let head = result;

  // Shrink the heap
  while (heap.length > 0) {
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    const min = heap.pop();
    result.next = new ListNode(min);

    let pos = 0;
    let minChild;
    if (heap[pos * 2 + 1] < heap[pos * 2 + 2] || pos * 2 + 2 >= heap.length) {
      minChild = pos * 2 + 1;
    } else {
      minChild = pos * 2 + 2;
    }

    while (heap[pos] > heap[minChild]) {
      // Bubble down
      [heap[pos], heap[minChild]] = [heap[minChild], heap[pos]];
      pos = minChild;
      if (heap[pos * 2 + 1] < heap[pos * 2 + 2]) {
        minChild = pos * 2 + 1;
      } else {
        minChild = pos * 2 + 2;
      }
    }

    result = result.next;
  }

  return head.next;
};
