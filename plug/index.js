const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
// const port = new SerialPort("/dev/ttyS1", { baudRate: 9600 });
const serialPort = new SerialPort("COM6", { baudRate: 9600 });

serialPort.on("open", () => {
  console.log("open");
});

serialPort.on("close", () => {
  console.log("close");
  setTimeout(() => reconnect(), 5000);
});

serialPort.on("error", err => {
  console.log("error");
  console.log(err);
  setTimeout(() => reconnect(), 5000);
});

serialPort.open();

const reconnect = () => {
  if (!serialPort.isOpen) {
    serialPort.open();
  }
};

const parser = serialPort.pipe(new Readline({ delimiter: "\r\n" }));
parser.on("data", msg => {
  try {
    const { id, command, parameters } = JSON.parse(msg);
    let response = {};
    if (command === "get power measure") {
      response = { id, data: 130 };
    } else if (command === "get speed") {
      response = { id, data: 83 };
    } else if (command === "connected") {
      response = { id, data: true };
    } else if (!parameters) {
      response = { id, data: command };
    } else {
      response = { id, data: "Ok" };
    }

    serialPort.write(`${JSON.stringify(response)}\r\n`);
  } catch (error) {
    serialPort.write(`${JSON.stringify(error)}\r\n`);
  }
});
