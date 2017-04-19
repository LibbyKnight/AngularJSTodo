// Model of DB
// Require Mongoose
var mongoose = require("mongoose");
var db = require("../../server.js");



// Create Schema class
var Schema = mongoose.Schema;



// Create the angularToDo Schema
var angularToDo = new Schema({

  todoItem: {

    type: String,
    required: "Todo Item is required."

  },

  dueDate: {

    type: Date,
    required: "A due date is required."
    
  },

  isCompleted: {

    type: Boolean,
    default: false
    
  }

});


// Create the Todo model with the Schema
var angularToDo = mongoose.model("angularToDo", angularToDo);

// Export the model
module.exports = angularToDo;