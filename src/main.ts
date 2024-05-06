import { BinaryTree } from './utils/interface-arvore'
import path from 'path'
import csvToBinaryTree from './utils/csvToBinaryTree'
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
