/* 
function teste () {
    console.log('Teste');
}

teste(); 
*/

/* 
function sayMyName (name) {
    console.log('Your name is: ' + name);
}

sayMyName('Pamela');
sayMyName('Bruno'); 
*/

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor * valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
