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

## Lista de Exercícios

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

### 3. 

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

```
