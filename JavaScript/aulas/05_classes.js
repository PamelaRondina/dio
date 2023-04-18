/* class Pessoa {
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
bruno.descrever(); */

//MODELO 02 - constructor
/* class Pessoa {
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
bruno.descrever(); */

//MODELO 03: Função 'Quem é o mais velho?'
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
