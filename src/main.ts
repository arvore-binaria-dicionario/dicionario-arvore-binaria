import { Dictionary, BinaryTree } from './utils/interface-arvore'
import compareStringByLetterValue from './utils/compare-string-by-letter-value'
import csvToJson from './utils/csvToJson'
import path from 'path'

const dictionary: Dictionary = {
  root: {
    id: 1,
    name: 'A',
    significance: 'A',
  },
  right: null,
  left: null,
}

dictionary.right = {
  root: {
    id: 3,
    name: 'C',
    significance: 'C',
  },
  right: null,
  left: null,
}

dictionary.left = {
  root: {
    id: 2,
    name: 'B',
    significance: 'B',
  },
  right: null,
  left: null,
}

const itemA = {
  id: 1,
  name: 'A',
  significance: 'A',
}

const itemB = {
  id: 2,
  name: 'B',
  significance: 'B',
}

const dictionary2 = new BinaryTree(itemA)
dictionary2.setLeft(itemB)
dictionary2.setRight({
  id: 3,
  name: 'C',
  significance: 'C',
})

const csvFilePath = path.resolve(__dirname, './csv/dicionario.csv')

console.time('Execution Time')
csvToJson(csvFilePath)
  .then((jsonData) => {
    let id = 1
    for (const element of jsonData.Dictionary) {
      dictionary2.setLeft({
        id,
        name: element.name,
        significance: element.significance,
      })
      id++
      console.log(element)
    }
    console.timeEnd('Execution Time')
  })
  .then(() => {
    console.log(dictionary2.getDictionary())
    console.log(compareStringByLetterValue('Zona (1)', 'Zona (10)'))
  })
  .catch((err) => {
    console.error('Erro ao lidar com o arquivo:', err)
  })
