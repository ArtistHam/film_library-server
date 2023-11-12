// node_modules
import express from "express";
// controllers
import filmsController from "./controllers/films";

const app = express();
const port = 5000;

app.use("/static", express.static("./src/static/"));

// Films
app.get("/films", filmsController.getAll);
app.get("/film/:fid", filmsController.get);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
