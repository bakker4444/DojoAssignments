// ******************  Configuration  ******************
var express = require("express");
var app = express();
var port = 8000;
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.json());
// *****************************************************



// *****************  Express Setting  *****************
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
// *****************************************************



// *****************  Mongoose Setting  *****************
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/1955_api");

var Schema = mongoose.Schema;

var Schema1955 = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

mongoose.model("People", Schema1955);

var People = mongoose.model("People");

mongoose.Promise = global.Promise;
// *****************************************************



// *********************  Routing  *********************
app.get("/", function (request, response) {
    People.find({}, function (error, data) {
        if (error) {
            console.log(error);
            response.json({
                message: "Error",
                error: error
            });
        } else {
            console.log(data);
            response.json({
                message: "Success",
                data: data
            });
        };
    });
});

app.get("/new/:name", function (request, response) {
    console.log(request.params.name);
    var person = new People({
        name: request.params.name
    });
    person.save(function (error) {
        if (error) {
            console.log(error);
            response.json({
                message: "Error",
                error: error
            });
        } else {
            console.log("Successfully saved your data!!!");
            response.redirect("/");
        };
    });
});

app.get("/remove/:name", function (request, response) {
    console.log(request.params.name);
    People.remove({
        name: request.params.name
    }, function (error) {
        if (error) {
            console.log(error);
            response.json({
                message: "Error",
                error: error
            });
        } else {
            console.log("Successfully removed your data");
            response.redirect("/");
        };
    });
});

app.get("/:name", function (request, response) {
    console.log(request.params.name);
    People.findOne({
            name: request.params.name
        },
        function (error, data) {
            if (error) {
                console.log(error);
                response.json({
                    message: "Error",
                    error: error
                });
            } else {
                console.log(data);
                response.json({
                    message: "Success",
                    data: data
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