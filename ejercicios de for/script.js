//numeral 3

const arreglo = [4, 'dos', 8, 'tres', 5, 9, 1, 'cero'];

for(let index = 0; index <= arreglo.length; index++);{
    if(typeof arreglo[index] === 'number'){
        console.log(arreglo[index] + ' es un numero');
    }
}
