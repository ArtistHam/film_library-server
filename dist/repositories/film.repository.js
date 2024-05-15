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
exports.filmsRepository = void 0;
// utils
const readFilePromise_1 = require("../utils/readFilePromise");
const writeFilePromise_1 = require("../utils/writeFilePromise");
exports.filmsRepository = {
    createNewFilm: (data) => __awaiter(void 0, void 0, void 0, function* () {
        const filmsData = yield (0, readFilePromise_1.readFilePromise)("./src/data/films.json");
        let filmsDataJSON = JSON.parse(filmsData);
        let newFilm = Object.assign({ id: filmsDataJSON[filmsDataJSON.length - 1].id + 1 }, data);
        filmsDataJSON.push(newFilm);
        (0, writeFilePromise_1.writeFilePromise)("./src/data/films.json", JSON.stringify(filmsDataJSON));
        return JSON.stringify(newFilm);
    }),
    getAllFilms: () => __awaiter(void 0, void 0, void 0, function* () {
        const filmsData = yield (0, readFilePromise_1.readFilePromise)("./src/data/films.json");
        return filmsData;
    }),
    getFilmById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const filmsData = yield (0, readFilePromise_1.readFilePromise)("./src/data/films.json");
        const filmData = JSON.parse(filmsData).find((item) => +item.id === +id);
        return filmData;
    }),
    editFilm: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        const filmsData = yield (0, readFilePromise_1.readFilePromise)("./src/data/films.json");
        const newFilmsData = JSON.parse(filmsData).map((item) => {
            if (+item.id === +id) {
                const { name, description, country, genre, director, actors } = data;
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
        (0, writeFilePromise_1.writeFilePromise)("./src/data/films.json", JSON.stringify(newFilmsData));
    }),
    deleteFilm: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const filmsData = yield (0, readFilePromise_1.readFilePromise)("./src/data/films.json");
        const newFilmsData = JSON.parse(filmsData).filter((item) => +item.id !== +id);
        (0, writeFilePromise_1.writeFilePromise)("./src/data/films.json", JSON.stringify(newFilmsData));
    }),
    getNumbersOfFilms: () => __awaiter(void 0, void 0, void 0, function* () {
        const filmsData = yield (0, readFilePromise_1.readFilePromise)("./src/data/films.json");
        const filmsDataJSON = JSON.parse(filmsData);
        return filmsDataJSON.length;
    }),
};
