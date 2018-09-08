var reverseList = function (head) {
  if (!head) return null;
  var newHead;
  recur(head);
  return newHead;

  function recur(node, prev = null) {
    if (node.next) {
      recur(node.next, node)
    }
    newHead = newHead || node;
    node.next = prev;
  }
};