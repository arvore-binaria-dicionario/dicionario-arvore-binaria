import { app, BrowserWindow, ipcMain } from 'electron'
import fs from 'fs'
import path from 'path'
import csvToBinaryTree from './utils/csvToBinaryTree'
import { BinaryTree } from './utils/interface-arvore'

let mainWindow: BrowserWindow | null

async function createWindow() {
  // Leia o arquivo antes de criar a janela do navegador
  let data: string
  try {
    data = await fs.promises.readFile(
      path.join(__dirname, 'csv', 'dicionario.csv'),
      'utf8',
    )
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error reading the file:', err)
      throw new Error(err.message)
    } else {
      throw err
    }
  }

  // Inicialize a constante dictionary
  const dictionary = new BinaryTree()

  // Passe os dados lidos do arquivo para a função csvToBinaryTree
  await csvToBinaryTree(data, dictionary)

  const inOrderArray = dictionary.inOrder()

  ipcMain.handle('request-dictionary', async () => {
    console.log('request-dictionary event handler called')
    return inOrderArray
  })

  // Crie a janela do navegador
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  })

  mainWindow.loadFile(path.join(__dirname, 'index.html'))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
