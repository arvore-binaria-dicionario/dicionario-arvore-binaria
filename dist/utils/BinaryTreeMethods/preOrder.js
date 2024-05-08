"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preOrder = void 0;
function preOrder(node) {
    let result = [];
    if (node !== null) {
        result.push(node.root);
        result = result.concat(preOrder(node.left));
        result = result.concat(preOrder(node.right));
    }
    return result;
}
exports.preOrder = preOrder;
