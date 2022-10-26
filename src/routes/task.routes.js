const router = require("express").Router();
const pool = require("../db");

router.get("/tasks", (req, res) => {
  pool.query("SELECT NOW()", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.json(result);
  });
});

router.get("/tasks/:id", (req, res) => {
  res.send("Get a task");
});
router.post("/tasks", (req, res) => {
  res.send("Create a new task");
});
router.put("/tasks", (req, res) => {
  res.send("Update a task");
});
router.delete("/tasks", (req, res) => {
  res.send("Delete a task");
});

module.exports = router;
