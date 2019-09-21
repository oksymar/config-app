import SerialPort from "serialport";

let id = 0;

export type SerialWriteProps = {
  serialPort: SerialPort;
  command: string;
  parameters: string;
};

export const SerialWrite = ({
  serialPort,
  command,
  parameters
}: SerialWriteProps) => {
  id = id + 1;
  if (id === Number.MAX_SAFE_INTEGER) {
    id = 0;
  }

  let wrappedMsg = {};

  if (parameters) {
    wrappedMsg = { id, command, parameters };
  } else {
    wrappedMsg = { id, command };
  }

  const isWriteSucceed = serialPort.write(
    `${JSON.stringify(wrappedMsg)}\r\n`,
    (err: TypeError) => {
      if (err) {
        return console.log("Error on write: ", err.message);
      }
    }
  );
  return { isWriteSucceed, id };
};
