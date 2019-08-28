import events from "events";
import express from "express";
import SerialPort from "serialport";
import { SerialWrite } from "../serialWrite.js";

export const CommandRoutes = (
  app: express.Application,
  port: SerialPort,
  eventEmitter: events.EventEmitter
) => {
  app.post("/api/command/custom", (req, res) => {
    const { isWriteSucceed, id } = SerialWrite(port, req.body.command);
    if (isWriteSucceed) {
      eventEmitter.once(`msgId-${id}`, (msg: string) => {
        res.status(200).send("Ok");
      });
    } else {
      eventEmitter.removeAllListeners(`msgId-${id}`);
    }
  });
};
