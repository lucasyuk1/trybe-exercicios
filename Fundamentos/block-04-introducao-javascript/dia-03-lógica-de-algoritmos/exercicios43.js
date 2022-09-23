// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

// var fat = 10;
// var resultado = fat;
// for (var i = 1; i < fat; i++) {
//   resultado *= i;
// }
// console.log(resultado);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reverse ='';

for (var i = word.length - 1; i >= 0; i--) { 
  reverse += word[i]; 
}

console.log(reverse);

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.