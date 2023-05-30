//and

if("12345" === prompt(`pon tu contraseña`) && 18 <= parseInt(prompt("dame tu edad"))) {
    alert("entraste");
} else{
    console.error("ALARMA ENCENDIDA");
    document.write(`<h1 style="color:red;">ALARMA</h1>`)
}

//or

if(20 <= prompt(`cuanto traes`) || 18 <= parseInt(prompt("dame tu edad"))) {
    alert("entraste");
} else{
    console.error("ALARMA ENCENDIDA");
    document.write(`<h1 style="color:red;">ALARMA</h1>`)
}

//else if

let contraseniaIngresada = prompt ('pon tu contraseña');

if ("12345" === contraseniaIngresada){
    alert("Bienvenido Juan");
} else if ("abcde" === contraseniaIngresada){
    alert("Bienvenido Pedro");
} else {
    console.error("ALARMA ENCENDIDA");
    document.write(`<h1 style="color:red;">ALARMA</h1>`)
}

//ejercicio 

let respuestaEjercicio1 = prompt("¿eres inteligente?");

if(respuestaEjercicio1 = "si"){
    console.log("ciertamente");
} else if(respuestaEjercicio1 = "no"){
    console.log("no te creo");
} else{
    console.log("respuesta no especificada");
}