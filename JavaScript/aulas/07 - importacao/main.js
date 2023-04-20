const { gets, print } = require('./07_importacao_exportacao');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado
    }
}

print(maiorValorEncontrado);

