"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inOrder = void 0;
function inOrder(node) {
    let result = [];
    if (node !== null) {
        result = result.concat(inOrder(node.left));
        result.push(node.root);
        result = result.concat(inOrder(node.right));
    }
    return result;
}
exports.inOrder = inOrder;
