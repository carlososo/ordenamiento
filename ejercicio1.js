/* Crea una función que ordene de forma descendente  un arreglo de numeros
               Ej. Entrada --> [9,3,1,6,5,88,-1,2,7]  Salida → [88,9,7,6,5,3,1,-1] */

function busqueda(array) {
    var aux = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array

}


const arreglo = [9, 3, 1, 6, 5, 88, -1, 2, 7];

console.log(busqueda(arreglo));