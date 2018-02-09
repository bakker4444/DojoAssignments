var express = require("express");
var app = express();
var port = 5000;
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
var morgan = require("morgan");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
    // resave: true,
    // saveUninitialized: true,
    secret: "anystringoftext"
}));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(request, response){
    if (!request.session.userName && !request.session.visitCount){
        request.session.userName = "DinDin";
        request.session.visitCount = 1;
    }
    else {
        request.session.visitCount += 1;
    }
    var contents = {
        visitCount: request.session.visitCount
    }
    response.render("index", contents);
});
app.get("/reset", function(request, response){
    request.session.userName = null;
    request.session.visitCount = null;
    console.log(request.session);
    response.redirect("/");
});
app.get("/addtwo", function(request, response){
    console.log(request.session.visitCount);
    request.session.visitCount += 1;
    response.redirect("/");
});

app.listen(port, function(){
    console.log("listening on port " + port);
});
