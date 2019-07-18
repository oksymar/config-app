import SerialPort from "serialport";

let id = 0;

export const SerialWrite = (port: SerialPort, msg: string | number) => {
  id = id + 1;
  if (id === Number.MAX_SAFE_INTEGER) {
    id = 0;
  }
  const wrappedMsg = { id, msg };

  const isWriteSucceed = port.write(
    `${JSON.stringify(wrappedMsg)}\r\n`,
    (err: TypeError) => {
      if (err) {
        return console.log("Error on write: ", err.message);
      }
    }
  );
  return { isWriteSucceed, id };
};
