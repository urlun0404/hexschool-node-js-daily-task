const fs = require("fs/promises");

function isValidPrice(price) {
  return price > 0;
}

async function wraiteOrderLog(id, price) {
  try {
    const logContent = `訂單編號: ${id}, 金額: ${price}`;
    await fs.writeFile(`./order-${id}.txt`, logContent);
    console.log(`訂單編號 ${id} 儲存成功！`);
  } catch (err) {
    console.error(`訂單編號 ${id} 儲存失敗: ${err.message}`);
  }
}

async function createOrder(orderData) {
  try {
    // 1. 檢查金額是否大於 0 (職責一)
    if (!isValidPrice(orderData.price)) {
      throw new Error("訂單金額不可小於或等於 0");
    }

    // 2. 建立訂單 Log 檔案 (職責二)
    await wraiteOrderLog(orderData.id, orderData.price);
  } catch (err) {
    console.error(`失敗: ${err.message}`);
  }
}

createOrder({ id: "A001", price: 500 });
createOrder({ id: "A002", price: -20 });
