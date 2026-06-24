const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// GET /
app.get("/", (req, res) => {
  res.status(200).json({ status: "success", message: "API 運作中" });
});

// POST /members
app.post("/members", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  res.status(201).json({ status: "success", data: { name } });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`伺服器啟動中：http://localhost:${PORT}`);
});
