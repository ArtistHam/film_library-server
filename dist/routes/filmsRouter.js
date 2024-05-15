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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoursesRouter = void 0;
// node_modules
const express_1 = __importDefault(require("express"));
// services
const film_servise_1 = require("../services/film.servise");
const getCoursesRouter = () => {
    const router = express_1.default.Router();
    router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newFilm = yield film_servise_1.filmsService.createNewFilm({
                name: req.body.name,
                description: req.body.description,
                country: req.body.country,
                genre: req.body.genre,
                director: req.body.director,
                actors: req.body.actors,
                poster: "http://localhost:5000/static/placeholder.png",
            });
            res.send(newFilm);
        }
        catch (err) {
            console.log(err);
            res.send("error occurred");
        }
    }));
    router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const filmsData = yield film_servise_1.filmsService.getAllFilms();
            res.send(filmsData);
        }
        catch (err) {
            res.send("error occurred");
        }
    }));
    router.get("/:fid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const filmData = yield film_servise_1.filmsService.getFilmById(+req.params.fid);
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
    }));
    router.put("/:fid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield film_servise_1.filmsService.editFilm(+req.params.fid, req.body);
            res.sendStatus(200);
        }
        catch (err) {
            res.send("error occurred");
        }
    }));
    router.delete("/:fid", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield film_servise_1.filmsService.deleteFilm(+req.params.fid);
            res.sendStatus(204);
        }
        catch (err) {
            console.log(err);
            res.send("error occurred");
        }
    }));
    return router;
};
exports.getCoursesRouter = getCoursesRouter;
