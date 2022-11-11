const express = require("express");
const app = express();
const userRoute = require("./modules/users/routes/users.route");
const port = 9000;
const mongoose = require("mongoose");
app.use(express.json());
app.use(userRoute);
app.get("/", (req, res) => res.send("Hello World ..!"));
mongoose
  .connect(
    "mongodb+srv://rwan:rwan@cluster0.lezqyqx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port);
    console.log(`db connected on port ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
