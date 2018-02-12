const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3001;

const app = express();

let filtered = [];

app.use(bodyParser.json());
app.use(cors());





app.get("/api/test", (req, res, next) => {
  res.status(200).json("hello there Im your backend");
});

app.listen(port, () => console.log("im listening"));
