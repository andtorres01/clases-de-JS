
const alumnosMali = ['jineth', 'steven', 'sharon', 'sebastian', 'david',];

const alumnoSpan = document.querySelector('#alumno');

let index = 0;

setInterval(saludar,1500);

function saludar(){
    alumnoSpan.innerHTML = alumnosMali[index % alumnosMali.length]
    index++
};

// function saludar(){
//     alert('hola mundo')
// };

//getElements 
const parrafo1 = document.getElementById('parrafo1');
console.log(parrafo1)

const parrafo = document.getElementsByTagName('p');
console.log(parrafo)

const parrafoClass = document.getElementsByClassName('long') 
console.log(parrafoClass)

//querySelector
const parrafo2 = document.querySelector('#parrafo1')
console.log(parrafo2)

const parrafoSolo = document.querySelector('p')
console.log(parrafoSolo)

const parrafoClase = document.querySelector('.long') 
console.log(parrafoClase)

//querySelectorAll
const parrafo3 = document.querySelectorAll('#parrafo3')
console.log(parrafo3)

const parrafoSolo1 = document.querySelectorAll('p')
console.log(parrafoSolo1)

const parrafoClase1 = document.querySelectorAll('.long') 
console.log(parrafoClase1)





