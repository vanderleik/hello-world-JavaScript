//Lista encadeada
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {    
     constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        var node = new Node(data);

        if (!this.head) {
            this.head = node;
        } else {
            var current = this.head;

            while (current.next) {
                current.next;
            }

            current.next = node;
        }

        this.size++;
    }
}

var list = new LinkedList();

list.add('Primeiro elemento inserido na lista');
list.add('Segundo elemento inserido na lista');

console.log(list.head.data);
console.log(list.head.next.data);
console.log();
//Recursão

function fatorialRecursivo(n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * fatorialRecursivo(n - 1);
    }
}
console.log('Fatorial recursivo: ')
console.log(fatorialRecursivo(10));