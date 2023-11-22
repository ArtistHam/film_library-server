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
const writeFilePromise_1 = require("../utils/writeFilePromise");
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
    reset: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            res.sendStatus(200);
            const test = yield (0, writeFilePromise_1.writeFilePromise)("./src/data/films.json", JSON.stringify(testData));
        }
        catch (err) {
            console.log(err);
        }
    }),
};
exports.default = test;
