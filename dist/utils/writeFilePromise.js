"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFilePromise = void 0;
const fs_1 = __importDefault(require("fs"));
const writeFilePromise = (path, json) => {
    return new Promise((resolve, reject) => {
        fs_1.default.writeFile(path, json, (err) => {
            if (err) {
                reject(err);
            }
        });
    });
};
exports.writeFilePromise = writeFilePromise;
