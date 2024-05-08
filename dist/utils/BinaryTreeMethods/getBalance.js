"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
const getHeight_1 = require("./getHeight");
function getBalance(node) {
    if (!node)
        return 0;
    return (0, getHeight_1.getHeight)(node.left) - (0, getHeight_1.getHeight)(node.right);
}
exports.getBalance = getBalance;
