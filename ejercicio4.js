/* 4. Crear una funcion que ordene palabras de menor numero de letras a mayor
               Ej Entrada [”adios”,”hola”,”maximo”,”uno”,”despedida”] salida -> [“”uno,“hola”,”adios”,”maximo”,”despedida”] */

function sort(array) {
    for (let i = 0; i < array.length; i++) {
        var wordLength = array[i].length;
        var pos = i;
        while (pos >= 1 && wordLength <= array[pos - 1].length) {
            var aux = array[pos - 1];
            array[pos - 1] = array[pos];
            array[pos] = aux;
            pos = pos - 1;
        }
    }
    return array
}

const array = ["mesopotamia", "adios", "hola", "maximo", "uno", "despedida"]

console.log(sort(array));