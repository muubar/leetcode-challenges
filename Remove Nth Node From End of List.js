var removeNthFromEnd = function (head, n) {
  var size = 1;
  var pointer = head;

  while (pointer.next) {
    pointer = pointer.next;
    size += 1;
  }

  pointer = head;

  if (n === size) {
    head = head.next;
    return head;
  }

  for (var k = 1; k < size - n; k++) {
    pointer = pointer.next;
  }
  if (n === 1) {
    pointer.next = null;
    return head;
  }
  pointer.next = pointer.next.next
  return head;
};