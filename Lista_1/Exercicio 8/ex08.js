let capital = parseFloat(prompt('Digite o valor do depósito: '));
let taxaJ = parseFloat(prompt('Digite o valor da taxa de juros: '));
let tempo = parseInt(prompt('Digite quanto tempo: '));

let calculoJuro = capital * taxaJ * tempo;
let valorRendimento = calculoJuro + capital;

alert(`Resultado do cálculo de Juros: ${calculoJuro}. Valor do rendimento seria de ${valorRendimento}`);