"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function csvToBinaryTree(csvData, dictionary) {
    const lines = csvData.split('\n');
    const headers = lines[0].split(';');
    for (let i = 1; i < lines.length; i++) {
        const data = lines[i].split(';');
        if (data.length === headers.length) {
            const entry = {
                id: i,
                name: data[0],
                significance: data[1].replace(/\r/g, ''),
            };
            dictionary.insert(entry);
        }
    }
}
exports.default = csvToBinaryTree;
