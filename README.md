# config-app

To run it on Beaglebone first you need to upgrade node:
```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```
In root folder run ` sudo npm install` to install dependencies.

React build can't be run on Beaglebone. So build it on PC using `npm run build` in `client` folder.
Then copy build folder from PC to Beaglebone into the same directory.

Server can be run using command `npm run prod:linux` in root folder.
Server starts on port `9000`.
