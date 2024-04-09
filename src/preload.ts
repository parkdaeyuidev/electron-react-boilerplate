import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  setTest: (payload: string) => ipcRenderer.send("TEST", payload),
});
