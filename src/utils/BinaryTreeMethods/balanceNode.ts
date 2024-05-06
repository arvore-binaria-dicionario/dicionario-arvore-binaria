import { Dictionary, DictionaryItem } from '../interface-arvore'
import compareStringByLetterValue from '../compare-string-by-letter-value'
import { getBalance } from './getBalance'
import { rotateRight, rotateLeft } from './rotate'

export function balanceNode(node: Dictionary, key: DictionaryItem): Dictionary {
  const balance = getBalance(node)

  if (
    balance > 1 &&
    compareStringByLetterValue(node.left!.root.name, key.name) === 'left'
  ) {
    return rotateRight(node)
  }

  if (
    balance < -1 &&
    compareStringByLetterValue(node.right!.root.name, key.name) === 'right'
  ) {
    return rotateLeft(node)
  }

  if (
    balance > 1 &&
    compareStringByLetterValue(node.left!.root.name, key.name) === 'right'
  ) {
    node.left = rotateLeft(node.left!)
    return rotateRight(node)
  }

  if (
    balance < -1 &&
    compareStringByLetterValue(node.right!.root.name, key.name) === 'left'
  ) {
    node.right = rotateRight(node.right!)
    return rotateLeft(node)
  }

  return node
}
