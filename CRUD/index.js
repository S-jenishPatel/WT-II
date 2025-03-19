const User = require("./models/User");
const Product = require("./models/Product");
const verifyUser = require("./middleware/auth");

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const atlasUrl = process.env.DATABASE_URL;

mongoose.connect(atlasUrl).then(() => {
  console.log("Connected to DB Server");

  const app = express();

  app.use(cors({ origin: "http://localhost:5173", credentials: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());

  //Sign up (Insert)
  app.post("/User/signup", async (req, res) => {
    const obj = new User({
      UserName: req.body.UserName,
      UserMobile: req.body.UserMobile,
      UserEmail: req.body.UserEmail,
      UserPassword: req.body.UserPassword,
    });

    const data = await obj.save();

    return res.send(data);
  });

  // Login
  app.post("/User/login", async (req, res) => {
    const { UserEmail, UserPassword } = req.body;

    const user = await User.findOne({
      $and: [{ UserEmail: UserEmail }, { UserPassword: UserPassword }],
    });

    if (!user) {
      return res.status(404).send("Invalid Email and Password");
    }

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

    return res
      .status(200)
      .cookie("token", token)
      .send("User Logged In Successfully");
  });

  // Logout
  app.get("/User/logout", verifyUser, async (req, res) => {
    return res.clearCookie("token").send("User Logged Out Successfully");
  });

  //getAll
  app.get("/Product", verifyUser, async (req, res) => {
    const data = await Product.find();
    return res.send(data);
  });

  //getByID
  app.get("/Product/:id", verifyUser, async (req, res) => {
    const data = await Product.findOne({ _id: req.params.id });
    return res.send(data);
  });

  //delete
  app.delete("/Product/:id", verifyUser, async (req, res) => {
    const data = await Product.deleteOne({ _id: req.params.id });
    return res.send(data);
  });

  //insert (Create)
  app.post("/Product", verifyUser, async (req, res) => {
    const obj = new Product({
      ProductName: req.body.ProductName,
      ProductPrice: req.body.ProductPrice,
      ProductImage: req.body.ProductImage,
    });

    const data = await obj.save();

    return res.send(data);
  });

  //update
  app.put("/Product/:id", verifyUser, async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });

    product.ProductName = req.body.ProductName;
    product.ProductPrice = req.body.ProductPrice;
    product.ProductImage = req.body.ProductImage;

    const data = await product.save();

    return res.send(data);
  });

  app.listen(3000, () => {
    console.log("Server started at port 3000");
  });
});
