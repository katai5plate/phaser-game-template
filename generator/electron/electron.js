const { app } = require('electron');
const App = require('./electronApp');

new App(app, {
  isDebug: false,
  windowOptions: {
    width: 800,
    height: 600
  }
});
