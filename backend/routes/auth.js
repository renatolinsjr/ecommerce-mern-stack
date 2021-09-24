const router = require("express").Router();

//REGISTER
router.post("/register", (req, res) => {
  res.send("register")
});

//LOGIN

router.post("/login", (req, res) => {
  res.send("login")
});

module.exports = router;