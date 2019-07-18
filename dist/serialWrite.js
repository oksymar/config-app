"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let id = 0;
exports.SerialWrite = (port, msg) => {
    id = id + 1;
    if (id === Number.MAX_SAFE_INTEGER) {
        id = 0;
    }
    const wrappedMsg = { id, msg };
    const isWriteSucceed = port.write(`${JSON.stringify(wrappedMsg)}\r\n`, (err) => {
        if (err) {
            return console.log("Error on write: ", err.message);
        }
    });
    return { isWriteSucceed, id };
};
//# sourceMappingURL=serialWrite.js.map