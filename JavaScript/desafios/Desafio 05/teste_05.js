//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

function calcularValorTotal(n, pedidos, cupom) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    //Explicação: Aplica o conceito de destructuring para atribuição do nome e valor.
    //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    let [nome, valor] = pedidos[i].split(' ');
    valor = parseFloat(valor);
    total += valor;
  }
  
  //TODO: Criar as condições para aplicar o cupom de desconto (10% ou 20%).
  if(cupom == '10%'){
  total = total - (total * 0.10);
 } else if (cupom == '20%'){
  total = total - (total * 0.20);
 }
 
  return total.toFixed(2);
}

//Recupera os valores de entrada, criando um array para os pedidos:
const n = parseInt(gets());
const pedidos = [];
for (let i = 0; i < n; i++) {
  pedidos.push(gets());
}
const cupom = gets();

//TODO: Analisar e completar a função "calcularValorTotal", invocando-a para obtenção do total.
const valorTotal = calcularValorTotal(n, pedidos, cupom);

//TODO: Imprimir o valor total obtido de acordo com o padrão solicitado neste desafio.
print(`Valor total: ${valorTotal}`);