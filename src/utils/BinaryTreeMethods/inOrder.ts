import { Dictionary, DictionaryItem } from '../interface-arvore'

export function inOrder(node: Dictionary | null): DictionaryItem[] {
  let result: DictionaryItem[] = []
  if (node !== null) {
    result = result.concat(inOrder(node.left))
    result.push(node.root)
    result = result.concat(inOrder(node.right))
  }
  return result
}
