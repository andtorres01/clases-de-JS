//ejercicio 1 

const arregloVacio = [];
const arreglo = Array.from ({length:10}, () => Math.floor(Math.random() * (100 - 0 + 1)));
console.log(arreglo);


// // //ejercicio 2
const palabras = prompt('Ingrese varias palabras separadas por una ,')
const arregloPalabras = palabras.split(",");
console.log(arregloPalabras);

// //ejercicio 3
const arregloNumeros = [10, 40, 30, 20, 15, 5];
arregloNumeros.sort(function(a, b){return a - b});
document.write(arregloNumeros);
document.write(` el numero mayor es  ${Math.max(...arregloNumeros)}`);
document.write(` y el numero menor es  ${Math.min(...arregloNumeros)}`);