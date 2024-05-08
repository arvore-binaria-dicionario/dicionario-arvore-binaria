"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
const insert_1 = require("./BinaryTreeMethods/insert");
const delete_1 = require("./BinaryTreeMethods/delete");
const search_1 = require("./BinaryTreeMethods/search");
const inOrder_1 = require("./BinaryTreeMethods/inOrder");
const preOrder_1 = require("./BinaryTreeMethods/preOrder");
const posOrder_1 = require("./BinaryTreeMethods/posOrder");
class BinaryTree {
    dictionary = null;
    constructor() {
        this.dictionary = null;
    }
    insert(key) {
        this.dictionary = (0, insert_1.insertRecursively)(this.dictionary, key);
    }
    getDictionary() {
        return this.dictionary;
    }
    delete(key) {
        this.dictionary = (0, delete_1.deleteRecursively)(this.dictionary, key);
    }
    searchSpecificElement(key) {
        return (0, search_1.searchSpecificElementRecursively)(this.dictionary, key);
    }
    inOrder() {
        return (0, inOrder_1.inOrder)(this.dictionary);
    }
    preOrder() {
        return (0, preOrder_1.preOrder)(this.dictionary);
    }
    postOrder() {
        return (0, posOrder_1.postOrder)(this.dictionary);
    }
    searchMatchingWords(keyword) {
        return (0, search_1.searchMatchingWords)(this.dictionary, keyword);
    }
}
exports.BinaryTree = BinaryTree;
