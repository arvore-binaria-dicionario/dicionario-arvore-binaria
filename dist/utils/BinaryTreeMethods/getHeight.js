"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeight = void 0;
function getHeight(node) {
    if (!node)
        return 0;
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}
exports.getHeight = getHeight;
