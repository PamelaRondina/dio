//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorHamburguer = parseFloat(gets());
const quantidadeHamburguer = parseInt(gets());
const valorBebida = parseFloat(gets());
const quantidadeBebida = parseInt(gets());
const valorPago = parseFloat(gets());

const totalHamburgueres = valorHamburguer * quantidadeHamburguer;
const totalBebidas = valorBebida * quantidadeBebida;

//TODO: Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).
const precoFinal = totalHamburgueres + totalBebidas;


//TODO: Calcular o troco do pedido, considerando o preço final e o valor pago pelo usuário.
const troco =  valorPago - precoFinal;


//TODO: Imprimir a saída no formato especificado neste desafio.
console.log(`O preço final do pedido é R$ ${precoFinal.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`)