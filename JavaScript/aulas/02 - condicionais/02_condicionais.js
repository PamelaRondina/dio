
/* 
Número Par ou Ímpar
const numero = 3;
const isNumero = (numero % 2) === 0;

if (isNumero) {
    console.log('Par')
} else {
    console.log('Ímpar')
} 
*/

const numero = 5;
const isNumeroDivisorPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é inválido')    
} else if (isNumeroDivisorPor5) {
    console.log('Sim')
} else {
    console.log('Não')
}