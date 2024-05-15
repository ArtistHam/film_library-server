// node_modules
import express from "express";
// services
import { filmsService } from "../services/film.servise";
// types
import { Request, Response } from "express";
import { outFilmsCreateDto } from "../dto/outFilms.dto";
import { inUpdateFilmDto } from "../dto/inUpdateFilm.dto";
import { inCreateFilmDto } from "../dto/inCreateFilm.dto";
import { outCreateFilmDto } from "../dto/outCreateFilm.dto";

export const getCoursesRouter = () => {
  const router = express.Router();

  router.post(
    "/",
    async (
      req: Request<{}, {}, inCreateFilmDto>,
      res: Response<outCreateFilmDto | string>
    ) => {
      try {
        const newFilm = await filmsService.createNewFilm({
          name: req.body.name,
          description: req.body.description,
          country: req.body.country,
          genre: req.body.genre,
          director: req.body.director,
          actors: req.body.actors,
          poster: "http://localhost:5000/static/placeholder.png",
        });
        res.send(newFilm);
      } catch (err) {
        console.log(err);
        res.send("error occurred");
      }
    }
  );

  router.get(
    "/",
    async (req: Request, res: Response<outFilmsCreateDto | string>) => {
      try {
        const filmsData = await filmsService.getAllFilms();
        res.send(filmsData);
      } catch (err) {
        res.send("error occurred");
      }
    }
  );

  router.get(
    "/:fid",
    async (req: Request<{ fid: string }>, res: Response<FilmType | string>) => {
      try {
        const filmData = await filmsService.getFilmById(+req.params.fid);
        if (filmData) {
          res.send(filmData);
        } else {
          res.sendStatus(404);
        }
      } catch (err) {
        res.send("error occurred");
      }
    }
  );

  router.put(
    "/:fid",
    async (
      req: Request<{ fid: string }, {}, inUpdateFilmDto>,
      res: Response<string>
    ) => {
      try {
        await filmsService.editFilm(+req.params.fid, req.body);
        res.sendStatus(200);
      } catch (err) {
        res.send("error occurred");
      }
    }
  );

  router.delete(
    "/:fid",
    async (req: Request<{ fid: string }>, res: Response<string>) => {
      try {
        await filmsService.deleteFilm(+req.params.fid);
        res.sendStatus(204);
      } catch (err) {
        console.log(err);
        res.send("error occurred");
      }
    }
  );

  return router;
};
