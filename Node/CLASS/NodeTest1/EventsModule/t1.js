// Node.js program to demonstrate the
// process.nextTick() Property

// Include process module
import { resolve } from "node:path";
import process from "node:process";
setTimeout(() => {
  console.log("HELOO");
}, 0);

new Promise((res,rej)=>{
    console.log('hellow');
})

console.log("Executed in the current iteration 1");
process.nextTick(() => {
  console.log("Executed in the next iteration 1");
});

process.nextTick(() => {
  console.log("Executed in the next iteration");
});

function name() {
  console.log("Executed in the current iteration");
}
name();
