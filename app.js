const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
require("./helpers/init_mongodb");
const cors = require("cors");
const Authroute = require("./routes/auth.route");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/Auth", Authroute);

app.listen(PORT, () => {
  console.log(`listening on port ==>>> ${PORT}`);
});
