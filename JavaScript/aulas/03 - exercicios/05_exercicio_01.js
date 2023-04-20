/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

/* class representarCarro {
    marca;
    cor;
    combustivel;
    KmPorLitro;
    distanciaKm;

    constructor(marca, cor, combustivel, kmPorLitro, distanciaKm) {
        this.marca = marca;
        this.cor = cor;
        this.combustivel = combustivel;
        this.kmPorLitro = kmPorLitro;
        this.distanciaKm = distanciaKm;    
    }   

     descrever() {
        console.log(`Carro da marca ${this.marca} e de cor ${this.cor}`);
        this.calculo();
        //console.log(`O valor do combustível ${this.combustivel}, da distância ${this.distanciaKm}, e o valor gasto será R$` + calculo());
    }

    function calculo(){
    return (distanciaKm / (kmPorLitro * combustivel));
    }     
   
}



//gastoMedio combustível por kmRodado
const carro1 = new representarCarro('Volks', 'Prata', 5.79, 10, 100);

carro1.descrever(); */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

    descrever(){
        console.log(`A marca: ${this.marca}, de Cor: ${this.cor}.`);
    }
    
}

const foccus = new Carro('Foccus', 'Prata', 1/13);
foccus.descrever() + console.log('O gasto para a viagem será de R$ ' + foccus.calcularViagem(150, 5.30).toFixed(2));