import { Dictionary, DictionaryItem } from '../interface-arvore'
import compareStrings from '../compare-string-by-letter-value'

import { inOrder } from './inOrder'

export function searchSpecificElementRecursively(
  node: Dictionary | null,
  key: string,
): DictionaryItem | null {
  if (node === null) {
    return null
  }

  if (node.root.name === key) {
    return node.root
  }

  const direction = compareStrings(node.root.name, key)

  if (direction === 'left') {
    return searchSpecificElementRecursively(node.left, key)
  }

  return searchSpecificElementRecursively(node.right, key)
}

export function searchMatchingWords(
  node: Dictionary | null,
  keyword: string,
): DictionaryItem[] {
  if (keyword.length < 3) {
    throw new Error('Keyword must be at least 3 characters long')
  }

  const allItems = inOrder(node)
  const matchingItems = allItems.filter((item) =>
    item.name.toLowerCase().startsWith(keyword.toLowerCase()),
  )

  return matchingItems.slice(0, 5)
}
