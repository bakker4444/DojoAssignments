var path = require("path");
var mongoose = require("mongoose");
var Author = mongoose.model("Author");
var authors = require("../controllers/authors");

module.exports = function (app) {

    app.get("/authors", function (request, response) {
        authors.showAll(request, response);
    });

    app.get("/authors/:id", function (request, response) {
        authors.showOne(request, response);
    });

    app.post("/authors", function (request, response) {
        authors.create(request, response);
    });

    app.put("/authors/:id", function (request, response) {
        authors.update(request, response);
    });

    app.delete("/authors/:id", function (request, response) {
        authors.destroy(request, response);
    });

    app.all("*", (request, response, next) => {
        response.sendFile(path.resolve("./../client/dist/index.html"));
    });

};