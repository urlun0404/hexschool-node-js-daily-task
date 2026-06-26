// routes/members.js
const express = require("express");
const router = express.Router();

let members = [
  { id: 1, name: "王小明" },
  { id: 2, name: "李小花" },
];
let nextId = 3;

function findById(list, id) {
  return list.find((item) => item.id === id);
}
function validateFields(body, requiredFields) {
  return requiredFields.filter(
    (field) => !(body.hasOwnProperty(field) && field in body)
  );
}

router.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: members,
  });
});

router.post("/", (req, res) => {
  const missingFields = validateFields(req.body, ["name"]);
  if (missingFields.length > 0) {
    return res.status(400).json({
      status: "error",
      message: `欄位不完整: ${missingFields.join(", ")}`,
    });
  }

  const newMember = { id: nextId++, ...req.body };
  members.push(newMember);

  res
    .status(201)
    .json({ status: "success", message: "新增成功", data: newMember });
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const member = findById(members, id);
  if (!member) {
    return res.status(404).json({ status: "error", message: "找不到該會員" });
  }

  const missingFields = validateFields(req.body, ["name"]);
  if (missingFields.length > 0) {
    return res.status(400).json({
      status: "error",
      message: `欄位不完整: ${missingFields.join(", ")}`,
    });
  }

  member.name = req.body.name;
  res
    .status(200)
    .json({ status: "success", message: "更新成功", data: member });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (!findById(members, id)) {
    return res.status(404).json({ status: "error", message: "找不到該會員" });
  }
  members = members.filter((member) => member.id !== id);
  res.status(204).json({ status: "success", message: "刪除成功" });
});

module.exports = router;
