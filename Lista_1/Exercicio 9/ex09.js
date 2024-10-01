let tempoSegundos = parseInt(prompt('Digite os segundos totais: '));

//Cálculo dos dias, horas e minutos
let dias = Math.floor(tempoSegundos / 86400);
tempoSegundos %= 86400;

let horas = Math.floor(tempoSegundos / 3600);
tempoSegundos %= 3600;

let minutos = Math.floor(tempoSegundos / 60);
let segundos = tempoSegundos % 60; //Segundos finais

let resultado = `${dias} dia(s), ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
document.getElementById('resultado').textContent = resultado;