/* 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 
*/

/* 
"Minha fórmula"
const produto = 100;

const debito = produto - (produto/100*10);
const dinheiro = produto - (produto/100*15);
const pix = dinheiro;
const parcelado02 = produto
const parceladoMais = produto + (produto/100*10)

console.log('Sua forma de pagamento foi: Parcelado 3x. Seu produto foi R$ ' + produto);
console.log('Você pagará no total: R$ ' + (parceladoMais).toFixed(2)); 
*/

const produto = 100;

const debito = produto - (produto/100*10);
const dinheiro = produto - (produto/100*15);
const pix = dinheiro;
const parcelado02 = produto
const parceladoMais = produto + (produto/100*10)

console.log('Sua forma de pagamento foi: Parcelado 3x. Seu produto foi R$ ' + produto);
console.log('Você pagará no total: R$ ' + (parceladoMais).toFixed(2));