"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// node_modules
const express_1 = __importDefault(require("express"));
// controllers
const films_1 = __importDefault(require("./controllers/films"));
const app = (0, express_1.default)();
const port = 5000;
app.use("/static", express_1.default.static("./src/static/"));
// Films
app.get("/films", films_1.default.getAll);
app.get("/film/:fid", films_1.default.get);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
