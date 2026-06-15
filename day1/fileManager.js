// fileManager.js
const fs = require("fs/promises");

// 1. 寫入檔案
async function saveData(fileName, content) {
  try {
    await fs.writeFile(fileName, content);
    console.log(`成功寫入檔案: ${fileName}`);
  } catch (error) {
    console.error(`寫入檔案失敗: ${error}`);
  }
}

// 2. 讀取檔案
async function loadData(fileName) {
  try {
    const content = await fs.readFile(fileName, "utf-8");
    console.log(`成功讀取檔案: ${fileName}\n內容: ${content}`);
    return content;
  } catch (error) {
    console.error(`讀取檔案失敗: ${error}`);
  }
}

// 3. 匯出模組
module.exports = {
  saveData,
  loadData,
};
