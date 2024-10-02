const mongoose = require('mongoose');
const taskSchema= new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    dueDate: Date,
    priority:  { 
      type: String, 
      enum: ['low', 'medium', 'high'], // Only allows these values
      default: 'low' // Set a default value if needed
  },
    completed: { type: Boolean, default: false },
   
  }, { timestamps: true });
  
module.exports = mongoose.model('Task', taskSchema);