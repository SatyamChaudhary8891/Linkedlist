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
*/

function LinkedList() {
    this.head = null;
}

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

LinkedList.prototype.traverse = function () {
    let curt = this.head;
    while (curt !== null){
        console.log(curt.data);
        curt = curt.next;
    }
};

LinkedList.prototype.reverseTraverse = function (node) {
    if(node === null)
        return node;
    LinkedList.prototype.reverseTraverse(node.next);
    console.log(node.data);
};

LinkedList.prototype.count = function(node){
    if(node === null)
        return 0;
    return 1+ LinkedList.prototype.count(node.next);
};

LinkedList.prototype.getMiddle = function () {
    let slow_p = this.head;
    let fast_p = this.head;
    while (fast_p !== null && fast_p.next !== null){
        slow_p = slow_p.next;
        fast_p = fast_p.next.next;
    }
    return slow_p;
};

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


function main() {
    let list = new LinkedList();
    list.addNode(4);
    list.addNode(2);
    list.addNode(8);
    list.addNode(6);
    list.addNode(5);
    //list.traverse();
    //list.reverseTraverse(list.head);
    //console.log(list.count(list.head));
    //console.log(list.getMiddle());
    console.log(list.getKthElement(1));
}

main();











