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
        let newFilm = {
            id: filmsDataJSON[filmsDataJSON.length - 1].id + 1,
            name: data.name || "Крутой фильм",
            description: data.description || "Cool movie, 1999, 220 мин.",
            country: data.country || "США",
            genre: data.genre || "Комедия",
            director: data.director || "Василий Пятенко",
            actors: data.actors || "Анна Лавренко",
            poster: data.poster,
        };
        filmsDataJSON.push(newFilm);
        const test = yield (0, writeFilePromise_1.writeFilePromise)("./src/data/films.json", JSON.stringify(filmsDataJSON));
        return newFilm;
    }),
};
