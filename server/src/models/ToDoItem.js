import mongoose from "mongoose";

//schemat hoz létre.: define the strucutre of data
const ToDoItemSchema = new mongoose.Schema({
  titleName: { type: String, require: true },
  done: { type: Boolean },
});

//setting the schema to the collection. we will have a table name with "users."
export const ToDoItemModel = mongoose.model("todoitem", ToDoItemSchema);
