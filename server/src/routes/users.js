//login, regi etc

import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js"; //dont forget the js ext at the end!! without the app is not find the model!!!!

//what is this? export this and import in index.js
const router = express.Router();

router.post("/register", async (req, res) => {
  //req bodyba 1 objectbe elküldöm az username and passw
  const { userName, password, email } = req.body;

  const user = await UserModel.findOne({ userName });
  // if user already exists
  if (user) {
    return res.json({ message: "user already exists!" });
  }
  //not exists so i can make a new user and i need to hash the pass
  const hashedPassword = await bcrypt.hash(password, 10);

  // add the stuffs to the database
  const newUser = new UserModel({ userName, password: hashedPassword, email });
  await newUser.save(); //save the database
  res.json({ message: "regi was a success!" });
});
//
//
//
//
//
//login: needs webtoken: represent your login session. token in the req need to send every time as a proof seh/he is the authentikated user
router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  const user = await UserModel.findOne({ userName });

  //if we dont find the user --> tries to login with the user that is not exists!
  if (!user) {
    return res.json({ message: "user does not exist" });
  }
  //user exist we need to check if the passw math? is paassword valid? bycrypt --> hash te pass and check the databases data
  const isPasswordValis = await bcrypt.compare(password, user.password);

  //pass not valid
  if (!isPasswordValis) {
    return res.json({ message: "username or password is not correct" });
  }

  //valid, login process: vreate a token, sign: dataát elraksz? or what? token will be ? secret: verify the user is really autheenticated.?
  const token = jwt.sign({ userName, id: user._id }, "secret");
  res.json({ token, userID: user._id, userName });
});

export { router as userRouter };
