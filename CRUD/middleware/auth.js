const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).send("Unauthorized Request");
    }

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

    console.log(decodedToken);

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      return res.status(401).send("Invalid Token");
    }

    return next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = verifyUser;
