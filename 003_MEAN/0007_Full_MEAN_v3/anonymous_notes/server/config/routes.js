var path = require("path");
var mongoose = require("mongoose");
var Note = mongoose.model("Note");
var notes = require("../controllers/anonymousnotes");

module.exports = function (app) {

    ///////////////////////////////////////////////////////////
    /////////////////// CRUD related routes ///////////////////
    ///////////////////////////////////////////////////////////

    app.get("/notes", function(request, response) {
        notes.getAllNotes(request, response);
    });

    app.get("/notes/:noteid", function (request, response) {
        notes.getOneNote(request, response);
    });

    app.post("/notes", function (request, response) {
        notes.createNote(request, response);
    });

    app.put("/notes/:noteid", function (request, response) {
        notes.updateNote(request, response);
    });

    app.delete("/notes/:noteid", function (request, response) {
        notes.destroyNote(request, response);
    });

    ///////////////////////////////////////////////////////////
    ////////////////// Angular related routes /////////////////
    ///////////////////////////////////////////////////////////

    app.all("*", (request, response, next) => {
        response.sendFile(path.resolve("./../client/dist/index.html"));
    });

    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////

};

