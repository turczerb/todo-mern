import mongoose from "mongoose";

//i have to tell how thesse will look like

//schemat hoz létre.: define the strucutre of data
const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

//setting the schema to the collection. we will have a table name with "users."
export const UserModel = mongoose.model("users", UserSchema);
