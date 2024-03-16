const first = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("first Exicute.......");
      resolve(n + 2);
    }, 2000);
  });
};

const second = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("second Exicute.......");
      resolve(n + 2);
    }, 2000);
  });
};

const third = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("third Exicute.......");
      resolve(n + 2);
    }, 2000);
  });
};

const fourth = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fourth Exicute.......");
      //   resolve(n + 2);
      reject("reject");
    }, 2000);
  });
};
Promise.allSettled([first(1), second(2), third(3), fourth(4)])
  .then((resolve) => {
    // console.log(resolve[0]["status"]);
    // console.log(resolve[1]["status"]);
    // console.log(resolve[2]["status"]);
    // console.log(resolve[3]["status"]);

    for (let status of resolve) {
      console.log(status["status"]);
      if (status["status"] === "fulfilled") {
        console.log(status["value"]);
      } else {
        console.log(status["reason"]);
      }
    }
  })
  .catch((reject) => {
    // console.log(reject);
  });
