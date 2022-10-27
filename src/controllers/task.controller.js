const pool = require("../db");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM tasks");
    res.json(allTasks.rows);
    console.log(allTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
    if (task.rows.length === 0) {
      return res.status(404).json("Task not found!");
    }
    res.json(task.rows[0]);
    
  } catch (err) {
    console.error(err.message);
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = await pool.query(
      "INSERT INTO tasks (title, description) VALUES($1, $2) RETURNING *",
      [title, description]
    );
    res.json(newTask.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updateTask = await pool.query(
      "UPDATE tasks SET title = $1, description = $2 WHERE id = $3",
      [title, description, id]
    );
    res.json("Task was updated!");
  } catch (err) {
    console.error(err.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await pool.query("DELETE FROM tasks WHERE id = $1", [
      id,
    ]);
    res.json("Task was deleted!");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
