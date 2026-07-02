// app.js
const path = require("node:path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/auth");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = process.env.JWT_SECRET;

// POST /login（公開路由）
app.post("/login", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "登入成功",
    token: jwt.sign({ userId: 1, email: "member@gym.com" }, SECRET, {
      expiresIn: "7d",
    }),
  });
});

// GET /profile（受保護路由）
app.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    status: "success",
    message: "取得使用者資料成功",
    data: req.user,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`伺服器啟動中：http://localhost:${PORT}`);
});
