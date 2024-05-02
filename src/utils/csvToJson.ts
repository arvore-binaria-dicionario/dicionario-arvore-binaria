import fs from 'fs/promises' // Importando fs/promises do módulo fs

// Definindo a interface para cada entrada do dicionário
interface DictionaryEntry {
  name: string
  significance: string
}

export default async function csvToJson(csvFilePath: string): Promise<{
  Dictionary: {
    name: string
    significance: string
  }[]
}> {
  try {
    const csvData = await fs.readFile(csvFilePath, 'utf-8')
    const lines = csvData.split('\n')
    const headers = lines[0].split(';')
    const dictionary: DictionaryEntry[] = []

    for (let i = 1; i < lines.length; i++) {
      const data = lines[i].split(';')
      if (data.length === headers.length) {
        const entry: DictionaryEntry = {
          name: data[0],
          significance: data[1].replace(/\r/g, ''),
        }
        dictionary.push(entry)
      }
    }

    return { Dictionary: dictionary }
  } catch (err) {
    console.error('Error reading the file:', err)
    throw err
  }
}
