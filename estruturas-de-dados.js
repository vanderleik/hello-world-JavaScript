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
matriz[0] = [1,0,0];
matriz[1] = [0,1,0];
matriz[2] = [0,0,1];
console.table(matriz);