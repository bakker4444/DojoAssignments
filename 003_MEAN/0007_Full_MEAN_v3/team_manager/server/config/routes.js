var path = require("path");
var mongoose = require("mongoose");
var User = mongoose.model("User");
var controller = require("../controllers/teamManagers");

module.exports = function (app) {

    // app.get("/authors", function (request, response) {
    //     authorsquotes.getAllAuthors(request, response);
    // });

    app.get("/player", function (request, response) {
        controller.getAllPlayers(request, response);
    });

    app.post("/player", function (request, response) {
        controller.addPlayer(request, response);
    });

    app.put("/player/:gameid/:playerid", function (request, response) {
        controller.updatePlayerStatus(request, response);
    });

    app.delete("/player/:playerid", function (request, response) {
        controller.deletePlayer(request, response);
    });

    ////////////////////// Angular related routes ///////////////////////

    app.all("*", (request, response, next) => {
        response.sendFile(path.resolve("./../client/dist/index.html"));
    });

    /////////////////////////////////////////////////////////////////////

}