const { app, BrowserWindow } = require('electron')

app.on('ready', function () {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadFile('./page/index/index.html')
    mainWindow.webContents.openDevTools()
})
