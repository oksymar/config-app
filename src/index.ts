import events from "events";
import express from "express";
import SerialPort from "serialport";
import { CommandRoutes } from "./routes/commandRoutes";
import { SerialRead } from "./serialRead.js";

const app = express();
const portNumber = 8080; // default port to listen
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

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

CommandRoutes(app, port, eventEmitter);

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  console.log("production");
} else {
  console.log("development");
}

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

app.listen(portNumber);
