// metacharecters ----------------

// let reg = /^poonam/;  // start with
// let reg = /am$/; // end with
// let reg = /p.oonam/; // any chrecter not define it will return true
// let reg = /[^i]/;
// let reg = /p*onam/;  // if left side not match any charecter then it will return true and right side not found then it return false

let reg = /p?onam?/; // optional;

let str = "hello i am dcsdcsdcsdonam";
let str2 = " is an student oona";

console.log(reg.test(str2));
