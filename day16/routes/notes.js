const express = require("express");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

let notes = [
  {
    userId: 1,
    title: "第一筆筆記",
    content: "這是第一筆筆記的內容",
  },
  {
    userId: 1,
    title: "第二筆筆記",
    content: "這是第二筆筆記的內容",
  },
];

router.get("/", authMiddleware, (req, res) => {
  const userNotes = notes.filter((note) => note.userId === req.user.userId);
  res.status(200).json({ status: "success", data: userNotes });
});

module.exports = router;
