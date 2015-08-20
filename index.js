'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

// prevent window being GC'd
let mainWindow = null;

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('ready', function () {
	mainWindow = new BrowserWindow({
		width: 600,
		height: 400,
		resizable: false
	});

	mainWindow.loadUrl(`file://${__dirname}/build/index.html`);

	mainWindow.on('closed', function () {
		// deref the window
		// for multiple windows store them in an array
		mainWindow = null;
	});
});
