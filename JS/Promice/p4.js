const first = () => {
  return new Promise((resolve, reject) => {
    resolve("first Exicute........");
  });
};

const second = () => {
  return new Promise((resolve, reject) => {
    resolve("second Exicute........");
  });
};

const third = () => {
  return new Promise((resolve, reject) => {
    resolve("third Exicute........");
  });
};

const fourth = () => {
  return new Promise((resolve, reject) => {
    // resolve("fourth Exicute........");
    reject("fourth rejected........");
  });
};

Promise.all([first(), second(), third(), fourth()])
  .then((result) => {
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
    console.log(result[3]);
  })
  .catch((reject) => {
    console.log(reject);
  });
