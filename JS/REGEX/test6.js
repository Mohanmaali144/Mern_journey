// let reg = /m[a-m]han/;
// let reg = /m[^a-m]han/;

// let reg = /m[^a]han/;
// let reg = /m[a-z]han/i;
// let reg = /[A-Z]ohan/i;

let reg = /moha{0,2}n/;
let str = "mohan";

console.log(reg.test(str));
