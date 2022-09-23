let items = ['Batata', 'X-Tudo', 'Refrigerante', 'Big Mac', 'Nuggets'];
let price = [12, 33, 5, 9, 15];

console.log('--- CARDÁPIO ---');

for (let i = 0; i < items.length; i += 1) {
  console.log(items[i], '= RS', price[i]);
}

