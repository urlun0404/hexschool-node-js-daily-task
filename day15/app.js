// app.js
const express = require("express");
const cors = require("cors");
const app = express();

// 1. 全域 Middleware
app.use(cors());
app.use(express.json());

// 2. 路由
app.get("/members", (req, res) => {
  res.status(200).json({ status: "success", data: "會員列表" });
});

app.get("/error-test", (req, res, next) => {
  try {
    throw new Error("這是一個測試錯誤");
  } catch (error) {
    next(error);
  }
});

// 3. 404 catch-all
app.use((req, res, next) => {
  res.status(404).json({ status: "error", message: "路由不存在" });
});

// 4. 錯誤處理 Middleware
app.use((err, req, res, next) => {
  res.status(500).json({ status: "error", message: err.message });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`伺服器啟動中：http://localhost:${PORT}`);
});
