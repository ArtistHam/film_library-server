"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// node_modules
const express_1 = __importDefault(require("express"));
// controllers
const filmsRouter_1 = require("./routes/filmsRouter");
const testRouter_1 = require("./routes/testRouter");
exports.app = (0, express_1.default)();
exports.app.use("/static", express_1.default.static("./src/static/"));
exports.app.use(express_1.default.json());
// Films
exports.app.use("/api/films", (0, filmsRouter_1.getCoursesRouter)());
// Test
exports.app.use("/__test__", (0, testRouter_1.getTestRouter)());
