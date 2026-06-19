// 模擬 formidable 解析後的物件（前端 input name 為 "report"）
const incomingFiles = {
  report: [
    {
      originalFilename: "health-report.pdf",
      filepath: "/tmp/file-9999",
    },
  ],
};

function parseMemberFile(files) {
  const file = files.report?.[0];

  if (!file) {
    console.error("[錯誤] 沒有找到上傳的檔案");
    return;
  }

  console.log(`[解析成功] 檔案名稱為: ${file.originalFilename}`);
  console.log(`[暫存路徑] 檔案位於: ${file.filepath}`);
}

// 測試執行
parseMemberFile(incomingFiles);
