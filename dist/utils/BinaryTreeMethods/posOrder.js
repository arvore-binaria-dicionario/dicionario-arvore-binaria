"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postOrder = void 0;
function postOrder(node) {
    let result = [];
    if (node !== null) {
        result = result.concat(postOrder(node.left));
        result = result.concat(postOrder(node.right));
        result.push(node.root);
    }
    return result;
}
exports.postOrder = postOrder;
