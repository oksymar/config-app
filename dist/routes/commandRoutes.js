"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serialWrite_js_1 = require("../serialWrite.js");
exports.CommandRoutes = (app, port, eventEmitter) => {
    app.get("/command/set", (req, res) => {
        const { isWriteSucceed, id } = serialWrite_js_1.SerialWrite(port, "blablabla");
        if (isWriteSucceed) {
            eventEmitter.once(`msgId-${id}`, (msg) => {
                console.log(msg);
                res.status(200).send("Ok");
            });
        }
        else {
            eventEmitter.removeAllListeners(`msgId-${id}`);
        }
    });
};
//# sourceMappingURL=commandRoutes.js.map