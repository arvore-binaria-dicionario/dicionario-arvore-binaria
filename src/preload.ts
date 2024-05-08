import electron from 'electron'

interface Word {
  id: number
  name: string
  significance: string
}

declare global {
  interface Window {
    electron: {
      getDictionary: () => Promise<Word[]>
    }
  }
}

electron.contextBridge.exposeInMainWorld('electron', {
  getDictionary: async () => {
    return await electron.ipcRenderer.invoke('request-dictionary')
  },
})

document.addEventListener('DOMContentLoaded', () => {
  window.electron.getDictionary().then((data) => {
    console.log(data)
  })
})
