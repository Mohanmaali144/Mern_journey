const first = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("first _exicute");
      reject("rejected");
    }, 1000);
  });
};

first(10)
  .then((resolved) => {
    console.log(resolved);
  })
  .catch((rejected) => {
    console.log(rejected);
  })
  .finally(() => {
    console.log("finally..........");
  });
