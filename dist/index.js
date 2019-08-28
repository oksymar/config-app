"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const events_1 = __importDefault(require("events"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const serialport_1 = __importDefault(require("serialport"));
const commandRoutes_1 = require("./routes/commandRoutes");
const serialRead_js_1 = require("./serialRead.js");
const app = express_1.default();
const portNumber = 9000; // default port to listen
const eventEmitter = new events_1.default.EventEmitter();
const serialPortName = "COM6";
const port = new serialport_1.default(serialPortName, { baudRate: 9600 });
port.on("close", (err) => {
    console.log("Error: ", err.message);
});
port.on("error", (err) => {
    console.log("Error: ", err.message);
});
serialRead_js_1.SerialRead(port, eventEmitter);
app.use(body_parser_1.default.json());
commandRoutes_1.CommandRoutes(app, port, eventEmitter);
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, "client", "build", "index.html"));
    });
}
app.listen(portNumber);
//# sourceMappingURL=index.js.map