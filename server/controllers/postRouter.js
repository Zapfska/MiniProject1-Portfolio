const express = require("express");
const route = express.Router();
const postModel = require("../models/postSchema");

//===============================//
//+++++++++INDEX ROUTE+++++++++++//
//===============================//
route.get("/", async (req, res) => {
  try {
    const foundPost = await postModel.find({});
    res.status(200).json(foundPost);
  } catch (error) {
    req.status(400).json(error);
  }
});

//===============================//
//+++++++++DELETE ROUTE++++++++++//
//===============================//
route.delete("/:id", async (req, res) => {
  try {
    const deletePost = await postModel.findByIdAndRemove(req.params.id);
    res.status(200).json(deletePost);
  } catch (error) {
    res.status(400).json(error);
  }
});

//===============================//
//+++++++++UPDATE ROUTE++++++++++//
//===============================//
route.put("/:id", async (req, res) => {
  try {
    const updatePost = await postModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(400).json(error);
  }
});

//===============================//
//+++++++++CREATE ROUTE++++++++++//
//===============================//
route.post("/", async (req, res) => {
  try {
    const createPost = await postModel.create(req.body);
    res.status(200).json(createPost);
  } catch (error) {
    res.status(400).json(error);
  }
});

//===============================//
//++++++++++SHOW ROUTE+++++++++++//
//===============================//
route.get("/:id", async (req, res) => {
  try {
    const findPost = await postModel.findById(req.params.id);
    res.status(200).json(findPost);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = route;
