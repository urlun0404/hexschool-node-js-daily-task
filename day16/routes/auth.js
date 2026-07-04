const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const SECRET = process.env.JWT_SECRET;

const users = [];
let nextId = 1;

router.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "error", message: "請輸入帳號與密碼" });
    }

    const user = users.find((user) => user.email === email);
    if (user) {
      return res.status(409).json({ status: "error", message: "帳號已存在" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: nextId++, email, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({
      status: "success",
      message: "註冊成功",
      data: {
        id: newUser.id,
        email: newUser.email,
      },
    });
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "error", message: "請輸入帳號與密碼" });
    }

    const user = users.find((user) => user.email === email);
    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "登入失敗，請確認帳號密碼" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ status: "error", message: "登入失敗，請確認帳號密碼" });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({ status: "success", token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
