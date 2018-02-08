var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
    console.log("client request URL: ", request.url);

    if (request.url === "/cars"){
        fs.readFile("./views/cars.html", "utf8", function(errors, contents){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars/cars") {
        fs.readFile("./stylesheets/cars.css", "utf8", function(errors, contents){
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars/carsfavicon") {
        fs.readFile("./images/favicon_car.png", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars/ferrari"){
        fs.readFile("./images/ferrari_pirelli.jpeg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpeg"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars/gt") {
        fs.readFile("./images/ford_gt.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars/gtr") {
        fs.readFile("./images/gtr_police.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats") {
        fs.readFile("./views/cats.html", "utf8", function(errors, contents){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats/cats") {
        fs.readFile("./stylesheets/cats.css", function(errors, contents){
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats/catsfavicon") {
        fs.readFile("./images/favicon_cat.png", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats/cat_01") {
        fs.readFile("./images/cat_01.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats/cat_02") {
        fs.readFile("./images/cat_02.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats/cat_03") {
        fs.readFile("./images/cat_03.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === "/cars/new") {
        fs.readFile("./views/carsnew.html", "utf8", function(errors, contents){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars/new/flowerfavi") {
        fs.readFile("./images/favicon_flower.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/stylesheets/carsnew") {
        fs.readFile("./stylesheets/carsnew.css", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end("File not found!!!");
    }
});
server.listen(7077);
console.log("Running in localhost at port 7077");
