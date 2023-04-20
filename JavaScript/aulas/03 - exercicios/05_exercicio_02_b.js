
/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoIMC(){
        return this.peso / (this.altura * this.altura); 
    }

    analiseIMC(){
        const imc = this.calculoIMC();
        
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

    descrever(){
        console.log(`Olá ${this.nome}, seu peso ${this.peso}kg e sua altura ${this.altura}m`);   
        console.log('Seu IMC é de: ' + this.calculoIMC().toFixed(2));
        console.log(this.analiseIMC());       
    }

}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.descrever());