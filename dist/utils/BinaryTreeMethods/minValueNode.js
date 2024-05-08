"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minValueNode = void 0;
function minValueNode(node) {
    let current = node;
    while (current.left) {
        current = current.left;
    }
    return current.root;
}
exports.minValueNode = minValueNode;
