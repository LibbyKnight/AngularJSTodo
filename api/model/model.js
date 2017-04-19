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
    required: "Category is required."

  },

  dueDate: {

    type: Date,
    required: "Video name is required."
    
  },

  isCompleted: {

    type: String,
    required: "Video is required.",
    unique: true
    
  },

  transcript: {

    type: Object,
    required: "Transcript is required."

  }

});


// Create the Steps model with the StepsSchema
var Instructions = mongoose.model("Instructions", Instructions);

// Export the model
module.exports = Instructions;