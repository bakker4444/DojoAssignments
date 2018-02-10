var express = require("express");
var app = express();
var port = 5000;
var path = require("path");
var morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.get("/", function (request, response) {
    response.render("index");
});

var server = app.listen(port, function () {
    console.log("listening on port " + port);
});

var io = require("socket.io").listen(server);

io.sockets.on("connection", function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is : ", socket.id);

    socket.on("posting_form", function (data) {
        console.log(data);
        socket.emit("updated_message", {
            message_from_user: "You emitted the following information to the server: { name: '" + data.name + "', location: '" + data.dojo_location + "', language: '" + data.fav_language + "', comment: '" + data.comment + "' }",
            message_random_num: "Your lucky number emitted by the server is " + (Math.floor(Math.random() * 1000) + 1)
        });
    });
    
});