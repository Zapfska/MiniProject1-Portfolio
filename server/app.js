//===============================//
//+++++++Dependencies, ect+++++++//
//===============================//
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const MONGOURI =
  "mongodb+srv://database:Hyperpass0!@cluster0.maaco.mongodb.net/profile?retryWrites=true&w=majority";
const cors = require("cors");

//===============================//
//++++++++++MIDDLEWARE+++++++++++//
//===============================//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//===============================//
//++++++++++++ROUTES+++++++++++++//
//===============================//
const postRouter = require("./controllers/postRouter");
app.use("/api/post", postRouter);

//===============================//
//+++++DATABASE CONNECTION+++++++//
//===============================//
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
mongoose.connection.on("error", (err) => {
  console.log("You're disconnected from MongoDB, you should refresh");
});
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log("Coming in loud and clear on ", PORT);
});

module.exports = app;
