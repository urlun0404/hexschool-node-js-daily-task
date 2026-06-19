const http = require("node:http");
const path = require("node:path");

require("dotenv").config({ path: path.join(__dirname, ".env") });

const serverPort = process.env.SERVER_PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("「<h2>歡迎來到我的第一個 Node.js 網站！</h2>」;");
  res.end();
});

server.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});
