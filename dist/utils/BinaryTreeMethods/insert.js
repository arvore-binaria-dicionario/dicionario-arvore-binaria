"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertRecursively = void 0;
const compare_string_by_letter_value_1 = __importDefault(require("../compare-string-by-letter-value"));
const balanceNode_1 = require("./balanceNode");
function insertRecursively(node, key) {
    if (!node)
        return { root: key, left: null, right: null };
    const comparisonResult = (0, compare_string_by_letter_value_1.default)(node.root.name, key.name);
    if (comparisonResult === 'left') {
        node.left = node.left
            ? insertRecursively(node.left, key)
            : { root: key, left: null, right: null };
    }
    else if (comparisonResult === 'right') {
        node.right = node.right
            ? insertRecursively(node.right, key)
            : { root: key, left: null, right: null };
    }
    else {
        return node;
    }
    node = (0, balanceNode_1.balanceNode)(node, comparisonResult);
    return node;
}
exports.insertRecursively = insertRecursively;
