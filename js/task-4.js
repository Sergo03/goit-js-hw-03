const countTotalSalary = function(employees) {
const keys = Object.values(employees);
 let sum = 0;
for (const key of keys) {
  sum += key;
  }
  return sum;
};

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);
console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);

