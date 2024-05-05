import compareStringByLetterValue from './compare-string-by-letter-value'

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
  private dictionary: Dictionary | null

  constructor() {
    this.dictionary = null
  }

  public getHeight(node: Dictionary | null): number {
    if (!node) return 0
    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
  }

  private getBalance(node: Dictionary | null): number {
    if (!node) return 0
    return this.getHeight(node.left) - this.getHeight(node.right)
  }

  private rotateRight(y: Dictionary): Dictionary {
    const x = y.left!
    const T2 = x.right

    x.right = y
    y.left = T2

    return x
  }

  private rotateLeft(x: Dictionary): Dictionary {
    const y = x.right!
    const T2 = y.left

    y.left = x
    x.right = T2

    return y
  }

  public insert(key: DictionaryItem): void {
    this.dictionary = this.insertRecursively(this.dictionary, key)
  }

  private insertRecursively(
    node: Dictionary | null,
    key: DictionaryItem,
  ): Dictionary {
    if (!node) return { root: key, left: null, right: null }

    const comparisonResult = compareStringByLetterValue(
      node.root.name,
      key.name,
    )

    if (comparisonResult === 'left') {
      node.left = this.insertRecursively(node.left, key)
    } else if (comparisonResult === 'right') {
      node.right = this.insertRecursively(node.right, key)
    } else {
      return node
    }

    const balance = this.getBalance(node)

    if (
      balance > 1 &&
      compareStringByLetterValue(node.left!.root.name, key.name) === 'left'
    ) {
      return this.rotateRight(node)
    }

    if (
      balance < -1 &&
      compareStringByLetterValue(node.right!.root.name, key.name) === 'right'
    ) {
      return this.rotateLeft(node)
    }

    if (
      balance > 1 &&
      compareStringByLetterValue(node.left!.root.name, key.name) === 'right'
    ) {
      node.left = this.rotateLeft(node.left!)
      return this.rotateRight(node)
    }

    if (
      balance < -1 &&
      compareStringByLetterValue(node.right!.root.name, key.name) === 'left'
    ) {
      node.right = this.rotateRight(node.right!)
      return this.rotateLeft(node)
    }

    return node
  }

  public getDictionary() {
    return this.dictionary
  }
}
