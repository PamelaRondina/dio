/* MODELO 01
const joana = {
    nome: 'Joana Silva',
    idade: 28,

};

joana.altura = 1,69;
delete joana.nome;

console.log(joana);
console.log(joana.nome);
console.log(joana.idade); */

// MODELO 02
/* const pessoa = {
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

pessoa.descrever(); */

//MODELO 03 - ACESSANDO ATRIBUTOS
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