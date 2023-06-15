//ejercicio 1
let numero = prompt('Ingrese un numero');
let contador = 0;

while(contador <= numero){
    if(contador > 0 && contador % 5 == 0){
        console.log('el numero '+ contador + ' es multiplo de 5');
    }
    contador++
};

//ejercicio 2
let numIngresado = prompt('Ingrese un numero del 1 al 50');
let numIngresado2 = prompt('Ingrese un numero del 1 al 50');
let index = 0;

while(index <= 50){
    console.log(index);
    index++;
    if(index == numIngresado){
        console.log(index + ' loteria');
    }else if(index == numIngresado2){
        console.log(index + ' loteria');
    }
};

//ejercicio 3
let item = [];

while(true){
    let item2 = parseInt(prompt('Ingrese numeros - si no quieres ingresar mas numeros escriba 0'));
    if(item2 === 0){
        break;
    }else if(!isNaN(item2)){
        item.push(item2);
    }else{
        console.log('indefinido');
    }
    console.log(item);
};

//ejercicio 4
const palabra = [];
let parada = parseInt(prompt('escriba una letra o palabra'));

while(parada !== ""){
    if(isNaN(parseInt(parada))){
        palabra.push(parada);
    }else{
        alert('debe ingresar solo palabras o letras');
    }
    parada=prompt('ingresa palabras o letras y para finalizar dejar vacio');
}
console.log(palabra);

//ejercicio 5
let dia = prompt ('ingrese un dia de la semana') 

while (dia !== 'domingo'){
    dia=prompt ("Ingrese un día de la semana")
    if (dia === 'lunes') {
        alert ('iniciando semana a darle');
    } else if (dia === 'martes') {
        alert ('vamos avanzando animo');
    } else if (dia === "miercoles") {
        alert ('ya vamos por la mitad');
    } else if (dia === 'jueves') {
        alert ('ya es juernes');
    } else if (dia === 'viernes') {
        alert ('a disfrutar el fin de semana');
    } else if (dia === 'sabado'){
        alert ('a donde es la fiesta');
    } else {
        alert ('ve a descansar');
    }
}
