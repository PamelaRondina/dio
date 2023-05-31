//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const numPedidos = parseInt(gets());

for (let i = 1; i <= numPedidos; i++) {
  const prato = gets();
  const calorias = parseInt(gets());
  //Explicação: atribui "true" se o valor lido via gets() for estritamente igual a 's'.
  //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
  const ehVegano = gets().toLowerCase() === 's';

  //TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.


if (ehVegano === true) {
  console.log(`Pedido ${i}: ${prato} (Vegano) - ${calorias} calorias `);
} else {
  console.log(`Pedido ${i}: ${prato} (Nao-vegano) - ${calorias} calorias `);
}
}

// } - inserida no final para juntar com o enunciado
// i - se refere ao for loop criado