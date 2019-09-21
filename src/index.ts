import bodyParser from "body-parser";
import events from "events";
import express from "express";
import path from "path";
import SerialPort from "serialport";
import { CommandRoutes } from "./routes/commandRoutes";
import { ConnectRoute } from "./routes/connectRoute";
import { SerialRead } from "./serialRead.js";

const app = express();
const portNumber = 9000; // default port to listen
const eventEmitter = new events.EventEmitter();

const serialPortName = "COM6";
const serialPort = new SerialPort(serialPortName, {
  autoOpen: false,
  baudRate: 9600
});

serialPort.on("open", () => {
  console.log("open");
});

serialPort.on("close", () => {
  console.log("close");
  setTimeout(() => reconnect(), 5000);
});

serialPort.on("error", (err) => {
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

SerialRead(serialPort, eventEmitter);
app.use(bodyParser.json());
CommandRoutes(app, serialPort, eventEmitter);
ConnectRoute(app, serialPort, eventEmitter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(portNumber);
