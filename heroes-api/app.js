const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const heroRoute = require("./routes/hero.route");
const authRoute = require("./routes/auth.route");

app.use("/api/heroes", heroRoute);
app.use("/api/auth", authRoute);

app.listen(8000, () => {
  console.log("Open http://localhost:8000");
});
