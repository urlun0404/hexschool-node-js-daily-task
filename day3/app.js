const dotenv = require("dotenv");
dotenv.config();

function getUploadConfig() {
  return {
    uploadDir: process.env.UPLOAD_DIR || "/tmp",
    maxFileSize: Number(process.env.MAX_FILE_SIZE_MB) || 5,
    gymName: process.env.GYM_NAME || "未命名健身房",
  };
}

// 測試印出
console.log(getUploadConfig());
