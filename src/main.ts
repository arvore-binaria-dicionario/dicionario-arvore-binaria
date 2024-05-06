import { BinaryTree } from './utils/interface-arvore'
import csvToJson from './utils/csvToJson'
import path from 'path'
const csvFilePath = path.resolve(__dirname, './csv/dicionario.csv')

const dictionary = new BinaryTree()

async function main() {
  console.time('Execution Time')
  try {
    const jsonData = await csvToJson(csvFilePath)
    let id = 1
    for (const element of jsonData.Dictionary) {
      dictionary.insert({
        id,
        name: element.name,
        significance: element.significance,
      })
      id++
    }
    console.log(dictionary.searchMatchingWords('cai'))
  } catch (err) {
    console.error('Erro ao lidar com o arquivo:', err)
  } finally {
    console.timeEnd('Execution Time')
  }
}

main()
