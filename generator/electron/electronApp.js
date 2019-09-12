const { BrowserWindow } = require('electron');
const { resolve } = require('path');

module.exports = class App {
  constructor(
    app,
    config = {
      isDebug: false,
      windowOptions: {}
    }
  ) {
    const { isDebug, windowOptions } = config;
    this.isDebug = isDebug;
    this.windowOptions = windowOptions;
    this.mainWindow = null;
    this.mainURL = resolve('index.html');
    this.app = app;
    this.app.on('window-all-closed', this.onWindowAllClosed.bind(this));
    this.app.on('ready', this.create.bind(this));
    this.app.on('activate', this.onActivated.bind(this));
  }
  onWindowAllClosed() {
    this.app.quit();
  }
  create() {
    this.mainWindow = new BrowserWindow(this.windowOptions);
    this.mainWindow.loadFile(this.mainURL);
    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });
    this.isDebug && this.mainWindow.openDevTools();
  }
  onReady() {
    this.create();
  }
  onActivated() {
    if (this.mainWindow === null) {
      this.create();
    }
  }
};
