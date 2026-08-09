//##LinkedList
// Linked lists are another way to store and manage collections of data. 
// Unlike arrays, linked lists are not stored in contiguous memory locations. 
// Instead, each element (called a node) points to the next element in the list.

// Singly Linked List

// Create a Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Linked List
class LinkedList {
    constructor() {
        this.head = null;
    }
    
    // Add a new node to end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        
        let current = this.head;
        while (current.next) {
            current = current.next
        }
        current.next = newNode; // Add the new node at the end
    }
    
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage
const list = new LinkedList();
list.append("apple");
list.append("banana");
list.append("cherry");
list.append("strawberry");
list.append("pineapple");

list.printList()
console.log(list)










