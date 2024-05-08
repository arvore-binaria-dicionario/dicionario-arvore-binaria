"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const csvToBinaryTree_1 = __importDefault(require("./utils/csvToBinaryTree"));
const interface_arvore_1 = require("./utils/interface-arvore");
let mainWindow;
async function createWindow() {
    // Leia o arquivo antes de criar a janela do navegador
    let data;
    try {
        data = await fs_1.default.promises.readFile(path_1.default.join(__dirname, 'csv', 'dicionario.csv'), 'utf8');
    }
    catch (err) {
        if (err instanceof Error) {
            console.error('Error reading the file:', err);
            throw new Error(err.message);
        }
        else {
            throw err;
        }
    }
    // Inicialize a constante dictionary
    const dictionary = new interface_arvore_1.BinaryTree();
    // Passe os dados lidos do arquivo para a função csvToBinaryTree
    await (0, csvToBinaryTree_1.default)(data, dictionary);
    const inOrderArray = dictionary.inOrder();
    electron_1.ipcMain.handle('request-dictionary', async () => {
        console.log('request-dictionary event handler called');
        return inOrderArray;
    });
    // Crie a janela do navegador
    const mainWindow = new electron_1.BrowserWindow({
        webPreferences: {
            preload: path_1.default.join(__dirname, 'preload.js'),
            nodeIntegration: true,
        },
    });
    mainWindow.loadFile(path_1.default.join(__dirname, 'index.html'));
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
