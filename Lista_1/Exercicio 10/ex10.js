let repartir = prompt('Digite alguma coisa: ');

let resultado = repartir.split('').join(' ');

document.getElementById('resultado').textContent = resultado;