//numeral 1
let respuestaNumeral1 = prompt("¿eres bellisimo/a?")

if(respuestaNumeral1 === "si"){
    console.log("ciertamente");
}else if(respuestaNumeral1 === "no"){
    console.log("no te creo");
}else{
    console.log("respuesta no especificada");
};
//numeral 2
let = ingreseNumero = prompt('Digite un numero');

if(ingreseNumero % 2 === 0){
        alert(ingreseNumero + ' es divisible entre 2');
}else if(ingreseNumero % 2 !== 0){
        alert(ingreseNumero + ' No es divisible entre 2');
}else{
    alert('intentelo nuevamente');
};


//numeral 3
let = numeroIngresado = prompt('Ingrese un numero');

if(numeroIngresado % 2 === 0){
    alert('el numero ' + numeroIngresado + ' es par');
}else{
    alert('el numero ' + numeroIngresado + ' es impar');
};

//numeral 4
let numeroCliente = prompt('Ingrese su numero de cliente');

if(numeroCliente === '1000'){
    document.write('Ganaste Un Premio');
}else{
    document.write(numeroCliente + ' lo sentimos, sigue participando');
};

//numeral 5
let numero1 = prompt('Ingresar un numero');
let numero2 = prompt('Ingresar otro numero');

if(numero1 < numero2){
    document.write(numero1 + ' es el numero menor');
}else if(numero2 < numero1){
    document.write(numero2 + ' es el numero menor');
}else{
};

//numeral 6
let numeroUno = prompt('Ingresar primer numero');
let numeroDos = prompt('Ingresar segundo numero');
let numeroTres = prompt('Ingresar tercer numero');

if(numeroUno > numeroDos && numeroUno > numeroTres){
    document.write(numeroUno + ' es el numero mayor');
}else if(numeroDos > numeroUno && numeroDos > numeroTres){
    document.write(numeroDos + ' es el numero mayor');
}else{
    document.write(numeroTres + ' es el numero mayor')
};

//numeral 7
let diaDeSemana = prompt('Escriba un dia de la semana');


if(diaDeSemana === 'lunes'){
    document.write(diaDeSemana + ' empieza tu semana con toda la energia');
}else if(diaDeSemana === 'viernes'){
    document.write(diaDeSemana + ' finalizaste la semana y cumpliste tus metas');
}else if(diaDeSemana === 'sabado' || diaDeSemana === 'domingo'){
        document.write(diaDeSemana + ' disfruta tu merecido fin de semana');
}else{
    document.write(diaDeSemana + ' continua esforzandote y llegaras a la meta');
};

//numeral 8
let calificacion = prompt('Ingrese la Calificacion');

if(calificacion >= 11){
    alert('Error');
}else if(calificacion >= 1 && calificacion < 6){
    document.write('Reprobado');
}else if(calificacion > 5 && calificacion < 9){
    document.write('Regular');
}else if(calificacion == 9){
    document.write('Bien');
}else if(calificacion > 9 && calificacion < 11){
    document.write('Exelente');
}else{
    document.write('null');
};

//numeral 9
let topping = prompt('¿Digite el numero del Topping deseado? \n1: Sin Topping \n2: Oreo \n3: Kit Kat \n4: Brownie');
let helado = 50
let oreo = 10
let kitKat = 15
let brownie = 20
let moneda = 'COP'

if(topping == 1){
    document.write('En total seria ' + helado + moneda );
}else if(topping == 2){
    document.write(`En total seria ${helado + oreo + moneda}`);
}else if(topping == 3){
    document.write(`En total seria ${helado + kitKat + moneda}`);
}else if(topping == 4){
    document.write(`En total seria ${helado + brownie + moneda}`);
}else{
    alert('No tenemos ese topping, Lo sentimos');
    document.write('En total seria ' + helado + moneda );
};

//numeral 10
let programa = prompt('Seleccione el programa que desea: \n1: Course: $4999MNX \n2: Carrera: $3999MNX \n3: Master $2999MNX');
let beca = prompt('¿Cuenta con alguna de las siguientes becas? \n1: Beca FB 20% Dcto. \n2: Beca Google 15% Dcto. \n3: Beca Jesua 50% Dcto');
let course = 9998
let carrera = 23994
let master = 35998

if(programa == 1 ){
    if(beca == 1){
        document.write(`El programa tiene un costo de $ ${course - (course * 20 /100)} con el Dcto aplicado y su duracion es de 2 meses`);
    }else if(beca == 2){
        document.write(`El programa tiene un costo de $ ${course - (course * 15 /100)} con el Dcto aplicado y su duracion es de 2 meses`);
    }else if(beca == 3){
        document.write(`El programa tiene un costo de $ ${course - (course * 50 /100)} con el Dcto aplicado y su duracion es de 2 meses`);
    }else{
        alert('Datos incorrectos intente nuevamente');
    }
}else if(programa == 2){
    if(beca == 1){
        document.write(`El programa tiene un costo de $ ${carrera - (carrera * 20 /100)} con el Dcto aplicado y su duracion es de 6 meses`);
    }else if(beca == 2){
        document.write(`El programa tiene un costo de $ ${carrera - (carrera * 15 /100)} con el Dcto aplicado y su duracion es de 6 meses`);
    }else if(beca == 3){
        document.write(`El programa tiene un costo de $ ${carrera - (carrera * 50 /100)} con el Dcto aplicado y su duracion es de 6 meses`);
    }else{
        alert('Datos incorrectos intente nuevamente');
    }
}else if(programa == 3){
    if(beca == 1){
        document.write(`El programa tiene un costo de $ ${master - (master * 20 /100)} con el Dcto aplicado y su duracion es de 6 meses`);
    }else if(beca == 2){
        document.write(`El programa tiene un costo de $ ${master - (master * 15 /100)} con el Dcto aplicado y su duracion es de 6 meses`);
    }else if(beca == 3){
        document.write(`El programa tiene un costo de $ ${master - (master * 50 /100)} con el Dcto aplicado y su duracion es de 6 meses`);
    }else{
        alert('Datos incorrectos intente nuevamente');
    }
}else{
    alert('Datos incorrectos intente nuevamente');
};

//numeral 11
let vehiculo = prompt('Indique su Vehiculo');
let kmt = prompt('¿cuantos kmt recorrio?');
let coche = 0.20;
let moto = 0.10;
let bus = 0.5;

if(vehiculo === 'coche'){
    if(kmt <= 100){
        document.write(`El total a pagar es ${(kmt * coche)+ 5} USD`);
    }else if(kmt > 100){
        document.write(`El total a pagar es ${(kmt * coche) + 10} USD`);
    }
}else if(vehiculo === 'moto'){
    if(kmt <= 100){
        document.write(`El total a pagar es ${(kmt * moto) + 5} USD`);
    }else if(kmt > 100){
        document.write(`El total a pagar es ${(kmt * moto) + 10} USD`);
    }
}else if(vehiculo === 'bus'){
    if(kmt <= 100){
        document.write(`El total a pagar es ${(kmt * bus) + 5} USD`);
    }else if(kmt > 100){
        document.write(`El total a pagar es ${(kmt * bus) + 10} USD`);
    }
}else{
    alert('datos incorrectos, vuelva a intentarlo')
};