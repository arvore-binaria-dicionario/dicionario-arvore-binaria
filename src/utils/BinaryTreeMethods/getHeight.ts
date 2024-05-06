import { Dictionary } from '../interface-arvore'

export function getHeight(node: Dictionary | null): number {
  if (!node) return 0
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1
}
