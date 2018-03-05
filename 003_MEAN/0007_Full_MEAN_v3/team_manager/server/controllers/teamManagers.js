var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {

    // getAllAuthors: function (request, response) {}

    addPlayer: function (request, response) {
        console.log("POST DATA : ", request.body);
        var user = new User(request.body);
        user.save(function(error, data){
            if (error) {
                console.log("Error, addPlayer, player creation error ", error);
                response.json({
                    message: "Error",
                    route: "addPlayer",
                    details: "player creation error",
                    error: error
                });
            } else {
                console.log("Success, addPlayer ", data);
                response.json({
                    message: "Success",
                    route: "addPlayer",
                    details: "",
                    data: data
                });
            };
        });
    },

    getAllPlayers: function (request, response) {
        User.find({}, function(error, data) {
            if (error) {
                console.log("Error, getAllPlayer, error from mongoDB, ", error);
                response.json({
                    message: "Error",
                    route: "getAllPlayer",
                    details: "error from mongoDB",
                    error: error
                });
            } else {
                console.log("Success, getAllPlayer ", data);
                response.json({
                    message: "Success",
                    route: "getAllPlayer",
                    details: "",
                    data: data
                });
            };
        });
    },

    updatePlayerStatus: function (request, response) {
        console.log(request.body);
        User.update({
            _id: request.params.playerid
        }, request.body, function (error, data) {
            if (error) {
                console.log("Error, updatePlayerStatus, player update error, ", error);
                response.json({
                    message: "Error",
                    route: "updatePlayerStatus",
                    details: "player update error",
                    error: error
                });
            } else {
                console.log("Success, updatePlayerStatus ", data);
                response.json({
                    message: "Success",
                    route: "updatePlayerStatus",
                    details: "",
                    data: data
                });
            };
        });
    },

    deletePlayer: function (request, response) {
        User.remove({
            _id: request.params.playerid
        }, function (error, data) {
            if (error) {
                console.log("Error, deletePlayer, player remove error, ", error);
                response.json({
                    message: "Error",
                    route: "deletePlayer",
                    details: "player remove error",
                    error: error
                }); 
            } else {
                console.log("Success, deletePlayer ", data);
                response.json({
                    message: "Success",
                    route: "deletePlayer",
                    details: "",
                    data: data
                });
            };
        });
    },

};