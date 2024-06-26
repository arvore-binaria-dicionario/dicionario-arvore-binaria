import { Dictionary, DictionaryItem } from '../interface-arvore'
import compareStringByLetterValue from '../compare-string-by-letter-value'
import { balanceNode } from './balanceNode'

export function insertRecursively(
  node: Dictionary | null,
  key: DictionaryItem,
): Dictionary {
  if (!node) return { root: key, left: null, right: null }

  const comparisonResult = compareStringByLetterValue(node.root.name, key.name)

  if (comparisonResult === 'left') {
    node.left = node.left
      ? insertRecursively(node.left, key)
      : { root: key, left: null, right: null }
  } else if (comparisonResult === 'right') {
    node.right = node.right
      ? insertRecursively(node.right, key)
      : { root: key, left: null, right: null }
  } else {
    return node
  }

  node = balanceNode(node, comparisonResult)

  return node
}
