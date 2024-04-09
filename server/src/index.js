//const express = require("express"); this is the default way it is ok .
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";

const app = express(); // generate a version of our API
app.use(express.json()); //express json parserű frontend to backend when i send the data
app.use(cors()); //  your app needs to request resources from a different origin.
app.use("/auth", userRouter); //?? what is it the endpoint automatically will be stored in the auth route

//connect to the database
mongoose.connect(
  // "mongodb+srv://turczerb:XsLwnqJNoEBcvS04@todo.qfjoikf.mongodb.net/?retryWrites=true&w=majority&appName=todo"
  "mongodb+srv://turczerb:6nM3U9iaU2Zgv89B@cluster0.bkzuidr.mongodb.net/todo_test?retryWrites=true&w=majority&appName=Cluster0"

  //"mongodb+srv://user123:Password123Tech@test.m6cb1nv.mongodb.net/recipetest?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("server is running :"));

//mongodb+srv://turczerb:XsLwnqJNoEBcvS04@todo.qfjoikf.mongodb.net/?retryWrites=true&w=majority&appName=todo
//pw  XsLwnqJNoEBcvS04
// connection string mongodb+srv://turczerb:<password>@todo.qfjoikf.mongodb.net/

// new passw    6nM3U9iaU2Zgv89B

//valami mongodb+srv://turczerb:6nM3U9iaU2Zgv89B@cluster0.bkzuidr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
