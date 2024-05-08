interface DictionaryEntry {
  id: number
  name: string
  significance: string
}

interface Dictionary {
  insert(entry: DictionaryEntry): void
}

async function csvToBinaryTree(
  csvData: string,
  dictionary: Dictionary,
): Promise<void> {
  const lines = csvData.split('\n')
  const headers = lines[0].split(';')
  for (let i = 1; i < lines.length; i++) {
    const data = lines[i].split(';')
    if (data.length === headers.length) {
      const entry: DictionaryEntry = {
        id: i,
        name: data[0],
        significance: data[1].replace(/\r/g, ''),
      }
      dictionary.insert(entry)
    }
  }
}

export default csvToBinaryTree
