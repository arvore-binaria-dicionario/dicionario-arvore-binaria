import { Dictionary } from './utils/interface-arvore'
import compareStringByLetterValue from './utils/compare-string-by-letter-value'

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

console.log(compareStringByLetterValue('cada', 'cacaa'))
