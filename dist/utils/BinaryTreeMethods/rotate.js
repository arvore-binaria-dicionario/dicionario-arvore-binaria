"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateLeft = exports.rotateRight = void 0;
function rotateRight(y) {
    const x = y.left;
    const T2 = x.right;
    x.right = y;
    y.left = T2;
    return x;
}
exports.rotateRight = rotateRight;
function rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;
    y.left = x;
    x.right = T2;
    return y;
}
exports.rotateLeft = rotateLeft;
