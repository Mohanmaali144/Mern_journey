const first = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("first_exicutng........");
      resolve(n + 2);
    }, 3000);
  });
};

const second = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("second_exicutng........");
      resolve(n + 2);
    }, 3000);
  });
};

const third = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("third_exicutng........");
      resolve(n + 2);
    }, 1000);
  });
};

const fourth = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fourth_exicutng........");
      resolve(n + 2);
    }, 700);
  });
};

first(10)
  .then((resolved) => {
    return second(resolved);
  })
  .then((resolved) => {
    return third(resolved);
  })
  .then((resolve) => {
    return fourth(resolve);
  });
