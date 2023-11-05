const express = require("express");
const app = express();
const port = 5000;

var users = {
  list: function (req, res) {
    res.send("user list");
  },

  get: function (req, res) {
    res.send("user " + req.params.uid);
  },

  delete: function (req, res) {
    res.send("delete users");
  },
};

// General

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// User

app.get("/users", users.list);
app.get("/user/:uid", users.get);
app.delete("/user", users.delete);

// Posts

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
