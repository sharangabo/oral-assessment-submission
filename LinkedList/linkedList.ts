class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    // Add an element to the end of the list
    add(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Remove the first occurrence of a value
    remove(value: T): boolean {
        if (!this.head) return false;

        if (this.head.value === value) {
            this.head = this.head.next;
            return true;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return true;
            }
            current = current.next;
        }

        return false;
    }

    // Find a node with a specific value
    find(value: T): ListNode<T> | null {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // Helper method to print the list
    print(): void {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}

// Example usage
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);
list.print(); // Output: 1 -> 2 -> 3
list.remove(2);
list.print(); // Output: 1 -> 3
console.log(list.find(3)); // Output: ListNode { value: 3, next: null }