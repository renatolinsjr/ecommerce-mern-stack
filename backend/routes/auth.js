const router = require("express").Router();
const User = require("../models/User");
const CryptoJS  = require("crypto-js");
const jwt  = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password: CryptoJS.AES.encrypt(
      password,
      process.env.PASS_SEC
    ).toString()
  });

  try {
    let savedUser = await newUser.save();
    savedUser.password = "XXX";
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn:"3d"}
    );


    const { username, email, isAdmin } = user._doc;

    res.status(200).json({ username, email, isAdmin, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;