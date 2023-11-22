// node_modules
import fs from "fs";
// utils
import { readFilePromise } from "../utils/readFilePromise";
import { writeFilePromise } from "../utils/writeFilePromise";
// types
import { Request, Response } from "express";

const testData = [
  {
    id: 1,
    name: "Зеленая миля",
    description: "The Green Mile, 1999, 189 мин.",
    country: "США",
    genre: "Драма",
    director: "Фрэнк Дарабонт",
    actors: "Том Хэнкс, Дэвид Морс",
    poster: "http://localhost:5000/static/green_mile.webp",
  },
  {
    id: 2,
    name: "Побег из Шоушенка",
    description: "The Shawshank Redemption, 1994, 189 мин.",
    country: "США",
    genre: "Драма",
    director: "Фрэнк Дарабонт",
    actors: "Тим Роббинс, Морган Фриман",
    poster: "http://localhost:5000/static/shawshank_redemption.webp",
  },
  {
    id: 3,
    name: "Мафия",
    description: "Cool movie, 1999, 220 мин.",
    country: "United Kingdom",
    genre: "Комедия",
    director: "Василий Пятенко",
    actors: "Анна Лавренко",
    poster: "http://localhost:5000/static/placeholder.png",
  },
];

const test = {
  reset: async (req: Request, res: Response) => {
    try {
      res.sendStatus(200);
      const test = await writeFilePromise(
        "./src/data/films.json",
        JSON.stringify(testData)
      );
    } catch (err) {
      console.log(err);
    }
  },
};

export default test;
