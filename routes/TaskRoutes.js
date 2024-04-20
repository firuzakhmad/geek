const express = require("express");
const {
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/TaskControllers");
const router = express.Router();

router.post("/create", createTask);
router.put("/update/:taskId", updateTask);
router.delete("/delete/:taskId", deleteTask);

module.exports = router;
