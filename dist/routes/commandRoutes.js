"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serialWrite_js_1 = require("../serialWrite.js");
exports.CommandRoutes = (app, port, eventEmitter) => {
    app.post("/api/command/custom", (req, res) => {
        const { isWriteSucceed, id } = serialWrite_js_1.SerialWrite(port, req.body.command);
        if (isWriteSucceed) {
            eventEmitter.once(`msgId-${id}`, (msg) => {
                res.status(200).send("Ok");
            });
        }
        else {
            eventEmitter.removeAllListeners(`msgId-${id}`);
        }
    });
};
//# sourceMappingURL=commandRoutes.js.map