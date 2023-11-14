function josephus(list, m) {
  //   declare variable node and initialize it to the head
  let node = list.head;
  //   declare variable tail and initialize it to the last node in the list
  const tail = list.fint((node) => !node.next);
  //   assign the next pointer of the tail to the head of the list
  tail.next = list.head;
  //   while there are more than one nodes left do:
  while (node.next != node) {
    //     move node to node.next m times
    for (let i = 1; i < m; i++) {
      node = node.next;
    }
    //     if the next pointer of the current node points to the head
    if(node.next === list.head){
    //       set the head to the next node after the head
    list.head = list.head.next;
    }
    //     set node.next  to  node.next.next
    node.next = node.next.next;
    //     node = node.next;
    node = node.next
  }
  //   return node.value;
  return node.value;
}

module.exports = josephus;
