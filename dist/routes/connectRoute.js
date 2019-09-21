"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serialWrite_1 = require("../serialWrite");
exports.ConnectRoute = (app, serialPort, eventEmitter) => {
    app.get("/api/connected", (req, res) => {
        const { isWriteSucceed, id } = serialWrite_1.SerialWrite({
            command: "connected",
            parameters: "",
            serialPort
        });
        if (serialPort.isOpen && isWriteSucceed) {
            eventEmitter.once(`msgId-${id}`, (data) => {
                res.status(200).send(data);
            });
        }
        else {
            eventEmitter.removeAllListeners(`msgId-${id}`);
            res.status(200).send(JSON.stringify({ id, data: false }));
        }
    });
};
//# sourceMappingURL=connectRoute.js.map