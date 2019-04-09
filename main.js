/*Constantes*/
const electron = require('electron');
/* app, y BrowserWindows, para utlizar chrome de forma dinamica*/
const { app, BrowserWindow } = electron;

/*Rutas y arhivos*/
const path = require('path');
/* url */
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
};

exports.openWindow = () => {
    let newWin = new BrowserWindow({ width: 800, height: 600 });
    newWin.loadURL(url.format({
        pathname: path.join(__dirname, 'page02.html'),
        protocol: 'file',
        slashes: true
    }));
    newWin.webContents.openDevTools()
}

app.on('ready', createWindow);