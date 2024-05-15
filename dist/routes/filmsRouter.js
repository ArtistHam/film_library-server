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
const express_1 = __importDefault(require("express"));
// repositories
const film_repository_1 = require("../repositories/film.repository");
// utils
const readFilePromise_1 = require("../utils/readFilePromise");
const getCoursesRouter = () => {
    const router = express_1.default.Router();
    router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newFilm = yield film_repository_1.filmsRepository.createNewFilm({
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
            const filmsData = yield (0, readFilePromise_1.readFilePromise)("./src/data/films.json");
            res.send(JSON.parse(filmsData));
        }
        catch (err) {
            res.send("error occurred");
        }
    }));
    // router.get(
    //   "/:fid",
    //   async (
    //     req: Request<{ fid: string }>,
    //     res: Response<FilmType[] | string>
    //   ) => {
    //     try {
    //       const filmsData = await readFilePromise("./src/data/films.json");
    //       const filmData = JSON.parse(filmsData).find(
    //         (item: FilmType) => item.id === +req.params.fid
    //       );
    //       if (filmData) {
    //         res.send(filmData);
    //       } else {
    //         res.sendStatus(404);
    //       }
    //     } catch (err) {
    //       res.send("error occurred");
    //     }
    //   }
    // );
    // router.put(
    //   "/:fid",
    //   async (
    //     req: Request<{ fid: string }, {}, inUpdateFilmDto>,
    //     res: Response<string>
    //   ) => {
    //     try {
    //       const filmsData = await readFilePromise("./src/data/films.json");
    //       const newFilmsData = JSON.parse(filmsData).map((item: FilmType) => {
    //         if (item.id === +req.params.fid) {
    //           const { name, description, country, genre, director, actors } =
    //             req.body;
    //           return {
    //             id: item.id,
    //             name: name || item.name,
    //             description: description || item.description,
    //             country: country || item.country,
    //             genre: genre || item.genre,
    //             director: director || item.director,
    //             actors: actors || item.actors,
    //             poster: item.poster,
    //           };
    //         } else {
    //           return item;
    //         }
    //       });
    //       res.sendStatus(200);
    //       const test = await writeFilePromise(
    //         "./src/data/films.json",
    //         JSON.stringify(newFilmsData)
    //       );
    //     } catch (err) {
    //       res.send("error occurred");
    //     }
    //   }
    // );
    // router.delete(
    //   "/:fid",
    //   async (req: Request<{ fid: string }>, res: Response<string>) => {
    //     try {
    //       const filmsData = await readFilePromise("./src/data/films.json");
    //       const newFilmsData = JSON.parse(filmsData).filter(
    //         (item: FilmType) => item.id !== +req.params.fid
    //       );
    //       res.sendStatus(204);
    //       const test = await writeFilePromise(
    //         "./src/data/films.json",
    //         JSON.stringify(newFilmsData)
    //       );
    //     } catch (err) {
    //       console.log(err);
    //       res.send("error occurred");
    //     }
    //   }
    // );
    return router;
};
exports.getCoursesRouter = getCoursesRouter;
