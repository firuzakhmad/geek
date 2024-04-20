const Task = require("../models").Task;
const { sequelize } = require("../models");

// Product Controller
const createTask = async (req, res) => {
  try {
    const { title, description, complete } = req.body;

    const newTask = await Task.create({
      title,
      description,
      complete,
    });

    return res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, complete } = req.body;
    // Find the task by ID
    const taskToUpdate = await Task.findByPk(taskId);

    if (!taskToUpdate) {
      return res.status(404).json({ error: "Task not found" });
    }

    taskToUpdate.title = title;
    taskToUpdate.description = description;
    taskToUpdate.complete = complete;

    await taskToUpdate.save();

    return res.json(taskToUpdate);
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const taskToDelete = await Task.findByPk(taskId);

    if (!taskToDelete) {
      return res.status(404).json({ error: "Task not found" });
    }

    await taskToDelete.destroy();

    return res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
};
