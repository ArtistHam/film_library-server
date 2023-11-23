// node_modules
import express from "express";
// controllers
import filmsController from "./controllers/films";
import testController from "./controllers/reset";

export const app = express();

app.use("/static", express.static("./src/static/"));
app.use(express.json());

// Films
app.post("/api/films", filmsController.create);
app.get("/api/films", filmsController.getAll);
app.get("/api/films/:fid", filmsController.get);
app.put("/api/films/:fid", filmsController.update);
app.delete("/api/films/:fid", filmsController.delete);

// Test
app.delete("/__test__/films", testController.reset);