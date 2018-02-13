var express = require("express");
var app = express();
var port = 5000;
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

var path = require("path");
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/quoting_dojo");

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    quote: {
        type: String,
        required : true
    },
    created_at: {
        type: Date,
        required : true,
        default : Date.now
    }
});
mongoose.model("Quote", UserSchema);
var userQuote = mongoose.model("Quote");
mongoose.Promise = global.Promise;

app.get("/", function (request, response) {
    response.render("index");
});

app.post("/quotes", function (request, response) {
    console.log("POST DATA", request.body);
    var quote = new userQuote({
        name : request.body.name,
        quote : request.body.quote
    });
    quote.save(function (error) {
        if (error) {
            console.log("something went wrong");
            response.redirect("/");
        }
        else {
            console.log("successfully added a quote!");
            response.redirect("/quotes");
        }
    });
});

app.get("/quotes", function(request, response){
    userQuote.find({}, function (error, quotes) {
        var contents = {
            quotes: quotes
        };
        response.render("quotes", contents);
    });
});

app.listen(port, function () {
    console.log("listening on port " + port);
});
