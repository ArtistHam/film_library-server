// node_modules
import express from "express";
// controllers
import { getCoursesRouter } from "./routes/filmsRouter";
import { getTestRouter } from "./routes/testRouter";

export const app = express();

app.use("/static", express.static("./src/static/"));
app.use(express.json());

// Films
app.use("/api/films", getCoursesRouter());

// Test
app.use("/__test__", getTestRouter());
