//Visão geral do JavaScript

console.log('Hello world!');
console.log('Fundamentos de computação e algoritmos!');

{
    let f_name = 'Vanderlei';//let = dentro de um escopo
    const ZIP = 500067; //const = dentro de um contexto
    var age = 48; //var = global
}

// console.log(f_name); // ReferenceError: f_name is not defined
// console.log(ZIP); // ReferenceError: ZIP is not defined
console.log(age); // Roda normalmente
console.log();

//Comandos de repetição
for (let i = 0; i < 9; i++) {
    console.log(i);
}

console.log();

var n = 0;
var x = 0;
while (n <3) {
    n++;
    x += n;
    console.log(n);
    console.log();
    console.log(x);
}

console.log();

var result = '';
var i = 0;
do{
    i += 1;
    result += i + ' ';
}
while (i > 0 && i < 5);
console.log(result);

//Comandos de seleção
var idade = 14;
var resultadoCasoVerdadeiro = 'Pode dirigir';
var resultadoCasoFalso = 'Não pode dirigir';
const temCarteira = idade >= 23 ? true: false;

if (idade >= 18) {
    console.log(resultadoCasoVerdadeiro);
} else {
    console.log(resultadoCasoFalso);
}

console.log();

if (idade >= 18 && temCarteira) {
    console.log(resultadoCasoVerdadeiro);
} else if (!temCarteira) {
    console.log(resultadoCasoFalso);
} else {
    console.log('Nenhuma das alternativas anteriores');
}

console.log();

var foo = 'setembro'; 
switch (foo) {
    case 'janeiro':
        console.log('Verão');
        break;
    case 'abril':
        console.log('Outono');
        break;
    case 'julho':
        console.log('Inverno');
        break;
    default:
        console.log('Primavera');
        break;
}

//Funções
//Função que verifica se um número é par ou ímpar

function avaliaParImpar(params) {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i + ": é um número PAR");
        } else {
            console.log(i + ": é um número IMPAR");
        }
    }
}

avaliaParImpar(10);

console.log();

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

console.log();

console.table([{a: 1, b: 0, c: 0}, {a: 0, b: 1, c: 0}, {a: 0, b: 0, c: 1}]);