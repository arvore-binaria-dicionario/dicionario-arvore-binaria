import { Dictionary } from '../interface-arvore'
import compareStringByLetterValue from '../compare-string-by-letter-value'
import { balanceNode } from './balanceNode'
import { minValueNode } from './minValueNode'

export function deleteRecursively(
  node: Dictionary | null,
  key: string,
): Dictionary | null {
  if (!node) return node

  const comparisonResult = compareStringByLetterValue(node.root.name, key)

  if (comparisonResult === 'left') {
    node.left = deleteRecursively(node.left, key)
  } else if (comparisonResult === 'right') {
    node.right = deleteRecursively(node.right, key)
  } else {
    if (!node.left) {
      return node.right
    } else if (!node.right) {
      return node.left
    }

    node.root = minValueNode(node.right)
    node.right = deleteRecursively(node.right, node.root.name)
  }

  node = balanceNode(node, comparisonResult)

  return node
}
