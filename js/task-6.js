const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];


const calculateTotalPrice = function(allProdcuts, productName) {
    for (const items of allProdcuts) {
       if (items.name === productName)
       return items.price * items.quantity;
    }
    return 0;
};

console.log(calculateTotalPrice(products, 'Радар'));
console.log(calculateTotalPrice(products, 'Дроид'));


