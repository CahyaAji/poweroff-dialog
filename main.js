const { app, BrowserWindow } = require("electron/main");
const path = require("node:path");

function createWindow() {
  const windowScreen = new BrowserWindow({
    width: 400,
    height: 200,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "src/assets/system-shutdown.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  windowScreen.loadFile("src/index.html");
}

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
