// arreglos

const alumnosMaliVacio = []; //crear un arreglo vacio

const alumnosMali = ['Anderson', 'Andrea', 'Andres'];
console.log(alumnosMali);

alumnosMali.push('Stiven');
console.log(alumnosMali);

//alumnosMali.pop(); -> quita el ultimo elemento del arreglo
//console.log(alumnosMali);

// arreglo va a ser una estructura que permite trabajar 
//con ella por medio de acciones ya pre-echaspara poder cambiarlo.
//a estas acciones pertenecientes al arreglo les llamaremos metodos.

console.log(alumnosMali[1]);

alumnosMali[1] = 'Jeffry';
console.log(alumnosMali);

//objetos tienen propiedades que son valores y se encuentra 
//ligado al objeto.

//slice quita parte de la cadena de un array

const alumnosSeb = alumnosMali.slice(1,3);
console.log(alumnosSeb);

//split 
const txt = "jeffrey,anderson,juan,pedro,pablo,andrea"
const arregloEstudiantes = txt.split(",");
console.log(arregloEstudiantes);

//splice elimina elementos dentro del arreglo primero especifica
//inicio y despues la cantidad de elementos a eliminar.

arregloEstudiantes.splice(2,1,'Angel');
console.log(arregloEstudiantes);

//sort ordena arreglo de la A a la Z por defecto

arregloEstudiantes.sort ();
console.log(arregloEstudiantes);

//concat 


//estructura de control de repeticion de 

//ciclo while mientras se cumpla una condicion realizar
//ciertas acciones

// while (condicion){
//    codigo a ejecutar
// }

let index = 0;
while (index <= 5){
    console.log(`te toque la puerta ${index} veces`);
    index ++ // index= index + 1;
};

//for

for (let index1 = 0; index1 <= 10; index1++) {
    console.log(index1);
};

const alumnosMali2 = ['Anderson', 'Andrea', 'Andres', 'Angel', 'Paola'];

for (let index2 = 0; index2 < alumnosMali2.length; index2++) {
    console.log(index2, alumnosMali2[index2]);
};

for (let index2 = alumnosMali2.length -1; index2 >= 0; index2--){
    console.log(index2, alumnosMali2[index2]);
};