import fs from 'fs'
import readline from 'readline'
import { BinaryTree } from './interface-arvore'

interface DictionaryEntry {
  id: number
  name: string
  significance: string
}

export default async function csvToBinaryTree(
  csvFilePath: string,
  dictionary: BinaryTree,
): Promise<void> {
  try {
    const fileStream = fs.createReadStream(csvFilePath, 'utf-8')
    const rl = createReadlineInterface(fileStream)

    let headers: string[] = []
    let id = 1

    rl.on('line', (line: string) => {
      const data = line.split(';')
      if (!headers.length) {
        headers = data
      } else if (data.length === headers.length) {
        const entry: DictionaryEntry = {
          id,
          name: data[0],
          significance: data[1].replace(/\r/g, ''),
        }
        dictionary.insert(entry)
        id++
      }
    })

    return handleReadlineEvents(rl)
  } catch (err) {
    console.error('Error reading the file:', err)
    throw err
  }
}

function createReadlineInterface(fileStream: fs.ReadStream) {
  return readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  })
}

function handleReadlineEvents(rl: readline.Interface): Promise<void> {
  return new Promise((resolve, reject) => {
    rl.on('close', () => {
      resolve()
    })

    rl.on('error', (err: Error) => {
      reject(err)
    })
  })
}
