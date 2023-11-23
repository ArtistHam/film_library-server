// node_modules
import express from "express";
// modules
import { app } from "./app";

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
