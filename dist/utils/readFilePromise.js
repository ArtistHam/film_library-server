"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFilePromise = void 0;
const fs_1 = __importDefault(require("fs"));
const encoding = "utf8";
const readFilePromise = (path) => {
    return new Promise((resolve, reject) => {
        fs_1.default.readFile(path, { encoding }, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
exports.readFilePromise = readFilePromise;
