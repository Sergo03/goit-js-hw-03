let input;
const numbers = [];
let total = 0;
while (true) {
    input = prompt('Введите число');
   if (input === null) {
        break;
    } 
    input = Number(input);
   
    const isNumber = Number.isNaN(input);
    if (isNumber) {
        alert('Было введено не число, попробуйте еще раз')
        continue;
    }
    
    numbers.push(input);
} 
 for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
}
    
console.log(`Общая сумма чисел равна ${total}`);





