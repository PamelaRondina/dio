# JavaScript

### Aula 01 - Variáveies e Operadores

Criar arquivo `aula.js`, no terminal rodar o node: `node aula.js`

> NOTA: Necessário rodar no terminal dentro do diretório que está o arquivo.

- [x] `console.log("Imprimir Algo")`: imprimir textos (em " " );
- [x] `let nomeVariavel = 10;`: declarar variável (valor pode ser alterado);
- [x] `const pi = 3.14;`: declarar constante (valor NÃO pode ser alterado)

- [x] `console.log(resultado).toFixed(2));`: **toFixed** converte o valor para texto e imprime com dois algorítimos após a casa decimal

### Aula 02 - Condicionais

**Par ou Ímpar? - Bollean**

```javascript
const numero = 3;
const isNumero = numero % 2 === 0;

if (isNumero) {
  console.log("Par");
} else {
  console.log("Ímpar");
}
```

**Número divisível por 5? - if, if else, else**

```javascript
const numero = 5;
const isNumeroDivisorPor5 = numero % 5 === 0;

if (numero === 0) {
  console.log("O número é inválido");
} else if (isNumeroDivisorPor5) {
  console.log("Sim");
} else {
  console.log("Não");
}
```

> `const isNumeroPar = (numero % 2) === 0` (isNomeVariavel) utilizado para declarar variáveis booleanas

---

## Aula 03 - Lista de Exercícios

### 1. Exercício Média Nota Aluno

1. Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:

- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

```javascript
const nota01 = 7;
const nota02 = 7;
const nota03 = 8;

const media = (nota01 + nota02 + nota03) / 3;

if (media < 5) {
  console.log("Sua nota foi " + media.toFixed(2) + ". Você está Reprovado!");
} else if (media >= 5 && media <= 7) {
  console.log(
    "Sua nota foi " + media.toFixed(2) + ". Você está de Recuperação!."
  );
} else {
  console.log(
    "Sua nota foi " + media.toFixed(2) + ". Você passou de Semestre!"
  );
}
```
<hr>

### 2. Calculando o IMC

2. O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura \* altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:

- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;

```javascript
const peso = 80;
const altura = 1.81;
const imc = peso / (altura * altura);

console.log('Seu peso = ' + (peso).toFixed(2) + 'kg');
console.log('Sua altura = ' + (altura).toFixed(2) + 'cm');
console.log('Seu IMC é: ' + (imc).toFixed(2));

if (imc < 18.5) {
    console.log('Você está Abaixo do peso.');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Você está com o Peso Normal.');
} else if (imc >= 25 && imc < 30) {
    console.log('Você está Acima do Peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Você está Obeso');
} else {
    console.log('Você está com Obesidade Grave');
}
```

> `Math.pow(altura,2)` biblioteca para calcular ao quadrado (ou ao cubo3, e assim vai...)

<hr>

### 3. Débito, Dinheiro/PIX, Parcelado

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;


**Minha fórmula**
```javascript
const produto = 100;

const debito = produto - (produto/100*10);
const dinheiro = produto - (produto/100*15);
const pix = dinheiro;
const parcelado02 = produto
const parceladoMais = produto + (produto/100*10)

console.log('Sua forma de pagamento foi: Parcelado 3x. Seu produto foi R$ ' + produto);
console.log('Você pagará no total: R$ ' + (parceladoMais).toFixed(2));
```

**Após aula**
```javascript
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
```

Adicionar teste 01**************

## Aula 04 - Funções

* São trechos de código que podem ser invocados durante a execução de um programa.

> Criar e Chamar Função

```javascript
function teste (parametros) {
    console.log('Teste');
}

teste();
teste();
```
> Função Não Nomeada: Criar Função e Chamar em Seguida Automaticamente

**Neste caso não á necessidade de chamar a função!**

```javascript
(function () {
    console.log('Teste');
})();
```


### Modelo Funções 1

```javascript
function sayMyName (name) {
    console.log('Your name is: ' + name);
}

sayMyName('Pamela');
sayMyName('Bruno');
```

### Modelo Funções 3

