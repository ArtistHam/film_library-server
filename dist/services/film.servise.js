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
exports.filmsService = void 0;
// repositories
const film_repository_1 = require("../repositories/film.repository");
exports.filmsService = {
    createNewFilm: (data) => __awaiter(void 0, void 0, void 0, function* () {
        let newData = {
            name: data.name || "Крутой фильм",
            description: data.description || "Cool movie, 1999, 220 мин.",
            country: data.country || "США",
            genre: data.genre || "Комедия",
            director: data.director || "Василий Пятенко",
            actors: data.actors || "Анна Лавренко",
            poster: data.poster,
        };
        const newFilm = yield film_repository_1.filmsRepository.createNewFilm(newData);
        return JSON.parse(newFilm);
    }),
    getAllFilms: () => __awaiter(void 0, void 0, void 0, function* () {
        const filmsData = yield film_repository_1.filmsRepository.getAllFilms();
        return JSON.parse(filmsData);
    }),
    getFilmById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const filmData = yield film_repository_1.filmsRepository.getFilmById(id);
        if (filmData) {
            return filmData;
        }
        else {
            return null;
        }
    }),
    editFilm: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        yield film_repository_1.filmsRepository.editFilm(id, data);
    }),
    deleteFilm: (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield film_repository_1.filmsRepository.deleteFilm(id);
    }),
};
