const express = require("express");
const router = express.Router();

// GET /
router.get("/", (req, res) => {
  res.status(200).json({ status: "success", message: "所有會員列表" });
});

// GET /:id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ status: "success", memberId: id });
});

module.exports = router;
