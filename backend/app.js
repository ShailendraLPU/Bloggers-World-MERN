if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");

const app = express();

const mongoose = require("mongoose");

const seedDb = require("./seed");

const BlogRoute = require("./routes/blogRoute");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((e) => {
    console.log("DB connected Succesfully");
  })
  .catch((e) => {
    console.log(e.message);
  });

app.use(express.json());

app.use(BlogRoute);
// app.use(express.urlencoded({ extended: false }));
// seedDb();

app.listen(process.env.PORT || 8080, () => {
  console.log("Server Listening on 8080...");
});
