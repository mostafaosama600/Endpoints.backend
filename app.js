const express = require("express");
require("dotenv").config();
const app = express();
const userRoute = require("./modules/users/routes/users.route");
const port = process.env.PORT;
const mongoose = require("mongoose");
app.use(express.json());
app.use(userRoute);
app.get("/", (req, res) => res.send("Hello World ..!"));
mongoose
  .connect(process.env.CONNETION_STRING)
  .then((result) => {
    app.listen(port);
    console.log(`db connected on port ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
