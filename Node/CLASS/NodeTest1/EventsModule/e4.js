import EventEmitter from "events";

function myListener(a, b) {
  console.log("Listener called ", a, b);
}

const event = new EventEmitter();

let temp = event.listeners("myEvent");

event.emit("myEvent");

console.log(temp);
