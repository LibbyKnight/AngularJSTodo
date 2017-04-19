//Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");



mongoose.Promise = global.Promise;

//Require the model
var TodoModel = require("./api/model/model");

//Initialize Express
var app = express();

//PORT
var PORT = 3000;

//Setup Body Parser
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));


//Setting the public static directory
app.use(express.static(__dirname + "/app/angularTODO/"));

//Connection to the database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/model");

//Save mongoose connection to db
var db = mongoose.connection;

//Logging mongoose errors to console
db.once("open", function() {
	console.log("Mongoose connection successful.");
});

module.exports = db;

app.listen(PORT, function() {
	console.log("listening on port:" + PORT);
});


//------------------ROUTES-----------------

//Route for the Todo schema

app.get("/api", function(req, res) {
	angularToDo.find({}, function(err, data) {

		if (err) {
			res.send(err);
		}

		else {
			res.send(data);
		}
	});
});


