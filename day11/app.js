// app.js
const express = require("express");
const cors = require("cors");
const app = express();

const membersRouter = require("./routes/members");

// 設定 Middleware
app.use(cors());
app.use(express.json());

// 設定路由
app.use("/members", membersRouter);

// 掛載 Middleware 與路由

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`伺服器啟動中：http://localhost:${PORT}`);
});
