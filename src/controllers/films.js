const readFilePromise = require("../utils/readFilePromise");

const films = {
  getAll: async (req, res) => {
    try {
      const filmsData = await readFilePromise("./src/data/films.json");
      res.send(JSON.parse(filmsData).films);
    } catch (err) {
      res.send("error occurred");
    }
  },
  get: function (req, res) {
    res.send(`get film ${req.params.fid}`);
  },
};

module.exports = films;
