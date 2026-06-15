// app.js
// 1. 引入自訂模組
const fileManager = require("./fileManager");

async function main() {
  // 2. 執行寫入與讀取流程
  await fileManager.saveData("user.txt", "Hello Node.js!");
  await fileManager.loadData("user.txt");
}

main();
