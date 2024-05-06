import { Dictionary } from '../interface-arvore'
import { getHeight } from './getHeight'

export function getBalance(node: Dictionary | null): number {
  if (!node) return 0
  return getHeight(node.left) - getHeight(node.right)
}
