const router = require("express").Router();
const {
  getAllTasks,
  createTask,
  deleteTask,
  getTask,
  updateTask,
  } = require("../controllers/task.controller");

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

module.exports = router;
