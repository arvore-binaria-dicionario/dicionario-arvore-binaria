export default function (
  rootValues: string,
  compare: string,
): 'left' | 'right' {
  const rootWithoutSpaces = removeAllSpaces(rootValues).toLowerCase()
  const compareWithoutSpaces = removeAllSpaces(compare).toLowerCase()

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
