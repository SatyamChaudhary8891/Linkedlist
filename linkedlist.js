/**
 * Created by satyam on 16/12/17.
 */
function LinkedList(){
    this.head = null;
}

/**
 * It will check the last node in the given linkedlist and added that particular node.
 * Time complexity would be 0(n)
 * @param value
 */
LinkedList.prototype.addNode = function (value) {
    let node = {
      value: value,
      next: null
    };
    if(!this.head)
        this.head = node;
    else{
        let last_node = this.head;
        while (last_node.next !== null){
            last_node = last_node.next;
        }
        last_node.next = node;
    }
};

/**
 * It will traverse the list elements one by one through loop.
 */
LinkedList.prototype.traverse = function () {
    if(!this.head) return;
    let current = this.head;
    while (current){
        console.log(current.value);
        current = current.next;
    }
};

/**
 * It will traverse the list elements recursively and console the node value from end.
 * @param node
 */
LinkedList.prototype.reverseTraverse = function (node) {
    if(node === null) return;
    LinkedList.prototype.reverseTraverse.call(null, node.next);
    console.log(node.value);
};

/**
 * To remove the nodes from the list, first we have to traverse the list and find out the particular node
 * and by the changes of couple of pointers you will get the desire result.
 * Time complexity would be because of traverse 0(n)
 * @param value
 */
LinkedList.prototype.removeNode = function (value) {
    if(this.head === null) return;
    if(this.head.value === value) {
        this.head = this.head.next;
        return;
    }
    let prev = this.head;
    let current = this.head.next;
    while (current !== null){
        if(current.value.toString() !== value.toString()){
            prev = current;
            current = current.next;
        }else{
            prev.next = current.next;
            break;
        }
    }
};

/**
 * To search the node in the list, we have to traverse the node one by one
 * and match the value of the node.
 * Time complexity would be again 0(n)
 * @param value
 * @returns {*}
 */
LinkedList.prototype.searchNode = function (value) {
    if(this.head === null) return false;
    let node = this.head;
    let isSearched = false;
    while(node){
        if(node.value === value){
            isSearched = true;
            break;
        }
        node = node.next;
    }
    return {isSearched: isSearched, node: node};
};

/**
 * To calculate the no of nodes in the list, We have to traverse the list recursively
 * and increase the count by 1 in each recursion.
 * Time complexity would be 0(n)
 * @param node
 * @returns {*}
 */
LinkedList.prototype.count = function (node) {
    if(node === null) return 0;
    return 1 + LinkedList.prototype.count.call(null, node.next);
};

/**
 * To findout the middle element in the list, we take two pointers and increase one by next and other by next to next
 * i.e. when second pointer would be at the last element of the list then first pointer would be at the middle element.
 * Time complexity would be 0(n/2)
 */
LinkedList.prototype.findMiddle = function () {
    let slow_node = this.head;
    let fast_node = this.head;
    while(fast_node !== null && fast_node.next !== null){
        fast_node = fast_node.next.next;
        slow_node = slow_node.next;
    }
    return slow_node.value;
};

/**
 * To find kth node from the reverse order of linkedlist
 * @param k
 * @returns {null|*}
 */
LinkedList.prototype.getNodeFromLast = function(k) {
    let f_pointer = this.head;
    let count = 0;
    let s_pointer = this.head;
    while(f_pointer !== null){
        if(count < k){
            count++;
            f_pointer = f_pointer.next;
        }else{
            f_pointer = f_pointer.next;
            s_pointer = s_pointer.next;
        }
    }
    return s_pointer;
};

/**
 * To reverse linkedlist pointers via recursion
 * @param node
 * @param prev
 * @returns {*}
 */
LinkedList.prototype.reverseLinkedList = function (node, prev) {
    if(node === null) return prev;
    let next = node.next;
    let curt = node;
    curt.next = prev;
    return LinkedList.prototype.reverseLinkedList.call(null,next, curt);
};

/**
 * To reverse linkedlist pointers via loop
 *
 * @returns {*}
 */
LinkedList.prototype.reverseLinkedList2 = function () {
    let next = null;
    let curt = this.head;
    let prev = null;
    while(curt !== null){
        next = curt.next;
        curt.next = prev;
        prev = curt;
        curt = next;
    }
    return prev;
};

/**
 * To reverse alternative kth node
 * @param node
 * @param k
 * @returns {*}
 */
LinkedList.prototype.reverseKNode = function (node, k) {
    let curt = node;
    let prev = null;
    let next = null;
    let count = 0;
    while (curt !== null && count < k){
        next = curt.next;
        curt.next = prev;
        prev = curt;
        curt = next;
        count++;
    }
    if(next !== null)
        node.next = LinkedList.prototype.reverseKNode(curt, k);
    return prev;
};

/**
 * To detect the loop in linkedlist.
 * @returns {boolean}
 */
LinkedList.prototype.detectLoop = function () {
    let f_Pointer = this.head;
    let s_Pointer = this.head;
    while (s_Pointer !== null && s_Pointer.next !== null){
        f_Pointer = f_Pointer.next;
        s_Pointer = s_Pointer.next.next;
        if(f_Pointer === s_Pointer){
            break;
        }
    }
    if(f_Pointer === s_Pointer)
        return true;
    else
        return false;
};

/**
 * To merge two sorted list via recursion.
 * @param n1
 * @param n2
 * @returns {*}
 */
LinkedList.prototype.mergeTwoSortedList = function (n1, n2) {
    let rs = null;
    if(n1 === n2) return n1;
    if(n1 === null) return n2;
    if(n2 === null) return n1;
    if(n1.value < n2.value){
        rs = n1;
        rs.next = LinkedList.prototype.mergeTwoSortedList.call(null, n1.next, n2);
    }else{
        rs = n2;
        rs.next = LinkedList.prototype.mergeTwoSortedList.call(null, n1, n2.next);
    }
    return rs;
};


function main() {
    let list = new LinkedList();
    list.addNode("Gpapa");
    list.addNode("Papa");
    list.addNode("Son");
    list.addNode("Gson");
    list.addNode("Thankyou");
    list.traverse();
    /*
    list.reverseTraverse(list.head);
    console.log('Middle of list - ',list.findMiddle());
    console.log('3 Node from last - ', list.getNodeFromLast(3));
    console.log('Reverse via recursion approach - ',list.reverseLinkedList(list.head, null));
    console.log('Reverse via loop approach - ',list.reverseLinkedList2());
    console.log('Reverse Alternative 2 node - ', list.reverseKNode(list.head, 2));
    console.log('checked loop - ',list.detectLoop());
    let list1 = new LinkedList();
    list1.addNode(4);
    list1.addNode(8);
    list1.addNode(10);
    list1.addNode(12);
    list1.addNode(20);
    let list2 = new LinkedList();
    list2.addNode(1);
    list2.addNode(8);
    list2.addNode(9);
    list2.addNode(13);
    list2.addNode(19);
    let rs = new LinkedList();
    rs.head = LinkedList.prototype.mergeTwoSortedList.call(null,list1.head,list2.head);
    rs.traverse();
    */

}
main();
