interface DictionaryItem {
  id: number
  name: string
  significance: string
}

export interface Dictionary {
  root: DictionaryItem
  left: Dictionary | null
  right: Dictionary | null
}
