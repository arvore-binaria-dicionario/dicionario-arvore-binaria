type Insert = 'left' | 'right'

export default function (rootValues: string, compare: string): Insert {
  const rootWithoutSpaces = removeAllSpaces(rootValues).toLowerCase()
  const compareWithoutSpaces = removeAllSpaces(compare).toLowerCase()

  console.log(compareWithoutSpaces)

  const result: number = rootWithoutSpaces.localeCompare(
    compareWithoutSpaces,
    undefined,
    {
      sensitivity: 'base',
    },
  )

  if (result === 1 || result === 0) {
    return 'left'
  }

  return 'right'
}

function removeAllSpaces(str: string) {
  return str.split(' ').join('')
}
