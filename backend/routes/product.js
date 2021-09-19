const router = require("express").Router();

// CREATE

router.post("/", (req, res) => {
  res.send("create")
});

// UPDATE

router.put("/:id", (req, res) => {
  res.send("update")
});

// DELETE

router.delete("/:id", (req, res) => {
  res.send("delete")
});

// GET PRODUCT

router.get("/find/:id", (req, res) => {
  res.send("get product")
});

// GET ALL PRODUCTS

router.get("/", (req, res) => {
  res.send("get all products")
});

module.exports = router;