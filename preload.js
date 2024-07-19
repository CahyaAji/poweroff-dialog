const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("NodeFn", {
  shutdown: () => {
    ipcRenderer.send("shutdown");
  },
  restart: () => {
    ipcRenderer.send("restart");
  },
  cancel: () => {
    ipcRenderer.send("close-app");
  },
});