```javascript
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));`
```

### Calcular IMC com funcções

```javascript
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc (imc) {
    if (imc < 18.5) {
        return 'Você está Abaixo do peso.';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Você está com o Peso Normal.';
    } else if (imc >= 25 && imc < 30) {
        return 'Você está Acima do Peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Você está Obeso';
    } else {
        return 'Você está com Obesidade Grave';
    }
}

function main (){ 
    const peso = 80;
    const altura = 1.81;

    const imc = calcularImc(peso, altura);

    console.log('Seu peso = ' + (peso).toFixed(2) + 'kg');
    console.log('Sua altura = ' + (altura).toFixed(2) + 'cm');
    console.log('Seu IMC é: ' + (imc).toFixed(2));
    console.log(classificarImc(imc));
}

main();
```

**Função Não Nomeada**
```javascript
function main (){ 
    const peso = 80;
    const altura = 1.81;

    const imc = calcularImc(peso, altura);

    console.log('Seu peso = ' + (peso).toFixed(2) + 'kg');
    console.log('Sua altura = ' + (altura).toFixed(2) + 'cm');
    console.log('Seu IMC é: ' + (imc).toFixed(2));
    console.log(classificarImc(imc));
}

main();
```

### Exercícios

#### Função "Chamar meu nome"

```javascript
function seuNome (name) {
    console.log('My name is ' + name);      
}

seuNome('Pamela');
```

#### Função "Recebe idade + Verificar > Idade"

```javascript
function verificaridade (idade) {
    if (idade < 18) {
        console.log('Você é Menor de Idade!')
    } else {
        console.log('Você é Maior de Idade')
    }
}

verificaridade(18);`
```

#### Função "Desconto ou Juros"

```javascript
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
```

## Aula 05 - Objetos e Classes

### Objetos

> `const pamela = {}`

> Coleções de valores que agrupam valores e funciona através de chave e valor. Coleção dinâmica de chave e valor



#### Objetos - Modelo 1

```javascript
const joana = {
    nome: 'Joana Silva',
    idade: 28,

};

joana.altura = 1,69;
delete joana.nome;

console.log(joana);
console.log(joana.nome);
console.log(joana.idade);
```

#### Objetos - Modelo 2

**Inclusão de Método**

> Função dentro de um objeto é chamada de `metodo`. Dentro do `console.log` utilizar ( **`** ), para que <code>${}</code> funcione

```javascript
const pessoa = {
    nome: 'Joana Camargo',
    idade: 30,

    //descrever = método
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

//Aqui o console.log irá imprimir os novos dados inclusos abaixo
pessoa.nome = 'Joaquim';
pessoa.idade = 30;

pessoa.descrever();
```

#### Objetos - Modelo 3

**Acessando Atributos**

```javascript
const pessoa = {
    nome: 'Joana Camargo',
    idade: 30,

    //descrever = método
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

//acessar atributo [] 
console.log(pessoa['nome']);

```

### Classes

- [x] Classe: definção do que deveria ser

> A `function` não precisa ser declarada no método

- [x] Instância: ocorrência de algo

#### Clasess - Modelo 1

```javascript
class Pessoa {
    nome; 
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const pamela = new Pessoa();
pamela.nome = 'Pamela';
pamela.idade = 30;

const bruno = new Pessoa();
bruno.nome = 'Bruno';
bruno.idade = 30;

console.log(pamela);
console.log(bruno);

pamela.descrever();
bruno.descrever();
```

#### Clasess - Modelo 2: CONSTRUCTOR

```javascript
class Pessoa {
    nome; 
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//deve incluir os parâmetros
const pamela = new Pessoa('Pamela', 30);
const bruno = new Pessoa('Bruno', 30);

pamela.descrever();
bruno.descrever();
```

#### Classes - Modelo 3:  Função 'Quem é o mais velho?'

```javascript
class Pessoa {
    nome; 
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function comparaPessoas(p1, p2){
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }

}

//deve incluir os parâmetros
const pamela = new Pessoa('Pamela', 35);
const bruno = new Pessoa('Bruno', 30);

//chamar função e incluir os parâmetros
comparaPessoas(pamela, bruno);
```

### Exercícios

#### Objetos/Classe: 