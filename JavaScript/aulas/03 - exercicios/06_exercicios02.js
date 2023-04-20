//1) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 22, 34, 50];

   
    for (let i = 0; i <= numeros.length; i++) {  
        const numero = numeros[i];
        if (numero % 2 === 0) {
        console.log(numero);}
    }
