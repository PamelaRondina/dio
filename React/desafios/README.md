# Desafio de Código - Formação React Developer

## 1 / 3 - Visita na Feira

Você está na feira com a sua sacola e parou em uma banca. O feirante lhe entregou pimentões amarelos e vermelhos. Agora iremos somar os pimetões amarelos e vermelhos para descobrir o total de pimentões na sacola.  Você receberá 2 inteiros que devem ser lidos e armazenados nas variáveis A (pimentões amarelos) e B (pimentões vermelhos). Faça a soma de A e B atribuindo o seu resultado na variável X (total de pimentões). Apresente X como descrito na mensagem de exemplo abaixo. Não apresente outra mensagem além da mensagem especificada.

**Entrada**
A entrada contém 2 valores inteiros, separados por um espaço.

**Saída**
Imprimir a mensagem "X = " (sendo a letra X maiúscula) seguido pelo valor da variável X e pelo final de linha. Assegure que exista um espaço antes e depois do sinal de igualdade.

Exemplos de Entrada | Exemplos de Saída
-|-
11  e  7 | X = 18
-11 e  6 | X = -5
11 e -2 | X = 9

Neste, apenas um desafio ficava correto:
~~~js
//TODO: Complete os espaços em branco
let valores = "11,7";
let line = valores.split(",");
//let array = split;
let pimentoes_amarelos = parseInt(line[0]); 
let pimentoes_vermelhos = parseInt(line[1]); 
//TODO: Faça a soma do número de pimentões e imprima o resultado
let X = pimentoes_amarelos + pimentoes_vermelhos;

console.log(`X = ${X}`);
~~~
~~~js
//TODO: Complete os espaços em branco
let line = gets().split(" ");
let pimentoes_amarelos = parseInt(line[0]); 
let pimentoes_vermelhos = parseInt(line[1]); 
//TODO: Faça a soma do número de pimentões e imprima o resultado

let total = pimentoes_vermelhos + pimentoes_amarelos;

print("X = " + total);
//console.log("X = " + total);
~~~

<hr>

## 2 / 3 - Tartarugas Ninja

Rafael, Michelangelo, Leonardo e Donatello são tartarugas mutantes com superpoderes que adoram pizza. Certo dia, após lutarem contra criminosos nos esgotos de Nova Iorque, resolveram pedir uma pizza. Quando a pizza chegou perceberam que ela havia sido mal cortada, o que gerou uma briga entre eles para saber quantos pedaços cada um comeria. Ajude as tartarugas ninja escrevendo um programa que a partir de um dado o número de cortes retorna o número máximo de fatias possíveis.

Exemplos de Entrada | Exemplos de Saída
-|-
2 | 4
3 | 7

~~~js
function findMaximumPieces(n) { 
      return  1 + n * (n + 1) / 2; 
        
} 

let valor = gets();
let resultado = parseInt(valor);
//let resultado = valor.parseInt();

//TODO: Imprima o valor usando a função (utilizando -> função(valor)) alterando, enquanto transforma o valor em um inteiro.

console.log(findMaximumPieces(resultado));
~~~

<hr>

## 3 / 3 - Arrays Pares

Seu José possui uma lista de entregas das suas mercadorias e cada uma delas possui um número de identificação. As entregas mais urgentes são as que possuem o número de identificação PAR. Porém, seu José é muito atarefado e pediu sua ajuda para criar um programa que, de acordo com uma lista, mostrasse apenas as entregas urgentes (pares). Utilizando o seu conhecimento sobre Arrays, uma estrutura de dados que armazena uma coleção de dados em um bloco de memória, crie um programa que, dado a lista: {2, 3, 5, 7, 11, 13, 18, 34}, retorne como resultado apenas os números pares dessa array.

**Entrada**
A entrada consiste em um Array de números inteiros positivos. ([2, 3, 5, 7, 11, 13, 18, 34])

**Saída**
A saída do desafio equivale aos números pares do Array, como mostra o exemplo a baixo, porém com o Array do enunciado:

Exemplos de Entrada | Exemplos de Saída
-|-
 8, 9, 11, 13, 16, 17, 23, 24  | 8 16 24
 1, 2, 5, 6, 7, 9, 10, 11 | 2 6 10

 ~~~js
 const numeros = [ 2, 3, 5, 7, 11, 13, 18, 34 ];

//TODO: Complete o laço de repetição:
for (let i = 0; i <= numeros.length; i++){
//TODO: Agora crie uma condição que verifique o ARRAY e imprima APENAS os números pares.
    const numero = numeros[i];
    if (numero % 2 === 0) {
console.log(numero);}
}
~~~