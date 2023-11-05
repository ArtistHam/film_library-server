const fs = require("fs");

const filmsData = JSON.parse(fs.readFileSync("./src/data/films.json"));

const films = {
  getAll: function (req, res) {
    res.send(filmsData.films);
  },
  get: function (req, res) {
    res.send(`get film ${req.params.fid}`);
  },
};

module.exports = films;
