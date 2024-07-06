

class Node{
    constructor(val, next=null){
        this.val = val
        this.next = next
    }
}

const firstPage = 
    new Node('google.com',
        new Node('amazon.com',
             new Node('reddit.com')));


class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    traverse() {
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
    find(val){
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.val === val){
                currentNode = currentNode.next;
            }
            return false
        }
    }

    append(val){
        newNode = Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;


    }
}

// const history = new LinkedList();
// history.head = firstPage;

const train = new LinkedList();
train.append("Engine");
train.append("Freight Car 1");
train.append("Freight Car 2");
train.append("Caboose");



// REMOVING A NODE

// REMOVING 1 ITEM?
    // update both head and tail to null

// REMOVING 1ST ITEM?
    // update the head

// REMOVING LAST ITEM?
    // update the tail 

// REMOVING MIDDLE ITEM?
    // find items before and after wanted item, connect the before item to the after item, severing the item out of the list.
