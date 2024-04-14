type Insert = 'left' | 'right'

export default function (rootValues: string, compare: string): Insert {
  const result: number = rootValues.localeCompare(compare, undefined, {
    sensitivity: 'base',
  })

  if (result === 1 || result === 0) {
    return 'left'
  }

  return 'right'
}
