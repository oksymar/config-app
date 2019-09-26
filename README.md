# config-app

To run it on Beaglebone first you need to upgrade node:

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

In root folder run `sudo npm install` to install dependencies.

React build can't be run on Beaglebone. So build it on PC.

(PC) Run `npm install` in `client` folder. Run `npm run build` in `client` folder.
Then copy build folder from PC to Beaglebone into the same directory.

Server can be run using command `npm run prod:linux` in root folder.
Server starts on port `9000`.

Plug is available in `plug` folder, use `npm install` to install dependencies. Depend on device you may need to change serial name in `index.js`.

Linux: `const port = new SerialPort("/dev/ttyS1", { baudRate: 9600 });`

Windows: `const serialPort = new SerialPort("COM6", { baudRate: 9600 });`

Run it using `npm start`
