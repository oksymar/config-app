// @ts-ignore: explanation here
import Readline from "@serialport/parser-readline";
import events from "events";
import SerialPort from "serialport";

type SerialMsgType = {
  id: number;
  msg: string;
};

export const SerialRead = (
  port: SerialPort,
  eventEmitter: events.EventEmitter
) => {
  const parser = port.pipe(new Readline({ delimiter: "\r\n" }));
  parser.on("data", (data: SerialMsgType) => {
    try {
      eventEmitter.emit(`msgId-${data.id}`, data.msg);
    } catch (err) {
      console.log(err.msg);
      return;
    }
  });
};
