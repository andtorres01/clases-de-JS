//numeral 1
for(let index = 0; index <= 50; index++){
    if(index % 2 === 0){
    }else{
        console.log(index);
    }
};

//numeral 2
let pokemons = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran-f', 'nidorina', 'nidoqueen', 'nidoran-m', 'nidorino', 'nidoking', 'clefairy', 'clefable','vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck', 'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel',  'tentacool', 'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite', 'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel',  'dewgong', 'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb'];
let numeroUsuario = prompt('ingrese un numero');

function pokemonsMultiplo (numero){
    for(let index = 1; index <= numero; index++){
        if(index % 5 === 0){
        console.log(pokemons[index-1])
        }
    }
}
pokemonsMultiplo(Number(numeroUsuario))

//numeral 3
const arreglo = [4, 'dos', 8, 'tres', 5, 9, 1, 'cero'];

for(let index = 0; index <= arreglo.length; index++){
    if(typeof arreglo[index] === 'number'){
        console.log(arreglo[index] + ' es un numero');
    }
};
