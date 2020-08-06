/* 5. Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0
Entrada -> [[7,3],[2,2],[1,0],[4,3]]  Salida ---> [[1,0],[2,2],[4,3],[7,3]] */

function sortCoordinates(array) {

    for (let i = 0; i < array.length; i++) {
        var pos = i;
        var distancia = (array[pos][0] + array[pos][1]);
        while (pos >= 1 && distancia < (array[pos - 1][0] + array[pos - 1][1])) {
            var aux = array[pos - 1];
            array[pos - 1] = array[pos];
            array[pos] = aux;
            pos = pos - 1;
        }
    }
    return array;
}




const array = [
    [7, 3],
    [2, 2],
    [1, 0],
    [4, 3]
];

var display = sortCoordinates(array);
console.log(display);