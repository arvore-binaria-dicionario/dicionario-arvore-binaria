"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('electron', {
    getDictionary: async () => {
        return await electron_1.ipcRenderer.invoke('request-dictionary');
    },
});
window.electron.getDictionary().then((data) => {
    console.log(data);
});
