const { app, BrowserWindow, ipcMain } = require("electron/main");
const path = require("node:path");
const { exec } = require("child_process");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 200,
    resizable: false,
    maximizable: false,
    minimizable: false,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "src/assets/system-shutdown.png"),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("src/index.html");

  setTimeout(() => {
    app.quit();
  }, 60000);

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  ipcMain.on("close-app", () => {
    setTimeout(() => {
      app.quit();
    }, 30);
  });

  ipcMain.on("restart", () => {
    setTimeout(() => {
      exec("/usr/local/bin/safe_restart.sh", (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Stderr: ${stderr}`);
          return;
        }
        console.log(`Stdout: ${stdout}`);
      });
    }, 50);
  });

  ipcMain.on("shutdown", () => {
    setTimeout(() => {
      exec("sudo /usr/local/bin/safe_shutdown.sh", (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Stderr: ${stderr}`);
          return;
        }
        console.log(`Stdout: ${stdout}`);
      });
    }, 50);
  });
}
