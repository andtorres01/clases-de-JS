// ejercicio 1 
// const ingresarArreglo = [];
// let aleatorio = Math.random()

// function random(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// ingresarArreglo = [aleatorio]
// document.write(ingresarArreglo)

// //ejercicio 2
const palabras = prompt('Ingrese varias palabras separadas por una ,')
const arregloPalabras = palabras.split(",");
console.log(arregloPalabras);

//ejercicio 3
const arregloNumeros = [10, 40, 30, 20, 15, 5];
arregloNumeros.sort(function(a, b){return a - b});
document.write(arregloNumeros);
document.write(` el numero mayor es  ${Math.max(...arregloNumeros)}`);
document.write(` y el numero menor es  ${Math.min(...arregloNumeros)}`);