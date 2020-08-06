function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        var pos = i;
        //condicion tiene que ser mayor al de la derecha o izquierda vacia
        while (pos >= 0 && array[pos] < array[pos - 1]) {
            //Hacer el switch de posiciones
            var aux = array[pos - 1];
            array[pos - 1] = array[pos];
            array[pos] = aux;
            pos = pos - 1;
        }
    }
    return array
}

const miArray = [10, 4, 40, 32, 67, 12, 43, 65, 1];

// console.log(insertionSort(miArray));


function insertionSortB(array) {
    for (let i = 0; i < array.length; i++) {
        var pos = i;
        //antes de empezar a desplazar, guardamos la posicion en la que estamos intentando ordenar
        var valor = array[i];
        while (pos >= 0 && valor < array[pos - 1]) {
            //en vez de hacer el intercambio solo desplazamos y buscamos el sitio donde debería de ir
            array[pos] = array[pos - 1];
            pos = pos - 1;
        }
        //como ya sabemos en que posicion debería de ir solo ponemos ahí en vez de ir paso por paso
        array[pos] = valor;
    }
    return array;
}

console.log(insertionSortB(miArray));