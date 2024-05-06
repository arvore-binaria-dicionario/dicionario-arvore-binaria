import { Dictionary } from '../interface-arvore'

export function rotateRight(y: Dictionary): Dictionary {
  const x = y.left!
  const T2 = x.right

  x.right = y
  y.left = T2

  return x
}

export function rotateLeft(x: Dictionary): Dictionary {
  const y = x.right!
  const T2 = y.left

  y.left = x
  x.right = T2

  return y
}
