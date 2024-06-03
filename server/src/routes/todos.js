import express from "express";
import { mongoose } from "mongoose";
import { ToDoModel } from "../models/ToDos.js";
import { ToDoItemModel } from "../models/ToDoItem.js";

const router = express.Router();

//first router. GET return all from the database. all witch is this persons todo lists.

//összes todot vissza adja nem csak a sajátot -->kell ami csak sajátot ad vissza!!ehelyettt
router.get("/", async (req, res) => {
  try {
    const response = await ToDoModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

//todo készítése? vagy ez mi
router.post("/", async (req, res) => {
  //create a NEW todo. how it will look like? we have to decide here
  const todo = new ToDoModel({
    ...req.body,
  });
  try {
    const response = await todo.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

export { router as todosRouter };
