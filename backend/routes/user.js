const router = require("express").Router();

//UPDATE
router.put("/:id", (req, res) => {
  res.send("update")
});

// DELETE

router.delete("/:id", (req, res) => {
  res.send("delete")
});

// GET USER

router.get("/find/:id", (req, res) => {
  res.send("get user")
});

// GET ALL USER

router.get("/", (req, res) => {
  res.send("get all user")
});

// GET USER STATS

router.get("/stats", (req, res) => {
  res.send("stats")
});

module.exports = router;