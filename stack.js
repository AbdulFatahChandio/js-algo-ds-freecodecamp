class Stack {
    constructor() {
        this.stack = [];
    }

    // Push operation
    push(x) {
        this.stack.push(x);
        console.log(`${x} pushed into stack.`);
        this.display();  // Show stack after push
    }

    // Pop operation
    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow");
        } else {
            const popped = this.stack.pop();
            console.log(`${popped} popped from stack.`);
            this.display();  // Show stack after pop
        }
    }

    // Peek operation
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
            return null;
        } else {
            console.log("Top element is: " + this.stack[this.stack.length - 1]);
        }
    }

    // Check if stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Display the stack
    display() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            console.log("Current Stack: " + this.stack.join(" "));
        }
    }
}

// Driver code
const stack = new Stack();
let choice;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\n--- Stack Menu ---");
    console.log("1. Push");
    console.log("2. Pop");
    console.log("3. Peek");
    console.log("4. Display");
    console.log("5. Exit");
    rl.question("Enter your choice: ", (input) => {
        choice = parseInt(input);

        switch (choice) {
            case 1:
                rl.question("Enter value to push: ", (value) => {
                    stack.push(Number(value));
                    menu(); // Call menu again after operation
                });
                break;

            case 2:
                stack.pop();
                menu();
                break;

            case 3:
                stack.peek();
                menu();
                break;

            case 4:
                stack.display();
                menu();
                break;

            case 5:
                console.log("Exiting program.");
                rl.close();
                break;

            default:
                console.log("Invalid choice. Try again.");
                menu();
        }
    });
}

// Start the menu
menu();
