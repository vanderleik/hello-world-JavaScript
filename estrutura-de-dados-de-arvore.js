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
    //TO-DO List
    // search(key): esse método busca a chave na árvore e devolve true se ela existir, e false se o nó não existir. 
    // inOrderTraverse(): esse método visita todos os nós da árvore usando um percurso em-ordem (in-order).
    // preOrderTraverse(): esse método visita todos os nós da árvore usando um percurso pré-ordem (pre-order). 
    // postOrderTraverse(): esse método visita todos os nós da árvore usando um percurso pós-ordem (post-order). 
    // min(): esse método devolve a chave/valor mínimo da árvore. • max(): esse método devolve a chave/valor máximo da árvore.
    // remove(key): esse método remove a chave da árvore.

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
