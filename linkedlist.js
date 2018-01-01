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
    var prev = this.head;
    var current = this.head.next;
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
    var slow_node = this.head;
    var fast_node = this.head;
    while(fast_node !== null && fast_node.next !== null){
        fast_node = fast_node.next.next;
        slow_node = slow_node.next;
    }
    return slow_node.value;
};

function main() {
    let list = new LinkedList();
    list.addNode("Gpapa");
    list.addNode("Papa");
    list.addNode("Son");
    list.addNode("Gson");
    list.addNode("Thankyou");
    list.traverse();
    list.reverseTraverse(list.head);
    console.log('Middle of list - ',list.findMiddle());
}
main();
