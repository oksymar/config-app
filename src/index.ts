import bodyParser from "body-parser";
import events from "events";
import express from "express";
import path from "path";
import SerialPort from "serialport";
import { CommandRoutes } from "./routes/commandRoutes";
import { SerialRead } from "./serialRead.js";

const app = express();
const portNumber = 9000; // default port to listen
const eventEmitter = new events.EventEmitter();

const serialPortName = "COM6";
const port = new SerialPort(serialPortName, { baudRate: 9600 });

port.on("close", (err: TypeError) => {
  console.log("Error: ", err.message);
});

port.on("error", (err: TypeError) => {
  console.log("Error: ", err.message);
});

SerialRead(port, eventEmitter);
app.use(bodyParser.json());
CommandRoutes(app, port, eventEmitter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(portNumber);
