// ******************  Configuration  ******************
var express = require("express");
var app = express();
var port = 5000;
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({
    extended: true
}));
// *****************************************************



// *********************  Setting  *********************
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
// *****************************************************



// *****************  Mongoose Setting  *****************
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dashboard");

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});
var Animal = mongoose.model("Animal", userSchema);
mongoose.Promise = global.Promise;
// *****************************************************



// *********************  Routing  *********************
app.get("/", function (request, response) {
    Animal.find({}, function (error, data) {
        if (error) {
            console.log(error);
            response.send(error);
        } else {
            console.log(data);
            contents = {
                data: data
            };
            response.render("index", contents)
        }
    });
});

app.get("/dashboard/new", function (request, response) {
    response.render("new_form");
});

app.get("/dashboard/:id", function (request, response) {
    console.log(request.params.id);
    Animal.findOne({
        _id: request.params.id
    }, function (error, data) {
        if (error) {
            console.log(error);
        } else {
            console.log(data);
            contents = {
                data: data
            };
            response.render("animal_detail", contents);
        };
    });
});

app.post("/dashboard", function (request, response) {
    console.log("POST DATA : " + request.body);
    var animal = new Animal({
        name: request.body.name
    });
    animal.save( function (error) {
        if (error) {
            console.log(error);
            response.send(error);
        } else {
            console.log("Successfully saved your data!");
            response.redirect("/");
        };
    });
});

app.get("/dashboard/edit/:id", function (request, response) {
    console.log(request.params.id);
    Animal.findOne({
        _id: request.params.id
    }, function (error, data) {
        if (error) {
            console.log(error);
            response.send(error);
        } else {
            console.log(data);
            contents = {
                data: data
            };
            response.render("edit_page", contents);
        };
    });
});

app.post("/dashboard/:id", function (request, response) {
    console.log(request.params.id);
    console.log(request.body.name);
    Animal.update({
        _id: request.params.id,
    },
    {
        name : request.body.name
    },
    function (error) {
        if (error) {
            console.log(error);
            response.send(error);
        } else {
            response.redirect("/");
        };
    });
});

app.post("/dashboard/destroy/:id", function (request, response) {
    Animal.remove({
        _id: request.params.id
    }, function (error, data) {
        if (error) {
            console.log(error);
            response.send(error);
        } else {
            response.redirect("/");
        }
    })
});
// *****************************************************



// ********************  Server Up  ********************
app.listen(port, function () {
    console.log("listening on port " + port);
});
// *****************************************************