"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecursively = void 0;
const compare_string_by_letter_value_1 = __importDefault(require("../compare-string-by-letter-value"));
const balanceNode_1 = require("./balanceNode");
const minValueNode_1 = require("./minValueNode");
function deleteRecursively(node, key) {
    if (!node)
        return node;
    const comparisonResult = (0, compare_string_by_letter_value_1.default)(node.root.name, key);
    if (comparisonResult === 'left') {
        node.left = deleteRecursively(node.left, key);
    }
    else if (comparisonResult === 'right') {
        node.right = deleteRecursively(node.right, key);
    }
    else {
        if (!node.left) {
            return node.right;
        }
        else if (!node.right) {
            return node.left;
        }
        node.root = (0, minValueNode_1.minValueNode)(node.right);
        node.right = deleteRecursively(node.right, node.root.name);
    }
    node = (0, balanceNode_1.balanceNode)(node, comparisonResult);
    return node;
}
exports.deleteRecursively = deleteRecursively;
