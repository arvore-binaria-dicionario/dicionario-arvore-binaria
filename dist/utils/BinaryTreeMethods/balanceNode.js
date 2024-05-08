"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.balanceNode = void 0;
const getBalance_1 = require("./getBalance");
const rotate_1 = require("./rotate");
function balanceNode(node, direction) {
    const balance = (0, getBalance_1.getBalance)(node);
    if (balance > 1 && direction === 'left') {
        return (0, rotate_1.rotateRight)(node);
    }
    if (balance < -1 && direction === 'right') {
        return (0, rotate_1.rotateLeft)(node);
    }
    if (balance > 1 && direction === 'right') {
        node.left = (0, rotate_1.rotateLeft)(node.left);
        return (0, rotate_1.rotateRight)(node);
    }
    if (balance < -1 && direction === 'left') {
        node.right = (0, rotate_1.rotateRight)(node.right);
        return (0, rotate_1.rotateLeft)(node);
    }
    return node;
}
exports.balanceNode = balanceNode;
