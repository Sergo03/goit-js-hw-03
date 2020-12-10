const countProps = function(obj) {
  const arr = Object.keys(obj);
  return arr.length;
};


console.log(countProps({}))
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));