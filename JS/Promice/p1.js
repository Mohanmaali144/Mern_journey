const first = new Promise((resolve, reject) => {

    
  setTimeout(() => {
    console.log("first-exucuting.......");
    reject("rejected");
  }, 2000);
});

const second = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("second-exucuting.......");
    resolve("second");
  }, 1000);
});

const third = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("third-exucuting.......");
    resolve("third");
  }, 700);
});

first.then((resolved) => {return second(resolved)})
.then((resolved) => { return third(resolved)});
