// utils
import { readFilePromise } from "../utils/readFilePromise";
// types
import { Request, Response } from "express";

const films = {
  getAll: async (req: Request, res: Response) => {
    try {
      const filmsData = await readFilePromise("./src/data/films1.json");
      res.send(JSON.parse(filmsData).films);
    } catch (err) {
      res.send("error occurred");
    }
  },
  get: (req: Request, res: Response) => {
    res.send(`get film ${req.params.fid}`);
  },
};

export default films;
