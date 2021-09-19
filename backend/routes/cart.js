const router = require("express").Router();

//CREATE
router.post("/", (req, res) => {
  res.send("create")
});

//UPDATE
router.put("/:id", (req, res) => {
  res.send("update")
});

//DELETE
router.delete("/:id", (req, res) => {
  res.send("delete")
});

//GET USER CART
router.get("/find/:userId", (req, res) => {
  res.send("get user cart")
});

//GET ALL

router.get("/", (req, res) => {
  res.send("get all")
});

module.exports = router;