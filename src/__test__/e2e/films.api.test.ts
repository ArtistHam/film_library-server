import request from "supertest";
import { app } from "../../index";

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
  beforeAll(async () => {
    await request(app).delete("/__test__/films");
  });

  it("get all films", async () => {
    const res = await request(app).get("/api/films");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(defaultData);
  });

  it("get film that don't exist", async () => {
    const res = await request(app).get("/api/films/0");
    expect(res.statusCode).toBe(404);
  });

  it("get film that don't exist", async () => {
    const res = await request(app).get("/api/films/0");
    expect(res.statusCode).toBe(404);
  });

  afterAll(async () => {
    await request(app).delete("/__test__/films");
  });
});
