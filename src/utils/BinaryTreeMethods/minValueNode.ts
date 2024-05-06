import { Dictionary, DictionaryItem } from '../interface-arvore'

export function minValueNode(node: Dictionary): DictionaryItem {
  let current = node

  while (current.left) {
    current = current.left
  }

  return current.root
}
