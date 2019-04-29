const { resolve } = require('path');
const { app, BrowserWindow } = require('electron');
let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadFile(resolve('dist/index.html'));
};

app.on('ready', createWindow);
