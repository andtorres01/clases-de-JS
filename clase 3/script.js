//while y do while

let contador=0

while (contador <=5) {
    console.log ("el contador es: " + contador)
    contador++
}

console.log("fin del bucle")

//ciclo for

const frutas = ["uva", "platano", "manzana"]
for(let i = 0; i <= 5; i++) {
    //codigo a ejecutar en cada iteracion
}

console.log("tienes que comprar " + frutas [i])



//tipos de datos primitivos: strings, null, undefined, number, symbol
//objetos, arrays

// objetos -> tiene propiedades y valores

const casa0 = {
    puertas: 5,
    habitaciones: 4,
    propietario: "carlos",
    apagadores: 16,
}
console.log(casa0.puertas)

const casa1 = {
    puertas: 7,
    habitaciones: 8,
    propietario: "juan",
    apagadores: 6,
}

const casa2 = {
    puertas: 2,
    habitaciones: 6,
    propietario: "andres",
    apagadores: 36,
}

//arrays 

const colonia = [casa0, casa1, casa2]

//como acceder al contenido de un arreglo? atravez del indice

console.log(colonia[2].propietario)
