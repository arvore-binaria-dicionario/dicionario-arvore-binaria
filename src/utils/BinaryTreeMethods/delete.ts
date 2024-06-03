import { Dictionary } from '../interface-arvore'
import { balanceNode } from './balanceNode'
import { minValueNode } from './minValueNode'

export function deleteByName(node: Dictionary | null, name: string): Dictionary | null {
  if (!node) return null;

  if (node.root.name === name) {
    if (!node.left && !node.right) {
      return null;
    }
    if (!node.left) {
      return node.right;
    }
    if (!node.right) {
      return node.left;
    }

    let minValue = minValueNode(node.right);
    node.root = minValue;
    node.right = deleteByName(node.right, minValue.name);
  } else if (node.root.name > name) {
    node.left = deleteByName(node.left, name);
  } else {
    node.right = deleteByName(node.right, name);
  }

  return balanceNode(node, name < node.root.name ? 'left' : 'right');
}
