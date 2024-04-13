enum Insert {
  left,
  right,
}

export default function (rootValues: string, compare: string): string {
  const result: number = rootValues.localeCompare(compare, undefined, {
    sensitivity: 'base',
  })

  if (result === 1 || result === 0) {
    return Insert[0]
  }

  return Insert[1]
}
