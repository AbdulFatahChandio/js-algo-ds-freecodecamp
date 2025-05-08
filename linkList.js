
// Node classes
class SinglyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class DoublyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class CircularNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Linked List classes
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new SinglyNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next) temp = temp.next;
            temp.next = newNode;
        }
    }

    insertAtBeginning(value) {
        const newNode = new SinglyNode(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAfter(prevValue, newValue) {
        let temp = this.head;
        while (temp && temp.data !== prevValue) temp = temp.next;
        if (temp) {
            const newNode = new SinglyNode(newValue);
            newNode.next = temp.next;
            temp.next = newNode;
        } else {
            console.log("Value not found.");
        }
    }

    deleteNode(value) {
        if (!this.head) return;
        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }
        let temp = this.head;
        while (temp.next && temp.next.data !== value) temp = temp.next;
        if (temp.next) temp.next = temp.next.next;
        else console.log("Value not found.");
    }

    search(value) {
        let temp = this.head;
        while (temp) {
            if (temp.data === value) return true;
            temp = temp.next;
        }
        return false;
    }

    reverse() {
        let prev = null, current = this.head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    display() {
        const result = [];
        let temp = this.head;
        while (temp) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log("Singly List:", result.join(" -> "));
    }
}

// CLI using readline
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(query) {
    return new Promise(resolve => readline.question(query, answer => resolve(answer)));
}

async function singlyLinkedListMenu() {
    const sList = new SinglyLinkedList();
    let choice;
    do {
        console.log("\n--- Singly Linked List Menu ---");
        console.log("1. Append");
        console.log("2. Insert at Beginning");
        console.log("3. Insert After");
        console.log("4. Delete");
        console.log("5. Search");
        console.log("6. Reverse");
        console.log("7. Display");
        console.log("8. Exit");

        choice = parseInt(await ask("Enter your choice: "));
        let val, prev;

        switch (choice) {
            case 1:
                val = parseInt(await ask("Enter value to append: "));
                sList.append(val);
                break;
            case 2:
                val = parseInt(await ask("Enter value to insert at beginning: "));
                sList.insertAtBeginning(val);
                break;
            case 3:
                prev = parseInt(await ask("Enter previous node value: "));
                val = parseInt(await ask("Enter new value: "));
                sList.insertAfter(prev, val);
                break;
            case 4:
                val = parseInt(await ask("Enter value to delete: "));
                sList.deleteNode(val);
                break;
            case 5:
                val = parseInt(await ask("Enter value to search: "));
                console.log(sList.search(val) ? "Value found." : "Value not found.");
                break;
            case 6:
                sList.reverse();
                console.log("List reversed.");
                break;
            case 7:
                sList.display();
                break;
            case 8:
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice.");
        }
    } while (choice !== 8);

    readline.close();
}

// Start the menu
singlyLinkedListMenu();
