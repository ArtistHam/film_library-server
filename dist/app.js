"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// node_modules
const express_1 = __importDefault(require("express"));
// controllers
const films_1 = __importDefault(require("./controllers/films"));
const reset_1 = __importDefault(require("./controllers/reset"));
exports.app = (0, express_1.default)();
exports.app.use("/static", express_1.default.static("./src/static/"));
exports.app.use(express_1.default.json());
// Films
exports.app.post("/api/films", films_1.default.create);
exports.app.get("/api/films", films_1.default.getAll);
exports.app.get("/api/films/:fid", films_1.default.get);
exports.app.put("/api/films/:fid", films_1.default.update);
exports.app.delete("/api/films/:fid", films_1.default.delete);
// Test
exports.app.delete("/__test__/films", reset_1.default.reset);
