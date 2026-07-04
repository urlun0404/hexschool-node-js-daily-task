require("dotenv").config();
const cors = require("cors");
const express = require("express");

const authRouter = require("./routes/auth");
const notesRouter = require("./routes/notes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/notes", notesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "找不到路由" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log("伺服器啟動中：http://localhost:3000");
});
