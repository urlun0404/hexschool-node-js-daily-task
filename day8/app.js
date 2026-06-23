const express = require("express");
const app = express();

// 路由一：取得單一教練資料
app.get("/coaches/:id", (req, res) => {
  const { id: coachId } = req.params;
  res.status(200).json({ status: "success", coachId });
});

// 路由二：篩選課程列表
app.get("/courses", (req, res) => {
  const { type, limit } = req.query;
  res.status(200).json({ status: "success", filter: { type, limit } });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`伺服器啟動中：http://localhost:${PORT}`);
});
