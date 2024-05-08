"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(rootValues, compare) {
    const rootWithoutSpaces = removeAllSpaces(rootValues).toLowerCase();
    const compareWithoutSpaces = removeAllSpaces(compare).toLowerCase();
    const result = rootWithoutSpaces.localeCompare(compareWithoutSpaces, undefined, {
        sensitivity: 'base',
    });
    if (result === 1 || result === 0) {
        return 'left';
    }
    return 'right';
}
exports.default = default_1;
function removeAllSpaces(str) {
    return str.split(' ').join('');
}
