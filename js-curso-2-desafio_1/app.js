let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio'


function countButton(){
    console.log('O butão foi clicado');
}

function alertButton() {
    alert('Eu amo JS');
}

function promptButton() {
    let cidade = prompt('Digite um nome de uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function sumButton(){
    let value1 = prompt('Digite o primeiro número: ');
    let value2 = prompt('Digite o segundo número: ');
    let sum = parseInt(value1) + parseInt(value2);
    alert(`${value1} + ${value2} = ${sum}`);
}