let a = 5;
let b = 9;

setTimeout(() => {
  b = b + 8;
}, 2000);

console.log(a + b);
//issue is data increase late
