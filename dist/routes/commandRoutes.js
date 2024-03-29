"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serialWrite_1 = require("../serialWrite");
exports.CommandRoutes = (app, serialPort, eventEmitter) => {
    app.post("/api/command/custom", (req, res) => {
        const { isWriteSucceed, id } = serialWrite_1.SerialWrite({
            command: req.body.command,
            parameters: req.body.parameters,
            serialPort
        });
        if (isWriteSucceed) {
            eventEmitter.once(`msgId-${id}`, (data) => {
                res.status(200).send(data);
            });
        }
        else {
            eventEmitter.removeAllListeners(`msgId-${id}`);
        }
    });
};
//# sourceMappingURL=commandRoutes.js.map