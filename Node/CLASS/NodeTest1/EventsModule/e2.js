import EventEmitter from "events";

let events = new EventEmitter();

events.once("myEvent", () => {
  console.log("Event fire...");
});

function f1() {
  events.emit("myEvent");
}

for (let i = 0; i < 5; i++) {
  f1();
}

events.on("myEvent2", () => {
  console.log("Event2 fire...");
});

function f2() {
  events.emit("myEvent2");
}

for (let i = 0; i < 5; i++) {
  f2();
}
