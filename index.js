const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database/database");
const userController = require("./database/controller/userController");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/signup", userController.signup);
app.post("/api/login", userController.login);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
