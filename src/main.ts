import { BinaryTree } from './utils/interface-arvore'
import path from 'path'
import csvToBinaryTree from './utils/csvToBinaryTree'
import { app, BrowserWindow } from 'electron'

const csvFilePath = path.resolve(__dirname, './csv/dicionario.csv')

const dictionary = new BinaryTree()

async function main() {
  console.time('Execution Time')
  try {
    await csvToBinaryTree(csvFilePath, dictionary)
  } catch (err) {
    console.error('Erro ao lidar com o arquivo:', err)
  } finally {
    console.timeEnd('Execution Time')
  }
}

main()

let mainWindow: Electron.BrowserWindow | null

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  mainWindow.loadFile('index.html')

  mainWindow.on('closed', () => {
    mainWindow = null
  })
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
