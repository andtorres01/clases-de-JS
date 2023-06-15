console.log(document); //referencia del DOM
// DOM: modelo de objeto de documento
// modelo ->contener toda la estructura estandar de nuestros documentos.
// objeto -> elemento de js al cual podemos modificar e iterar por propiedades y metodos (funciones que pertenencen a alguna entidad) del objeto.
// documento -> documento de HTML.

//es una entidad que nos permite organizar en forma de codigo de js el documento de HTML.

//empezar a trabajar con los elementos de mi HTML

//CREAR
//LEER
//ACTUALIZAR
//BORRAR

//leer
const header = document.getElementById('header');

//crear un elemento en html
const parrafo = document.createElement('p',);
parrafo.innerText = 'este es un parrafo';
console.log(parrafo);
//innerText -> hace referencia al html en el elemento (etiqueta)

//actualizar el body agregando un nuevo elemento
document.body.appendChild(parrafo);

header.appendChild(parrafo)

//borrar 
header.removeChild(parrafo)