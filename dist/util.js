"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyDomino = void 0;
const domino = require("domino");
const fs_1 = require("fs");
function applyDomino(global, templatePath) {
    const template = fs_1.readFileSync(templatePath).toString();
    const win = domino.createWindow(template);
    global['window'] = win;
    global['document'] = win.document;
    global['navigator'] = win.navigator;
    Object.defineProperty(win.document.body.style, 'transform', createTransformOptions());
    global['CSS'] = null;
    global['Prism'] = null;
    global['MutationObserver'] = getMockMutationObserver();
}
exports.applyDomino = applyDomino;
function createTransformOptions() {
    const value = () => ({
        enumerable: true,
        configurable: true
    });
    return { value };
}
function getMockMutationObserver() {
    return class {
        observe(node, options) {
        }
        disconnect() {
        }
        takeRecords() {
            return [];
        }
    };
}
