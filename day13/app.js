// app.js
const path = require("node:path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

function generateToken(user) {
  const { id, email } = user;
  return jwt.sign({ id, email }, SECRET, { expiresIn: "7d" });
}

// 測試執行
const token = generateToken({ id: 1, email: "member@gym.com" });
console.log("簽發的 Token：", token);
