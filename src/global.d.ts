export {};

declare global {
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

}
