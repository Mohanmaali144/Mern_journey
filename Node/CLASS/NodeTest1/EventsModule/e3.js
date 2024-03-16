import EventEmitter from "events";

function myListener(a, b) {
  console.log("Listener called ", a, b);
}

function myEvent() {
  console.log("onEvent called");
}
const event = new EventEmitter();

let add = event.addListener("addEvent", myListener);
let on = event.on("onEvent", myEvent);
event.emit("addEvent", 10, 20);
event.emit("onEvent", 10, 20);
console.log("on : " + on);

// for (var i in on) {
//   console.log(i);
// }

for (var i in add) {
  console.log(i);
}
