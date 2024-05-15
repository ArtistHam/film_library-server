// repositories
import { filmsRepository } from "../repositories/film.repository";
// utils
import { readFilePromise } from "../utils/readFilePromise";
import { writeFilePromise } from "../utils/writeFilePromise";

export const filmsService = {
  createNewFilm: async (data: createNewFilmType) => {
    let newData = {
      name: data.name || "Крутой фильм",
      description: data.description || "Cool movie, 1999, 220 мин.",
      country: data.country || "США",
      genre: data.genre || "Комедия",
      director: data.director || "Василий Пятенко",
      actors: data.actors || "Анна Лавренко",
      poster: data.poster,
    };

    const newFilm = await filmsRepository.createNewFilm(newData);

    return JSON.parse(newFilm);
  },
  getAllFilms: async () => {
    const filmsData = await filmsRepository.getAllFilms();
    return JSON.parse(filmsData);
  },
  getFilmById: async (id: number) => {
    const filmData = await filmsRepository.getFilmById(id);

    if (filmData) {
      return filmData;
    } else {
      return null;
    }
  },
  editFilm: async (id: number, data: editFilmType) => {
    await filmsRepository.editFilm(id, data);
  },
  deleteFilm: async (id: number) => {
    await filmsRepository.deleteFilm(id);
  },
};
