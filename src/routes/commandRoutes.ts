import events from "events";
import express from "express";
import SerialPort from "serialport";
import { SerialWrite } from "../serialWrite";

export const CommandRoutes = (
  app: express.Application,
  serialPort: SerialPort,
  eventEmitter: events.EventEmitter
) => {
  app.post("/api/command/custom", (req, res) => {
    const { isWriteSucceed, id } = SerialWrite({
      command: req.body.command,
      parameters: req.body.parameters,
      serialPort
    });
    if (isWriteSucceed) {
      eventEmitter.once(`msgId-${id}`, (data: string) => {
        res.status(200).send(data);
      });
    } else {
      eventEmitter.removeAllListeners(`msgId-${id}`);
    }
  });
};
