import EventEmitter from "events";

function myListener(a, b) {
  console.log("Listener called ", a, b);
}

const event = new EventEmitter();

let temp = event.prependListener("myEvent", myListener);

event.emit("myEvent",10,20);

console.log(temp);
