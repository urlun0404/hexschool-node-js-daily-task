// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ status: "success", message: "歡迎來到健身房 API" });
});

app.get("/api/v1/members", (req, res) => {
  res.status(200).json({
    status: "success",
    data: [{ name: "王小明" }, { name: "李小花" }],
  });
});

app.use((req, res) => {
  res.status(404).json({ status: "error", message: "路由不存在" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`伺服器啟動中：http://localhost:${PORT}`);
});
