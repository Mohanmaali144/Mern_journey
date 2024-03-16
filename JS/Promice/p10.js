const fun1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("fun 1 exicuting .....");
        resolve("fun1 resolved");
      }, 2000);
    });
  };
  
  const fun2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("fun2 is exicuting......");
        //   resolve("fun2 resolved")
        reject("fun2 reject");
      }, 1000);
    });
  };
  
  const fun3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("fun3 is exicuting......");
        resolve("fun3 resolved");
      }, 1000);
    });
  };
  
  const fun4 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("fun4 is exicuting......");
        resolve("fun4 resolved");
      }, 1000);
    });
  };
  
  Promise.race([fun1(), fun2(), fun3(), fun4()])
    .then((result) => {
      console.log("------------------------");
      console.log(result);
    })
    .catch((rejected) => {
      console.log("------------------------");
      console.log(rejected);
    });
  