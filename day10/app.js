const express = require("express");
const cors = require("cors");
const app = express();

const membersRouter = require("./routes/members");

app.use(cors());
app.use(express.json());
app.use("/members", membersRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`伺服器啟動中：http://localhost:${PORT}`);
});
