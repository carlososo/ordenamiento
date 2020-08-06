'use strict'


function bubbleSort(array) {

    var aux = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array
}

const miArray = [10, 4, 40, 32, 67, 12, 43, 65, 1];

console.log(bubbleSort(miArray));