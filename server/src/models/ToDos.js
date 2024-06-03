import mongoose from "mongoose";

//schemat hoz létre.: define the strucutre of data
const ToDoSchema = new mongoose.Schema(
  {
    titleName: { type: String, require: true },
    todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "todoitem" }],
    author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    done: { type: Boolean },
    deadline: { type: Date },
  },
  { timestamps: true }
);

//setting the schema to the collection. we will have a table name with "users."
export const ToDoModel = mongoose.model("todos", ToDoSchema);
