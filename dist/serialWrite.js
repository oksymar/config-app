"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 0;
exports.SerialWrite = ({ serialPort, command, parameters }) => {
    id = id + 1;
    if (id === Number.MAX_SAFE_INTEGER) {
        id = 0;
    }
    let wrappedMsg = {};
    if (parameters) {
        wrappedMsg = { id, command, parameters };
    }
    else {
        wrappedMsg = { id, command };
    }
    const isWriteSucceed = serialPort.write(`${JSON.stringify(wrappedMsg)}\r\n`, (err) => {
        if (err) {
            return console.log("Error on write: ", err.message);
        }
    });
    return { isWriteSucceed, id };
};
//# sourceMappingURL=serialWrite.js.map