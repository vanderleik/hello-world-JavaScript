// import { Compare, defaultCompare }

//Algoritmos

// Divisão e conquista
    // Quebra o problema em partes menores e independentes (e.g. busca binária)
    // Combina os resultados
// Programação dinâmica
    // Quebra o problema em partes menores mas independentes (e.g. fibonacci)
// Gulosos (greedy)
    // Considera os melhoramentos locais (não local) para definir caminhos
// Algoritmo de Backtracking
    // Considera rever ponto ótimo no passado caso os melhoramento atuais não sejam bons

// Algoritmos de ordenação

// Bubble sort (ordenação por flutuação)
// Compara dois elementos por vez, passando por todo vetor n2 vezes
//É um dos piores algoritmos de ordenação em termos de tempo de execução

function bubbleSort(array) {
    var i, j;
    var len = array.length;
    var isSwapped = false;
    
    for(i = 0; i < len; i++) {        
        isSwapped = false;        
        for (j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
            var temp = array[j]
            array[j] = array[j + 1];
            array[j + 1] = temp;
            isSwapped = true;
            }
        }
        
        if(!isSwapped){
        break;
        }
    }   

    console.log('Array ordenado : ' + array);
    }

    //implementação

    var array = [243, 45, 23, 356, 3, 5346, 35, 5];
    console.log('Array não ordenado: ' + array);//Array não ordenado: 243,45,23,356,3,5346,35,5
    // calling the bubbleSort Function
    bubbleSort(array);//Array ordenado : 3,5,23,35,45,243,356,5346
    console.log();

// Selection sort
// Restringe o número de trocas realizadas ao longo da ordenação
// Comparação in-place

function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function selectionSort(arr, n) {
    var i, j, min_idx;
    for (i = 0; i < n - 1; i++) {
        //Encontra o menor elemento do array não ordenado
        min_idx = i;
        for (j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        //Troca o menor elemento encontrado pelo primeiro elemento
        swap(arr, min_idx, i);
    }
}

function printArray(arr) {
    console.log('Array ordenado : ' + arr);
}


//implementação
var arr = [64, 25, 12, 22, 11];
var n = arr.length;
console.log('Array não ordenado: ' + arr);//Array não ordenado: 64,25,12,22,11
selectionSort(arr, n);
printArray(arr);//Array ordenado : 11,12,22,25,64
console.log();

// Insertion Sort
// Abre espaço para inserção, restringindo a área de comparação
// Ideal para pequena quantidade de dados

function insertionSort(arr, n) {
    let i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i -1;

        // Move os elementos do arr[0..i-1], que são maiores que a chave, para uma posição à frente da sua posição atual
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
   
//Implementação
array = [12, 11, 13, 5, 6 ]; 
n = array.length;
console.log('Array não ordenado: ' + array); //Array não ordenado: 12,11,13,5,6
   
insertionSort(array, n); 
console.log('Array ordenado: ' + array); //Array ordenado: 5,6,11,12,13

// Merge Sort
// Explore recursividade

// Quick sort
// Define um pivô
// Quebra o problema no pivô
// Redefine um pivô para cada segmento
// Ao final retorna ordenando

//Buscar a informação
// Busca linear/sequencial

// Busca binária

