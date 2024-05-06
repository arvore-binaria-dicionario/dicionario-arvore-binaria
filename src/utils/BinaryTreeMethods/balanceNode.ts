import { Dictionary } from '../interface-arvore'
import { getBalance } from './getBalance'
import { rotateRight, rotateLeft } from './rotate'

export function balanceNode(
  node: Dictionary,
  direction: 'left' | 'right',
): Dictionary {
  const balance = getBalance(node)

  if (balance > 1 && direction === 'left') {
    return rotateRight(node)
  }

  if (balance < -1 && direction === 'right') {
    return rotateLeft(node)
  }

  if (balance > 1 && direction === 'right') {
    node.left = rotateLeft(node.left!)
    return rotateRight(node)
  }

  if (balance < -1 && direction === 'left') {
    node.right = rotateRight(node.right!)
    return rotateLeft(node)
  }

  return node
}
