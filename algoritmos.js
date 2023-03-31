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
console.log();

// Merge Sort
// Explore recursividade
// Dividir a matriz em duas metades, classificar cada metade e, em seguida, mesclar as metades classificadas novamente.
// Esse processo é repetido até que todo o array esteja classificado.

function merge(arr, l, m, r) {
    var n1 = m -l + 1;
    var n2 = r -m;

    //Criando arrays temporários
    var L = new Array(n1);
    var R = new Array(n2);

    //Copiando os dados para os arrays temporários
    for (var i = 0; i < n1; i++) {
        L[i] = arr[l + i];
    }
    for (var j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j];
    }

    //Iniciando o processo de merge

    var i = 0;
    var j = 0;
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++
    }

    // Copiando o restante dos elementos de L[], se existir algum
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copiando o restante dos elementos de R[], se existir algum
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, l, r) {// l é o índice da esquerda, r o índice da direita do sub-array arr que será ordenado
    if (l >= r) {
        return;//Retorna de forma recursiva
    }
    var m = l + parseInt((r - l) / 2);    
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);    
}

var arr = [ 12, 11, 13, 5, 6, 7 ];
var arr_size = arr.length;

console.log('Array não ordenado: ' + arr); //Array não ordenado: 12,11,13,5,6,7
   
mergeSort(arr, 0, arr_size - 1); 
console.log('Array ordenado: ' + arr); //Array ordenado: 5,6,7,11,12,13
console.log();

// Quick sort
// Define um pivô
// Quebra o problema no pivô
// Redefine um pivô para cada segmento
// Ao final retorna ordenando

function quicksort(array) {
	if (array.length <= 1) {
		return array;
	} else {
		var pivot = array[0];
		var left = [];
		var right = [];
		for (var i = 1; i < array.length; i++) {
			if (array[i] < pivot) {
				left.push(array[i]);
			} else {
				right.push(array[i]);
			}
		}
		return quicksort(left).concat(pivot, quicksort(right));
	}
}
var array = [10, 5, 2, 3, 7, 6, 8, 9, 1, 4];
console.log('Array não ordenado: ' + array); //Array não ordenado: 10,5,2,3,7,6,8,9,1,4

var sortedArray = quicksort(array);
console.log('Array ordenado: ' + sortedArray); //Array ordenado: 1,2,3,4,5,6,7,8,9,10
console.log();

//Buscar a informação
//Busca linear/sequencial
//Um algoritmo de busca sequencial que começa em uma extremidade e percorre cada elemento de uma lista até que
// o elemento desejado seja encontrado, caso contrário, a pesquisa continua até o final do conjunto de dados.

function search(arr, n, x) {
    let i;
    for (i = 0; i < n; i++){
        if (arr[i] == x) {
            return i;
        }
    }
    return -1;	
}

	let newArray = [ 2, 3, 4, 10, 40 ];
	let z = 10;
	let m = arr.length;

	// Function call
	let result = search(newArray, m, z);
	// console.log(result == 1 ? 'Chave encontrada' : 'Chave não encontrada');
    (result == -1)
        ? console.log("O elemento não está presente no array")
        : console.log("O elemento " + z + " está presente no array no índice " + result);
console.log();

// Busca binária
// Algoritmo de pesquisa usado em uma matriz classificada, dividindo repetidamente o intervalo de pesquisa pela metade. 
// A ideia da busca binária é usar a informação que o array está ordenado e reduzir a complexidade de tempo para O(Log n).

function binarySearch(arr, l, r, x){
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		// Se o elemento estiver presente no meio
		if (arr[mid] == x)
			return mid;

		// Se o elemento é menor que o médio, então só pode estar presente no subarray esquerdo
		if (arr[mid] > x)
			return binarySearch(arr, l, mid - 1, x);

		// Caso contrário, só pode estar presente no subarray direito 
		return binarySearch(arr, mid + 1, r, x);
	}

	// Quando o elemento não está presente no array
	return -1;
}

let arr2 = [ 2, 3, 4, 10, 40 ];
let x2 = 10;
let n2 = arr2.length
let result2 = binarySearch(arr2, 0, n2 - 1, x2);
(result2 == - 1) ? console.log("O elemento não está presente no array")
				: console.log("O elemento " + x2 + " está presente no array no índice " + result2);
