import { Dictionary, DictionaryItem } from '../interface-arvore'
import compareStrings from '../compare-string-by-letter-value'

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

  const matchingItems: DictionaryItem[] = []
  searchRecursively(node, keyword, matchingItems)
  return matchingItems
}

function searchRecursively(
  node: Dictionary | null,
  keyword: string,
  matchingItems: DictionaryItem[],
): void {
  if (!node || matchingItems.length >= 5) {
    return
  }

  if (node.root.name.toLowerCase().startsWith(keyword.toLowerCase())) {
    matchingItems.push(node.root)
  }

  searchRecursively(node.left, keyword, matchingItems)
  searchRecursively(node.right, keyword, matchingItems)
}
