"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// utils
const readFilePromise_1 = require("../utils/readFilePromise");
const writeFilePromise_1 = require("../utils/writeFilePromise");
const films = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const filmsData = yield (0, readFilePromise_1.readFilePromise)("./src/data/films.json");
            let filmsDataJSON = JSON.parse(filmsData);
            let newFilm = {
                id: filmsDataJSON[filmsDataJSON.length - 1].id + 1,
                name: req.body.name || "Крутой фильм",
                description: req.body.description || "Cool movie, 1999, 220 мин.",
                country: req.body.country || "США",
                genre: req.body.genre || "Комедия",
                director: req.body.director || "Василий Пятенко",
                actors: req.body.actors || "Анна Лавренко",
                poster: "http://localhost:5000/static/placeholder.png",
            };
            res.send(newFilm);
            filmsDataJSON.push(newFilm);
            const test = yield (0, writeFilePromise_1.writeFilePromise)("./src/data/films.json", JSON.stringify(filmsDataJSON));
        }
        catch (err) {
            console.log(err);
            res.send("error occurred");
        }
    }),
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const filmsData = yield (0, readFilePromise_1.readFilePromise)("./src/data/films.json");
            res.send(JSON.parse(filmsData));
        }
        catch (err) {
            res.send("error occurred");
        }
    }),
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const filmsData = yield (0, readFilePromise_1.readFilePromise)("./src/data/films.json");
            const filmData = JSON.parse(filmsData).find((item) => item.id === +req.params.fid);
            if (filmData) {
                res.send(filmData);
            }
            else {
                res.sendStatus(404);
            }
        }
        catch (err) {
            res.send("error occurred");
        }
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const filmsData = yield (0, readFilePromise_1.readFilePromise)("./src/data/films.json");
            const newFilmsData = JSON.parse(filmsData).map((item) => {
                if (item.id === +req.params.fid) {
                    const { name, description, country, genre, director, actors } = req.body;
                    return {
                        id: item.id,
                        name: name || item.name,
                        description: description || item.description,
                        country: country || item.country,
                        genre: genre || item.genre,
                        director: director || item.director,
                        actors: actors || item.actors,
                        poster: item.poster,
                    };
                }
                else {
                    return item;
                }
            });
            res.sendStatus(200);
            const test = yield (0, writeFilePromise_1.writeFilePromise)("./src/data/films.json", JSON.stringify(newFilmsData));
        }
        catch (err) {
            res.send("error occurred");
        }
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const filmsData = yield (0, readFilePromise_1.readFilePromise)("./src/data/films.json");
            const newFilmsData = JSON.parse(filmsData).filter((item) => item.id !== +req.params.fid);
            res.sendStatus(204);
            const test = yield (0, writeFilePromise_1.writeFilePromise)("./src/data/films.json", JSON.stringify(newFilmsData));
        }
        catch (err) {
            console.log(err);
            res.send("error occurred");
        }
    }),
};
exports.default = films;
