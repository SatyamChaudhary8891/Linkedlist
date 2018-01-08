/*
Linked list part 1
Following are the covered topic
- Basic linked list design
- Add Node
- Traverse Node
- Reverse Traverse Node
- Remove Node
- Search Node( Find Node)
- Count number of node in linked list
- Find middle of a linked list
- Find kth element from the last in a linked list
*/


function LinkedList(){
    this.head = null;
};

LinkedList.prototype.addNode = function (data) {
    let new_node = {
        data: data,
        next: null
    };
    if(this.head === null)
        this.head = new_node;
    else{
        let last_node = this.head;
        while(last_node.next !== null){
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
    LinkedList.prototype.reverseTraverse.call(null, node.next);
    console.log(node.data);
};

LinkedList.prototype.getCount = function (node) {
    if(node === null)
        return 0;
    return 1+ LinkedList.prototype.getCount.call(null, node.next);
};

LinkedList.prototype.getMiddle = function () {
    let f_pointer = this.head;
    let s_pointer = this.head;
    while(f_pointer !== null && f_pointer.next !== null){
        s_pointer = s_pointer.next;
        f_pointer = f_pointer.next.next;
    }
    return s_pointer;
};

LinkedList.prototype.getKthNode = function (k) {
    let curt = this.head;
    let count = 0;
    let result = null;
    while (curt !== null){
        if(count < k){
            curt = curt.next;
        }else{
            if(result === null)
                result = this.head;
            result = result.next;
            curt = curt.next;
        }
        count++;
    }
    return result;
};


function main() {
    let list = new LinkedList();
    list.addNode(4);
    list.addNode(8);
    list.addNode(2);
    list.addNode(9);
    list.addNode(1);
    list.traverse();
    //list.reverseTraverse(list.head);
    //list.removeNode(9);
    //console.log(list.searchNode(2));
    //console.log(list.getCount(list.head));
    //console.log(list.getMiddle());
    //console.log(list.getKthNode(2));
}

main();






