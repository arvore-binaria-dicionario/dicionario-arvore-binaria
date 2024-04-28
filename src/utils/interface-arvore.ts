export interface DictionaryItem {
  id: number
  name: string
  significance: string
}

export interface Dictionary {
  root: DictionaryItem
  left: Dictionary | null
  right: Dictionary | null
}

export class BinaryTree {
  dictionary: Dictionary

  constructor(root: DictionaryItem) {
    this.dictionary = {
      root,
      left: null,
      right: null,
    }
  }

  setLeft(left: DictionaryItem) {
    this.dictionary.left = {
      root: left,
      left: null,
      right: null,
    }
  }

  setRight(right: DictionaryItem) {
    this.dictionary.right = {
      root: right,
      left: null,
      right: null,
    }
  }
}
