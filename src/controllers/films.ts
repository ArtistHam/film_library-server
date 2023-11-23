// node_modules
import fs from "fs";
// utils
import { readFilePromise } from "../utils/readFilePromise";
import { writeFilePromise } from "../utils/writeFilePromise";
// types
import { Request, Response } from "express";
import { outFilmsCreateDto } from "../dto/outFilms.dto";
import { inUpdateFilmDto } from "../dto/inUpdateFilm.dto";
import { inCreateFilmDto } from "../dto/inCreateFilm.dto";
import { outCreateFilmDto } from "../dto/outCreateFilm.dto";

type FilmType = {
  id: number;
  name: string;
  description: string;
  country: string;
  genre: string;
  director: string;
  actors: string;
  poster: string;
};

const films = {
  create: async (
    req: Request<{}, {}, inCreateFilmDto>,
    res: Response<outCreateFilmDto | string>
  ) => {
    try {
      const filmsData = await readFilePromise("./src/data/films.json");
      let filmsDataJSON = JSON.parse(filmsData);
      let newFilm: FilmType = {
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
      const test = await writeFilePromise(
        "./src/data/films.json",
        JSON.stringify(filmsDataJSON)
      );
    } catch (err) {
      console.log(err);
      res.send("error occurred");
    }
  },
  getAll: async (req: Request, res: Response<outFilmsCreateDto | string>) => {
    try {
      const filmsData = await readFilePromise("./src/data/films.json");
      res.send(JSON.parse(filmsData));
    } catch (err) {
      res.send("error occurred");
    }
  },
  get: async (
    req: Request<{ fid: string }>,
    res: Response<FilmType[] | string>
  ) => {
    try {
      const filmsData = await readFilePromise("./src/data/films.json");
      const filmData = JSON.parse(filmsData).find(
        (item: FilmType) => item.id === +req.params.fid
      );
      if (filmData) {
        res.send(filmData);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      res.send("error occurred");
    }
  },
  update: async (
    req: Request<{ fid: string }, {}, inUpdateFilmDto>,
    res: Response<string>
  ) => {
    try {
      const filmsData = await readFilePromise("./src/data/films.json");
      const newFilmsData = JSON.parse(filmsData).map((item: FilmType) => {
        if (item.id === +req.params.fid) {
          const { name, description, country, genre, director, actors } =
            req.body;
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
        } else {
          return item;
        }
      });
      res.sendStatus(200);
      const test = await writeFilePromise(
        "./src/data/films.json",
        JSON.stringify(newFilmsData)
      );
    } catch (err) {
      res.send("error occurred");
    }
  },
  delete: async (req: Request<{ fid: string }>, res: Response<string>) => {
    try {
      const filmsData = await readFilePromise("./src/data/films.json");
      const newFilmsData = JSON.parse(filmsData).filter(
        (item: FilmType) => item.id !== +req.params.fid
      );
      res.sendStatus(204);
      const test = await writeFilePromise(
        "./src/data/films.json",
        JSON.stringify(newFilmsData)
      );
    } catch (err) {
      console.log(err);
      res.send("error occurred");
    }
  },
};

export default films;
