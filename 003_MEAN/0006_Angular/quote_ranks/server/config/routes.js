var path = require("path");
var mongoose = require("mongoose");
var Author = mongoose.model("Author");
var Quote = mongoose.model("Quote");
var authorsquotes = require("../controllers/authorsquotes");

module.exports = function (app) {


    /////////// Author related routes ///////////
    app.get("/authors", function (request, response) {
        authorsquotes.getAllAuthors(request, response);
    });

    app.get("/authors/:id", function (request, response) {
        authorsquotes.getOneAuthor(request, response);
    });

    app.post("/authors", function (request, response) {
        authorsquotes.createOneAuthor(request, response);
    });

    app.put("/authors/:id", function (request, response) {
        authorsquotes.updateAuthor(request, response);
    });

    app.delete("/authors/:id", function (request, response) {
        authorsquotes.destroyAuthor(request, response);
    });
    /////////////////////////////////////////////


    /////////// Quote related routes ////////////
    app.get("/quotesdata/:id", function (request, response) {
        authorsquotes.getAllQuotes(request, response);
    });

    // app.get("/quotesdata/:id", function (request, response) {
    //     authorsquotes.getOneQuote(request, response);
    // });

    app.post("/quotesdata/:id", function (request, response) {
        authorsquotes.createOneQuote(request, response);
    });

    app.put("/quotesdata/:id", function (request, response) {
        authorsquotes.updateQuote(request, response);
    });

    app.delete("/quotesdata/:authorid/:quoteid", function (request, response) {
        authorsquotes.destroyQuote(request, response);
    });

    app.get("/quotesdatatable/:id", function (request, response) {
        authorsquotes.getAllQuotesTableQuote(request, response);
    })

    /////////////////////////////////////////////


    ////////// Angular related routes ///////////

    app.all("*", (request, response, next) => {
        response.sendFile(path.resolve("./../client/dist/index.html"));
    });
    /////////////////////////////////////////////

};