import fs from 'fs'
import readline from 'readline'

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
    const fileStream = fs.createReadStream(csvFilePath, 'utf-8')
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    })

    const dictionary: DictionaryEntry[] = []
    let headers: string[] = []

    for await (const line of rl) {
      const data = line.split(';')
      if (!headers.length) {
        headers = data
        continue
      }
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
