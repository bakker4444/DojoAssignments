var express = require("express");
var app = express();
var port = 5000;
var path = require("path");
var morgan = require("morgan");

app.unsubscribe(morgan("dev"));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.get("/", function (request, response) {
    response.render("index");
});

var server = app.listen(port, function () {
    console.log("listening on port : " + port);
});

var io = require("socket.io").listen(server);

io.sockets.on("connection", function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is : ", socket.id);

    var server_count = 0;

    socket.on("count_up", function (data) {
        server_count++;
        console.log(data);
        io.emit("response_message", {
            updated_count: server_count
        });
    });

    socket.on("reset_count", function (data) {
        server_count = 0;
        console.log(data);
        io.emit("reset_message", {
            updated_count: server_count
        });
    });

});