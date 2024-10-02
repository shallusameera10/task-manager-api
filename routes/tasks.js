const express = require('express');
const router = express.Router();
const Task = require('../models/task');

 // Create a new task
 router.post('/', async (req, res) => {
  const completeTask = (req.body.completed === "on" || true) ? true : false;
  //  const completed=req.body.completed
   console.log(completeTask)
   console.log(req.body.dueDate)
   console.log(typeof(req.body.dueDate))
   console.log(Date(req.body.dueDate))
   const date=Date(req.body.dueDate)
  //  if(completed ==="on"){
  //   completed=true
  //  }   
  //  else{
  //   completed=false
  //  }
  try {
      const task = new Task({
        title:req.body.title,
        description:req.body.description,
        dueDate:date,
        priority:req.body.priority,
        completed: completeTask,
      });

      await task.save();
      res.status(200)?
      res.redirect("/tasks") : res.send(`Error : Could Not Add Data ${res.message}`);
    } catch (error) {
      res.status(400||401||500).json({ message: error.message });
    }
  });

 // Get all tasks
 router.get('/', async (req, res) => {
    try {
      const tasks = await Task.find();
      if (!tasks) return res.status(404).json({ message: 'Task not found' });
      res.render("tasks.ejs",{myTasks:tasks, pageTitle:"Showing All Tasks"})
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  // Get a single task
  router.get('/:id', async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.send(JSON.stringify(task))
      // res.render("tasks.ejs",{myTasks:tasks, pageTitle:"Filter Tasks"});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
   // Update a task
   router.put('/:id', async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.send(JSON.stringify(task))
      // res.render("tasks.ejs",{myTasks:tasks, pageTitle:"Showing All Tasks"});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
   // Delete a task
   router.delete('/:id', async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  module.exports = router;