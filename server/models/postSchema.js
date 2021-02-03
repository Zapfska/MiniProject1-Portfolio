const { Schema, model } = require("mongoose");

const postSchema = Schema({
  title: String,
  content: String,
  author: String,
  img: String,
});

module.exports = model("postSchema", postSchema);
