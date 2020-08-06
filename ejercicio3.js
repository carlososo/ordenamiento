/* 3. Crear una clase Alumno con los siguientes datos:
                Nombre y calificaciones(arreglo de 5 números) y tiene un método promedio
               Crear otra clase llamada Salon que tenga un método que ordene por promedio de alumno de mayor a menor promedio */

class Alumno {
    constructor(nombre, calificaciones) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }

    promedio() {
        var promedio = 0;
        for (let i = 0; i < this.calificaciones.length; i++) {
            promedio = promedio + this.calificaciones[i]
        }
        return promedio = promedio / this.calificaciones.length;
    }
}

class Salon {
    constructor() {
        this.alumnos = [];
    }
    agregarEstudiante(alumno) {
        this.alumnos.push(alumno);
        this.tamanio++;
    }
    ordenarPromedio(promedios) {
        var aux = 0;
        for (let i = 0; i < promedios.length; i++) {
            for (let j = 0; j < promedios.length; j++) {
                if (promedios[j] > promedios[j + 1]) {
                    aux = promedios[j];
                    promedios[j] = promedios[j + 1];
                    promedios[j + 1] = aux;
                }
            }
        }
        return promedios;
    }
}

var alumno1 = new Alumno("Carlos", [10, 10, 10, 10, 8]);
var alumno2 = new Alumno("Sandy", [10, 10, 10, 10, 10]);
var alumno3 = new Alumno("Felipe", [6, 7, 8, 10, 8]);
var alumno4 = new Alumno("Karina", [10, 7, 6, 9, 8]);

var salon1 = new Salon();
salon1.agregarEstudiante(alumno1.promedio());
salon1.agregarEstudiante(alumno2.promedio());
salon1.agregarEstudiante(alumno3.promedio());
salon1.agregarEstudiante(alumno4.promedio());

console.log(salon1.ordenarPromedio(salon1.alumnos));