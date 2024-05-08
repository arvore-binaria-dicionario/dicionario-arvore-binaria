"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMatchingWords = exports.searchSpecificElementRecursively = void 0;
const compare_string_by_letter_value_1 = __importDefault(require("../compare-string-by-letter-value"));
function searchSpecificElementRecursively(node, key) {
    if (node === null) {
        return null;
    }
    if (node.root.name === key) {
        return node.root;
    }
    const direction = (0, compare_string_by_letter_value_1.default)(node.root.name, key);
    if (direction === 'left') {
        return searchSpecificElementRecursively(node.left, key);
    }
    return searchSpecificElementRecursively(node.right, key);
}
exports.searchSpecificElementRecursively = searchSpecificElementRecursively;
function searchMatchingWords(node, keyword) {
    if (keyword.length < 3) {
        throw new Error('Keyword must be at least 3 characters long');
    }
    const matchingItems = [];
    searchRecursively(node, keyword, matchingItems);
    return matchingItems;
}
exports.searchMatchingWords = searchMatchingWords;
function searchRecursively(node, keyword, matchingItems) {
    if (!node || matchingItems.length >= 5) {
        return;
    }
    if (node.root.name.toLowerCase().startsWith(keyword.toLowerCase())) {
        matchingItems.push(node.root);
        if (matchingItems.length >= 5) {
            return;
        }
    }
    searchRecursively(node.left, keyword, matchingItems);
    searchRecursively(node.right, keyword, matchingItems);
}
