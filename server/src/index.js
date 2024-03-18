//const express = require("express"); this is the default way it is ok .
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express(); // generate a version of our API
app.use(express.json()); //express json parserű frontend to backend when i send the data
app.use(cors()); //  your app needs to request resources from a different origin.

app.listen(3001, () => console.log("server is running "));
