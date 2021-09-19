const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  res.send("verify token")
};

const verifyTokenAndAuthorization = (req, res, next) => {
  res.send("verify token and auth")
};

const verifyTokenAndAdmin = (req, res, next) => {
  res.send("verify token and admin")
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};