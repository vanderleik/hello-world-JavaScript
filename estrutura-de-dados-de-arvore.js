//Construindo uma árvore binária

//{1} Criação do nó
class Node {
    constructor(key) {
        this.key = key;//Valor do nó
        this.left = null;//Filho à esquerda
        this.right = null;//Filho à direita
    }
}

//{2} Criação da árvore
class BinarySearchTree {
    constructor() {       
        this.root = null;//Nó raiz do tipo Node
    }
    //{3} Criação do método que realiza o insert no nó      
    insert(key) {//insere uma nova chave na árvore.
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    //{4} Método auxiliar que adiciona um nó em uma posição que não seja o root
    insertNode(node, key) {
        if (key < node.key) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }
    //Percorrendo a árvore em ordem (in-order) crescente
    inOrderTraverse(callback) {//esse método visita todos os nós da árvore usando um percurso em-ordem (in-order).
        this.inOrderTraverseNode(this.root, callback);
    }
    
    inOrderTraverseNode(node, callback) {//Implementação
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);//Depois de visitar o nó da esquerda visitamos o nó raiz
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    //Percorrendo a árvore em um percurso pré-ordem (pre-order). Visita o nó antes de seus descendentes.
    preOrderTraverse(callback) {// esse método visita todos os nós da árvore usando um percurso pré-ordem (pre-order). 
        this.preOrderTraverseNode(this.root, callback);
    }

    preOrderTraverseNode(node, callback) {//Implementação
        if (node != null) {
            callback(node.key);//Diferentemente do pré-ordem, visitamos o nó raiz primeiro
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    //Percorrendo a árvore em um percurso pós-ordem (post-order). Visita o nó depois de visitar os seus descendentes.
    postOrderTraverse(callback) {// esse método visita todos os nós da árvore usando um percurso pós-ordem (post-order). 
        this.postOrderTraverseNode(this.root, callback);
    }

    postOrderTraverseNode(node, callback) {//Implementação
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    //Pesquisando valores mínimos e máximos

    min() {// esse método devolve a chave/valor mínimo da árvore. 
        return this.minNode(this.root);
    }

    minNode(node) {//Percorre a aresta esquerda da árvore
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }
    max() { //esse método devolve a chave/valor máximo da árvore.
        return this.maxNode(this.root);
    }

    maxNode(node) {//Percorre a aresta direita da árvore
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }

    //Pesquisando um valor específico
    search(key) {// esse método busca a chave na árvore e devolve true se ela existir, e false se o nó não existir. 
        return this.searchNode(this.root, key);
    }

    searchNode(node, key) {//Localiza uma chave específica na árvore ou em uma subárvore
        if (node == null) {
            return false;
        }
        if (key < node.key) {
            return this.searchNode(node.left, key);
        } else if (key > node.key) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    //Removendo um nó
    remove(key) {// esse método remove a chave da árvore.
        this.root = this.removeNode(this.root, key);
    }

    removeNode(node, key) {
        if (node == null) {
            return null;
        }
        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        } 
    }

}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7); 
tree.insert(15); 
tree.insert(5); 
tree.insert(3); 
tree.insert(9); 
tree.insert(8); 
tree.insert(10); 
tree.insert(13); 
tree.insert(12); 
tree.insert(14); 
tree.insert(20); 
tree.insert(18); 
tree.insert(25);
tree.insert(6);

console.log(tree);
console.log();

//Testando percurso em ordem (in-order)
const printNode = (value) => console.log(value);//criando uma função de callback
tree.inOrderTraverse(printNode);//3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
console.log();

//Testando percurso pré-ordem (pre-order)
tree.preOrderTraverse(printNode); //11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
console.log();

//Testando percurso pós-ordem (post-order)
tree.postOrderTraverse(printNode); //3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
console.log();

//Pesquisando valores mínimos e máximos
console.log('Valor mínimo da árvore: ' + tree.min().key);//Valor mínimo da árvore: 3
console.log('Valor máximo da árvore: ' + tree.max().key);//Valor máximo da árvore: 25
console.log();

//Pesquisando um valor específico
console.log(tree.search(1) ? 'Chave encontrada' : 'Chave não encontrada');//Chave não encontrada
console.log(tree.search(5) ? 'Chave encontrada' : 'Chave não encontrada');//Chave encontrada
console.log();

//removendo uma folha
console.log(tree.search(6) ? 'Chave encontrada' : 'Chave não encontrada');//Chave encontrada
tree.remove(6);
console.log(tree.search(6) ? 'Chave encontrada' : 'Chave não encontrada');//Chave não encontrada
tree.inOrderTraverse(printNode);//3 5 7 8 9 10 11 12 13 14 15 18 20 25
console.log()

//removendo um nó com um filho
console.log(tree.search(5) ? 'Chave encontrada' : 'Chave não encontrada');//Chave encontrada
tree.remove(5);
console.log(tree.search(5) ? 'Chave encontrada' : 'Chave não encontrada');//Chave não encontrada
tree.inOrderTraverse(printNode);//3 7 8 9 10 11 12 13 14 15 18 20 25
console.log(tree.search(3) ? 'Chave encontrada' : 'Chave não encontrada');//Chave encontrada
console.log();

//removendo um nó com dois filho
console.log(tree.search(9) ? 'Chave encontrada' : 'Chave não encontrada');//Chave encontrada
tree.remove(9);
console.log(tree.search(9) ? 'Chave encontrada' : 'Chave não encontrada');//Chave não encontrada
tree.inOrderTraverse(printNode);//3 7 8 10 11 12 13 14 15 18 20
console.log(tree.search(8) ? 'Chave encontrada' : 'Chave não encontrada');//Chave encontrada
console.log(tree.search(10) ? 'Chave encontrada' : 'Chave não encontrada');//Chave encontrada