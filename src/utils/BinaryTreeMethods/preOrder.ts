import { Dictionary, DictionaryItem } from '../interface-arvore'

export function preOrder(node: Dictionary | null): DictionaryItem[] {
  let result: DictionaryItem[] = []
  if (node !== null) {
    result.push(node.root)
    result = result.concat(preOrder(node.left))
    result = result.concat(preOrder(node.right))
  }
  return result
}
