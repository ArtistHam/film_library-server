// utils
import { readFilePromise } from "../utils/readFilePromise";
import { writeFilePromise } from "../utils/writeFilePromise";

type createNewFilmType = {
  name: string;
  description: string;
  country: string;
  genre: string;
  director: string;
  actors: string;
  poster: string;
};

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

type editFilmType = {
  name?: string;
  description?: string;
  country?: string;
  genre?: string;
  director?: string;
  actors?: string;
  poster?: string;
};

export const filmsRepository = {
  createNewFilm: async (data: createNewFilmType) => {
    const filmsData = await readFilePromise("./src/data/films.json");
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
    writeFilePromise("./src/data/films.json", JSON.stringify(filmsDataJSON));

    return newFilm;
  },
  getAllFilms: async () => {
    const filmsData = await readFilePromise("./src/data/films.json");
    return filmsData;
  },
  getFilmById: async (id: number) => {
    const filmsData = await readFilePromise("./src/data/films.json");
    const filmData: FilmType = JSON.parse(filmsData).find(
      (item: FilmType) => +item.id === +id
    );
    if (filmData) {
      return filmData;
    } else {
      return null;
    }
  },
  editFilm: async (id: number, data: editFilmType) => {
    const filmsData = await readFilePromise("./src/data/films.json");
    const newFilmsData = JSON.parse(filmsData).map((item: FilmType) => {
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
      } else {
        return item;
      }
    });

    writeFilePromise("./src/data/films.json", JSON.stringify(newFilmsData));
  },
  deleteFilm: async (id: number) => {
    const filmsData = await readFilePromise("./src/data/films.json");
    const newFilmsData = JSON.parse(filmsData).filter(
      (item: FilmType) => +item.id !== +id
    );
    writeFilePromise(
      "./src/data/films.json",
      JSON.stringify(newFilmsData)
    );
  }
};
