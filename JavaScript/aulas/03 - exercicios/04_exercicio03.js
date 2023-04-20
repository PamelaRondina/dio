/* 
Código Condição de pagamento:
1 À vista Débito, recebe 10% de desconto;
2 À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 Em duas vezes, preço normal de etiqueta sem juros;
4 Acima de duas vezes, preço normal de etiqueta + juros de 10%; 
 */

function aplicarDesconto (valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros (valor, juros){
    return (valor + (valor * (juros / 100)));
}

const produto = 100;
const pagamento = 4;

//(produto/100*10) = produto *0.10

if (pagamento === 1) {
    console.log('Forma de Pagamento escolhida: Débito.');
    console.log('Seu produto foi R$ ' + (produto).toFixed(2) + '. Valor pago: R$ ' + aplicarDesconto(produto, 10).toFixed(2) + '.');
} else if (pagamento === 2) {
    console.log('Forma de Pagamento escolhida: Dinheiro/Pix.');
    console.log('Seu produto foi R$ ' + (produto).toFixed(2) + '. Valor pago: R$ ' + aplicarDesconto(produto, 15).toFixed(2) + '.');
} else if (pagamento === 3) {
    console.log('Forma de Pagamento escolhida: Parcelado em 2x.');
    console.log('Seu produto foi R$ ' + (produto).toFixed(2) + '. Valor pago: R$ ' + (produto).toFixed(2));
} else {
    console.log('Forma de Pagamento escolhida: Parcelado acima de 2x.');
    console.log('Seu produto foi R$ ' + (produto).toFixed(2) + '. Valor pago: R$ ' + aplicarJuros(produto, 10).toFixed(2));
}