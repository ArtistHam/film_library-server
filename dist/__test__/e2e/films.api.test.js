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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../../index");
const defaultData = [
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
describe("/films", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).delete("/__test__/films");
    }));
    it("get all films", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).get("/api/films");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(defaultData);
    }));
    it("get film with id 1", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).get("/api/films/0");
        expect(res.statusCode).toBe(404);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.app).delete("/__test__/films");
    }));
});
