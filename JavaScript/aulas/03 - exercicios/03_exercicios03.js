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


/* 
Código Condição de pagamento:
1 À vista Débito, recebe 10% de desconto;
2 À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 Em duas vezes, preço normal de etiqueta sem juros;
4 Acima de duas vezes, preço normal de etiqueta + juros de 10%; 
 */
const produto = 100;
const pagamento = 1;

//(produto/100*10) = produto *0.10

if (pagamento === 1) {
    console.log('Forma de Pagamento escolhida: Débito.');
    console.log('Seu produto foi R$ ' + (produto).toFixed(2) + '. Valor pago: R$ ' + (produto - (produto * 0.10).toFixed(2)));
} else if (pagamento === 2) {
    console.log('Forma de Pagamento escolhida: Dinheiro/Pix.');
    console.log('Seu produto foi R$ ' + (produto).toFixed(2) + '. Valor pago: R$ ' + (produto - (produto * 0.15).toFixed(2)));
} else if (pagamento === 3) {
    console.log('Forma de Pagamento escolhida: Parcelado em 2x.');
    console.log('Seu produto foi R$ ' + (produto).toFixed(2) + '. Valor pago: R$ ' + (produto).toFixed(2));
} else {
    console.log('Forma de Pagamento escolhida: Parcelado acima de 2x.');
    console.log('Seu produto foi R$ ' + (produto).toFixed(2) + '. Valor pago: R$ ' + ((produto + (produto * 0.10)).toFixed(2)));
}
    
