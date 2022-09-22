let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = numbers[0];
let major = 0;
let minor = numbers[0];
let imp = 0;

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
  sum += numbers[i];
  
  if (numbers[i] > major) {
    major = numbers[i];
  }
  
  if (numbers[i] < minor) {
    minor = numbers[i];
  }

  if (numbers[i] % 2 != 0) {
    imp += 1;
  }

}

let med = sum / numbers.length

console.log('A Soma dos valores é: ', sum);
console.log('A Média dos valores é: ', med);

if (med > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

console.log('O maior valor é:', major);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

if (imp > 0) {
  console.log('Valores ímpares:', imp);
} else {
  console.log('nenhum valor ímpar encontrado');
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

console.log('O menor valor é:', minor);