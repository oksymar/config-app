"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore: explanation here
const parser_readline_1 = __importDefault(require("@serialport/parser-readline"));
exports.SerialRead = (port, eventEmitter) => {
    const parser = port.pipe(new parser_readline_1.default({ delimiter: "\r\n" }));
    parser.on("data", (msg) => {
        try {
            const parsedMsg = JSON.parse(msg);
            eventEmitter.emit(`msgId-${parsedMsg.id}`, parsedMsg.msg);
        }
        catch (err) {
            console.log(err.msg);
            return;
        }
    });
};
//# sourceMappingURL=serialRead.js.map