const express = require("express");
const app = express();
const port = 5000;

const films = require("./routes/films");

app.use("/static", express.static("./src/static/"));

// Films
app.get("/films", films.getAll);
app.get("/film/:fid", films.get);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
