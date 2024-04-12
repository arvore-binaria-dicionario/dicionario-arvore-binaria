export default function (a: string, b: string): boolean {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  const separatorAInArray = a.split(' ')
  const separatorBInArray = b.split(' ')

  const joinAInString = separatorAInArray.join('')
  const joinBInString = separatorBInArray.join('')

  const arrayA = joinAInString.split('')
  const arrayB = joinBInString.split('')

  for (let i = 0; i < arrayA.length - 1; i++) {
    if
  }
}
