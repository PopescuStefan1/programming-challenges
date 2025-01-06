/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  let result;
  if (list1.val < list2.val) {
    result = list1;
    list1 = list1.next;
  } else {
    result = list2;
    list2 = list2.next;
  }

  let head = result;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      result.next = list1;
      list1 = list1.next;
    } else {
      result.next = list2;
      list2 = list2.next;
    }

    result = result.next;
  }

  while (list1) {
    result.next = list1;
    list1 = list1.next;
    result = result.next;
  }

  while (list2) {
    result.next = list2;
    list2 = list2.next;
    result = result.next;
  }

  return head;
};
