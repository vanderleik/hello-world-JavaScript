//Arrays

let managers = [];
console.log(managers);

managers = ['Creed Bratton', 'Deangelo Vickers', 'Robert California', 
            'Nellie Bertram', 'Jim Halpert', 'Andy Bernard', 'Michael Scott',
            'Dwight Schrute'];

console.log(managers);
console.log();
//===============================================

let managersActors = new Array('Creed Bratton', 'Will Ferrell', 'James Spader', 'Catherine Tate', 
                                'John Krasinski', 'Ed Helms', 'Steve Carell', 'Rainn Wilson');
console.log(managersActors); 
console.log();

//Sequência de Fibonacci
let fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for(let i = 3; i < 10; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i - 2];
}

for(let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}
console.log();

//Métodos padrão para manipulação de array

console.log('número de elementos na lista managersActors: ' + managersActors.length);
//pop: remove o último elemento da lista
managersActors.pop();
console.log('número de elementos na lista managersActors: ' + managersActors.length);
//push: Adiciona elemento na última posição do array
managersActors.push('Rainn Wilson');
console.log('número de elementos na lista managersActors: ' + managersActors.length);
//shift: remove o primeiro elemento da lista
managersActors.shift();
console.log('número de elementos na lista managersActors: ' + managersActors.length);
//unshift: adiciona elemento na primeira posição da lista
managersActors.unshift('Creed Bratton');
console.log('número de elementos na lista managersActors: ' + managersActors.length);
//slice: retorna uma cópia do array
let managersActors2 = managersActors.slice();
console.log(managersActors2);
//splice: (0,3) apago todos os dados da posição 0 até a posição 3, exceto a informação da posição 3
managersActors2.splice(0,3);
console.log(managersActors2);
//at(pos) ou [pos]: retorna elemento de posição especificada por pos
console.log(managersActors[0]);
console.log(managersActors[1]);
console.log(managersActors[2]);
console.log(managersActors[3]);
console.log();

//Array tridimensional/matriz
var matriz = [];
matriz[0] = ['a11','a12','a13'];
matriz[1] = ['a21','a22','a23'];
matriz[2] = ['a31','a32','a33'];
console.table(matriz);
console.log(matriz[1][2]);//a23
console.log();

//Trabalhando com Pilhas

class Pilha{
    constructor(){
        this.items = [];
    }

    push(elemento) {
        this.items.push(elemento);
    }

    pop() {
        if (this.items.length == 0 ) {
            return 'Não tem elementos para excluir';
        } else {
            this.items.pop();
        }
    }

    splice(){
        this.items.splice(start, deleteCount);
    }

    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
        return str;
      }
}

var pilha = new Pilha();
pilha.push('Primeiro elemento da pilha');
pilha.push('Segundo elemento da pilha');
pilha.push('Terceiro elemento da pilha');
console.log(pilha);

//Eliminando o Terceiro elemento da pilha
pilha.pop();
console.log(pilha);
pilha.push('Adicionado terceiro elemento extra');
pilha.push('Adicionado quarto elemento extra');
console.log(pilha);
console.log();

console.log('=============Usando o splice==============')
Pilha.prototype.splice = function(start, deleteCount) {
    var removed = [];
    var len = this.items.length;

    start = start || 0;
    deleteCount = deleteCount || len;
    
    var end = start + deleteCount;
    end = end > len ? len : end;

    for ( var i = start; i < end; i++) {
        removed.push(this.items[i]);
    }

    var itemsAfterRemoved = [];
    for (var i = end; i < len; i++) {
        itemsAfterRemoved.push(this.items[i]);
    }
    
    this.items.length = start;

    for (var i = 2; i < arguments.length; i++) {
        this.items.push(arguments[i]);
    }

    for (var i = 0; i < itemsAfterRemoved; i++) {
        this.items.push(itemsAfterRemoved[i]);
    }
    
    return removed;
}

var novaPilha = new Pilha();
novaPilha.push(1);
novaPilha.push(2);
novaPilha.push(3);
console.log(novaPilha.printStack());

novaPilha.splice(1,1);
console.log(novaPilha.printStack());
console.log();

//Trabalhando com Filas
class Fila {
    constructor() {
        this.items = [];
    }

    enqueue(elemento) {//Adicionando um elemento à fila
        this.items.push(elemento);
    }

    dequeue() {//Eliminando o último elemento da fila
        return this.items.shift();
    }

    peek() {//Visualiza o último elemento de um array
        if (this.items.length === 0) {
            return undefined;
        } else {
            return this.items[0];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {//limpa o console
        this.items = [];
    }

    size() {
        return this.items.length;
    }
}

var novaFila = new Fila();
novaFila.enqueue('Michael Scott');
novaFila.enqueue('Dwight Schrute');
novaFila.enqueue('Jim Halpert');
console.log(novaFila);

console.log(novaFila.peek());//Verifica quem está no topo da fila
console.log(novaFila.size());//verifica o tamanho da fila
console.log(novaFila.isEmpty());//Verifica se a fila está vazia
novaFila.dequeue();//Remove o item que está no topo da fila
console.log(novaFila);
novaFila.clear();//Limpa a fila completamente
console.log(novaFila);
console.log();

//Conjuntos (set)

var meuSet = new Set();
meuSet.add('Creed Bratton');
meuSet.add('Deangelo Vickers');
meuSet.add('Robert California');
console.log(meuSet);
meuSet.add('Robert California');//Valor duplicado. Não deve permitir adicionar
console.log(meuSet);

console.log(meuSet.has('Robert California'));
console.log(meuSet.has('Jim Halpert'));
console.log(meuSet.size);
meuSet.add('Nellie Bertram');
console.log(meuSet.size);
meuSet.delete('Nellie Bertram');
console.log(meuSet.size);

//Iterando sobre o Set
for (let item of meuSet) console.log(item);
console.log();
for (let item of meuSet.keys()) console.log(item);
console.log();
var arrayDuplicado = ['Nellie Bertram', 'Jim Halpert', 'Andy Bernard',
                        'Michael Scott', 'Dwight Schrute', 'Dwight Schrute'];
console.log(arrayDuplicado);
//Removendo duplicados
console.log([...new Set(arrayDuplicado)]);