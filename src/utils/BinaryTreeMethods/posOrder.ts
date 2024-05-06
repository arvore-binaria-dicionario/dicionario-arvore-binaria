import { Dictionary, DictionaryItem } from '../interface-arvore'

export function postOrder(node: Dictionary | null): DictionaryItem[] {
  let result: DictionaryItem[] = []
  if (node !== null) {
    result = result.concat(postOrder(node.left))
    result = result.concat(postOrder(node.right))
    result.push(node.root)
  }
  return result
}
