// app.js
const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

async function verifyPassword(password, hash) {
  const match = await bcrypt.compare(password, hash);
  return match;
}

async function main() {
  const hashed = await hashPassword("hello123");
  console.log("雜湊結果：", hashed);

  const correct = await verifyPassword("hello123", hashed);
  console.log("正確密碼比對：", correct);

  const wrong = await verifyPassword("wrongPass", hashed);
  console.log("錯誤密碼比對：", wrong);
}

main();
