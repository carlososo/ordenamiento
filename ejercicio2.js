/* 2- Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/
  Ej. Entrada ---> [‘b’,’h’,’w’,’e’,’a’] Salida ----> [‘a’,’b’,’e’,’h’,’w’] */

function busqueda(arreglo) {

    for (let i = 0; i < arreglo.length; i++) {
        var pos = i;
        while (pos >= 0 && arreglo[pos] < arreglo[pos - 1]) {
            var aux = arreglo[pos - 1];
            arreglo[pos - 1] = arreglo[pos];
            arreglo[pos] = aux;
            pos = pos - 1
        }
    }
    return arreglo;

}

const arreglo = ['b', 'h', 'w', 'e', 'a'];


console.log(busqueda(arreglo));