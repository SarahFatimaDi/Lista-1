let nota1 = parseFloat(prompt('Digite a primeira nota: '));
let nota2 = parseFloat(prompt('Digite a segunda nota: '));
let nota3 = parseFloat(prompt('Digite a terceira nota: '));
let peso1 = parseInt(prompt('Digite o peso da primeira nota: '));
let peso2 = parseInt(prompt('Digite o peso da segunda nota: '));
let peso3 = parseInt(prompt('Digite o peso da terceira nota: '));

let media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) /10;

alert(`A media desse aluno foi de ${media.toFixed(2)}`);