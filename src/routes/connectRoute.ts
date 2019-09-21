import events from "events";
import express from "express";
import SerialPort from "serialport";
import { SerialWrite } from "../serialWrite";

export const ConnectRoute = (
  app: express.Application,
  serialPort: SerialPort,
  eventEmitter: events.EventEmitter
) => {
  app.get("/api/connected", (req, res) => {
    const { isWriteSucceed, id } = SerialWrite({
      command: "connected",
      parameters: "",
      serialPort
    });
    if (serialPort.isOpen && isWriteSucceed) {
      eventEmitter.once(`msgId-${id}`, (data: string) => {
        res.status(200).send(data);
      });
    } else {
      eventEmitter.removeAllListeners(`msgId-${id}`);
      res.status(200).send(JSON.stringify({ id, data: false }));
    }
  });
};
