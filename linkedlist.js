/*
Linked list part 1
Following are the covered topic
- Basic linked list design
- Add Node
- Traverse Node
- Reverse Traverse Node
- Count number of node in linked list
- Find middle of a linked list
- Find kth element from the last in a linked list
- Remove node
- Search node
- Reverse the linked list
*/

function LinkedList() {
    this.head = null;
}

/**
 * To add the node in linked list
 * @param data
 */
LinkedList.prototype.addNode = function (data) {
    let new_node = {
        data: data,
        next: null
    };

    if(this.head === null)
        this.head = new_node;
    else{
        let last_node = this.head;
        while (last_node.next !== null){
            last_node = last_node.next;
        }
        last_node.next = new_node;
    }
};

/**
 * To traverse the node
 */
LinkedList.prototype.traverse = function () {
    let curt = this.head;
    while (curt !== null){
        console.log(curt.data);
        curt = curt.next;
    }
};

/**
 * To traverse the linked list in reverse order
 * @param node
 * @returns {*}
 */
LinkedList.prototype.reverseTraverse = function (node) {
    if(node === null)
        return node;
    LinkedList.prototype.reverseTraverse(node.next);
    console.log(node.data);
};

/**
 * To get the number of node in the linked list
 * @param node
 * @returns {*}
 */
LinkedList.prototype.count = function(node){
    if(node === null)
        return 0;
    return 1+ LinkedList.prototype.count(node.next);
};

/**
 * To get the middle of the linked list
 * @returns {null|*}
 */
LinkedList.prototype.getMiddle = function () {
    let slow_p = this.head;
    let fast_p = this.head;
    while (fast_p !== null && fast_p.next !== null){
        slow_p = slow_p.next;
        fast_p = fast_p.next.next;
    }
    return slow_p;
};

/**
 * To get the kth element from the last of the linked list
 * @param k
 * @returns {*}
 */
LinkedList.prototype.getKthElement = function (k) {
    let curt = this.head;
    let count = 0;
    let resultant = null;
    while (curt !== null){
        if(count < k){
            curt = curt.next;
        }else{
            curt = curt.next;
            if(resultant === null)
                resultant = this.head;
            resultant = resultant.next;
        }
        count++;
    }
    return resultant;
};

/**
 * Remove the node
 * @param data
 */
LinkedList.prototype.removeNode = function (data) {
    let curt = this.head;
    let prev = null;
    while (curt !== null){
        if(curt.data === data){
            if(prev === null)
                this.head = curt.next;
            prev.next = curt.next;
        }
        prev = curt;
        curt = curt.next;
    }
};

/**
 * Search node
 * @param data
 * @returns {null|*}
 */
LinkedList.prototype.searchNode = function (data) {
    let curt = this.head;
    while (curt !== null){
        if(curt.data === data)
            break;
        curt = curt.next;
    }
    return curt;
};

/**
 * Reverse the linked list via loop
 * @returns {*}
 */
LinkedList.prototype.loopReverseLinkedList = function () {
    let prev = null;
    let curt = this.head;
    let next = null;
    while(curt !== null){
        next = curt.next;
        curt.next = prev;
        prev = curt;
        curt = next;
    }
    return prev;
};

/**
 * Recursively reverse the linked list
 * @param curt
 * @param prev
 * @returns {*}
 */
LinkedList.prototype.recursionReverseLinkedList = function (curt, prev) {
    if(curt === null)
        return prev;
    let next = curt.next;
    curt.next = prev;
    prev = curt;
    return LinkedList.prototype.recursionReverseLinkedList(next, prev);
};

function main() {
    let list = new LinkedList();
    list.addNode(4);
    list.addNode(2);
    list.addNode(8);
    list.addNode(6);
    list.addNode(5);
    /*list.traverse();
    list.reverseTraverse(list.head);
    console.log(list.count(list.head));
    console.log(list.getMiddle());
    console.log(list.getKthElement(1));
    list.removeNode(8);
    list.traverse();
    console.log(list.searchNode(9));
    let reversedList = new LinkedList();
    //reversedList.head = list.loopReverseLinkedList();
    reversedList.head = list.recursionReverseLinkedList(list.head, null);
    reversedList.traverse();
    */

}

main();











