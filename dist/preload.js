"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = __importDefault(require("electron"));
electron_1.default.contextBridge.exposeInMainWorld('electron', {
    getDictionary: async () => {
        return await electron_1.default.ipcRenderer.invoke('request-dictionary');
    },
});
document.addEventListener('DOMContentLoaded', () => {
    window.electron.getDictionary().then((data) => {
        console.log(data);
    });
});
