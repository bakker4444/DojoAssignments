// ******************  Configuration  ******************
var express = require("express");
var app = express();
var port = 5000;
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.json());
// *****************************************************



// *****************  Express Setting  *****************
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
// *****************************************************



// *****************  Mongoose Setting  ****************
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_task");

var Schema = mongoose.Schema;

var TaskSchema = mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type: String,
        default : ""
    },
    completed : {
        type: Boolean,
        default : false
    },
},
{
    timestamps : true
});

mongoose.model("Task", TaskSchema);

var Task = mongoose.model("Task");

mongoose.Promise = global.Promise;
// *****************************************************



// *********************  Routing  *********************
app.get("/tasks", function (request, response) {
    Task.find({}, function (error, data) {
        if (error) {
            console.log(error);
            response.json({
                message : "Error",
                error : error
            });
        } else {
            console.log(data);
            response.json({
                message : "Success",
                data : data
            });
        };
    });
});

app.get("/tasks/:id", function (request, response) {
    Task.findOne({
        _id : request.params.id
    }, function (error, data) {
        if (error) {
            console.log(error);
            response.json({
                message : "Error",
                error : error
            });
        } else {
            console.log(data);
            response.json({
                message : "Success",
                data : data
            });
        };
    });
});

app.post("/tasks", function (request, response) {
    console.log("POST DATA : " + request.body);
    var task = new Task({
        title : request.body.title,
        description : request.body.description,
        completed : request.body.completed
    });
    task.save( function (error, data) {
        if (error) {
            console.log(error);
            response.json({
                message : "Error",
                error : error
            });
        } else {
            console.log("Successfully saved your data!");
            response.json({
                message : "Success",
                data : data
            });
        };
    });
});

app.put("/tasks/:id", function (request, response) {
    console.log(request.params.id);
    Task.update({
        _id : request.params.id
    }, {
        title : request.body.title,
        description : request.body.description,
        completed : request.body.completed
    }, function (error, data) {
        if (error) {
            console.log(error);
            response.json({
                message : "Error",
                error : error
            });
        } else {
            console.log("Successfully updated your data!");
            response.json({
                message : "Success",
                data : data
            });
        }
    });
});

app.delete("/tasks/:id", function (request, response) {
    Task.remove({
        _id : request.params.id
    }, function (error, data) {
        if (error) {
            console.log(error);
            response.json({
                message : "Error",
                error : error
            });
        } else {
            console.log("Successfully removed from database");
            response.json({
                message : "Success",
                data : data
            });
        };
    });
});

// *****************************************************



// ********************  Server Up  ********************
app.listen(port, function () {
    console.log("listening on port " + port);
});
// *****************************************************
