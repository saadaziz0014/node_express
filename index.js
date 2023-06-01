let a = 5;
let b = 9;

const myP = new Promise((resolve, reject) => {
  setTimeout(() => {
    b = b + 9;
    resolve(b);
  }, 2000);
  //reject("some error");
});

myP
  .then((data) => {
    console.log(a + data);
  })
  .catch((err) => {
    console.log(err);
  });
