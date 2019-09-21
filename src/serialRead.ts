// @ts-ignore
import Readline from "@serialport/parser-readline";
import events from "events";
import SerialPort from "serialport";

type SerialMsgType = {
  id: number;
  command: string;
  parameters: string;
};

export const SerialRead = (
  serialPort: SerialPort,
  eventEmitter: events.EventEmitter
) => {
  const parser = serialPort.pipe(new Readline({ delimiter: "\r\n" }));
  parser.on("data", (data: string) => {
    const { id }: SerialMsgType = JSON.parse(data);
    try {
      eventEmitter.emit(`msgId-${id}`, data);
    } catch (err) {
      console.log(err.msg);
      return;
    }
  });
};
