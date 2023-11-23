"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// modules
const app_1 = require("./app");
const port = 5000;
app_1.app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
