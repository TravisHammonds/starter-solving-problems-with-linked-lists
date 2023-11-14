/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
  //   if the list is empty then
  if (!list.head) {
    //     return  the list
    return list;
  }
  //   declare a variable x_next and initialize it to the next pointer of x
  const x_next = x.nextSibling;
  //   declare a variable x_prev and initialize it to the previous node to x, null if x is the head
  const x_prev = list.findWithPrevious((node) => node === x)[1];
  //   declare a variable y_prev and initialize it to the previous node to y, null if y is the head
  const y_prev = list.findWithPrevious((node) => node === y)[1];

  //   set the next pointer of x to the next pointer of y
  x.next = y.next;
  //   set the next pointer of y to x_next
  y.next = x_next;
  //   if x is not the head  of the list then
  if (x_prev) {
    //     set next pointer of x_prev to y
    x_prev.next = y;
  } else {
    //     set head to y
    list.head = y;
  }
  //   if y is not the head  of the list then
  if (y_prev) {
    //     set next pointer of y_prev to x
    y_prev.next = x;
  } else {
    //     set head to x
    list.head = x;
  }
  //   return the list
  return list;
}

module.exports = swap;
