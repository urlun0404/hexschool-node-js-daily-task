const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    res.write("歡迎來到健身房系統");
    res.end();
    return;
  }

  if (req.url === "/api/v1/packages" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.write(JSON.stringify({ status: "success", data: "方案列表" }));
    res.end();
    return;
  }

  res.writeHead(404, {
    "Content-Type": "text/plain; charset=utf-8",
  });
  res.write("路由不存在");
  res.end();
});

// 監聽 3000 port
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
