"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const parser_readline_1 = __importDefault(require("@serialport/parser-readline"));
exports.SerialRead = (serialPort, eventEmitter) => {
    const parser = serialPort.pipe(new parser_readline_1.default({ delimiter: "\r\n" }));
    parser.on("data", (data) => {
        const { id } = JSON.parse(data);
        try {
            eventEmitter.emit(`msgId-${id}`, data);
        }
        catch (err) {
            console.log(err.msg);
            return;
        }
    });
};
//# sourceMappingURL=serialRead.js.map