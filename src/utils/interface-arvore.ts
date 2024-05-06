import { insertRecursively } from './BinaryTreeMethods/insert'
import { deleteRecursively } from './BinaryTreeMethods/delete'
import {
  searchMatchingWords,
  searchSpecificElementRecursively,
} from './BinaryTreeMethods/search'
import { inOrder } from './BinaryTreeMethods/inOrder'
import { preOrder } from './BinaryTreeMethods/preOrder'
import { postOrder } from './BinaryTreeMethods/posOrder'

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

  public insert(key: DictionaryItem): void {
    this.dictionary = insertRecursively(this.dictionary, key)
  }

  public getDictionary() {
    return this.dictionary
  }

  public delete(key: string): void {
    this.dictionary = deleteRecursively(this.dictionary, key)
  }

  public searchSpecificElement(key: string): DictionaryItem | null {
    return searchSpecificElementRecursively(this.dictionary, key)
  }

  public inOrder(): DictionaryItem[] {
    return inOrder(this.dictionary)
  }

  public preOrder(): DictionaryItem[] {
    return preOrder(this.dictionary)
  }

  public postOrder(): DictionaryItem[] {
    return postOrder(this.dictionary)
  }

  public searchMatchingWords(keyword: string): DictionaryItem[] {
    return searchMatchingWords(this.dictionary, keyword)
  }
}
