const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
  start_Event() {
    setInterval(() => {
      this.emit("fire");
    }, 1000);
  }
}

const ticker = new MyEmitter();

ticker.on("fire", () => {
  console.log("fire event emitted");
});

ticker.start_Event();
