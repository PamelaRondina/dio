
/* function calcularImc(peso, altura) {
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

main(); */

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

(function () { 
    const peso = 80;
    const altura = 1.81;

    const imc = calcularImc(peso, altura);

    console.log('Seu peso = ' + (peso).toFixed(2) + 'kg');
    console.log('Sua altura = ' + (altura).toFixed(2) + 'cm');
    console.log('Seu IMC é: ' + (imc).toFixed(2));
    console.log(classificarImc(imc));
})();

