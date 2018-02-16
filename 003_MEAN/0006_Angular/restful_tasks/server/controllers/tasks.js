var mongoose = require("mongoose");
var Task = mongoose.model("Task");

module.exports = {

    showAll : function (request, response) {
        Task.find({}, function (error, data) {
            if (error) {
                console.log(error);
                response.json({
                    message: "Error",
                    error: error
                });
            } else {
                console.log(data);
                response.json({
                    message: "Success",
                    data: data
                });
            };
        });
    },

    showOne : function (request, response) {
        Task.findOne({
            _id: request.params.id
        }, function (error, data) {
            if (error) {
                console.log(error);
                response.json({
                    message: "Error",
                    error: error
                });
            } else {
                console.log(data);
                response.json({
                    message: "Success",
                    data: data
                });
            };
        });
    },

    create : function(request, response) {
        console.log("POST DATA : " + request.body);
        var task = new Task({
            title: request.body.title,
            description: request.body.description,
            completed: request.body.completed
        });
        task.save(function (error, data) {
            if (error) {
                console.log(error);
                response.json({
                    message: "Error",
                    error: error
                });
            } else {
                console.log("Successfully saved your data!");
                response.json({
                    message: "Success",
                    data: data
                });
            };
        });
    },

    update : function(request, response) {
        console.log(request.params.id);
        Task.update({
            _id: request.params.id
        }, {
            title: request.body.title,
            description: request.body.description,
            completed: request.body.completed
        }, function (error, data) {
            if (error) {
                console.log(error);
                response.json({
                    message: "Error",
                    error: error
                });
            } else {
                console.log("Successfully updated your data!");
                response.json({
                    message: "Success",
                    data: data
                });
            }
        });
    },

    destroy: function (request, response) {
        Task.remove({
            _id: request.params.id
        }, function (error, data) {
            if (error) {
                console.log(error);
                response.json({
                    message: "Error",
                    error: error
                });
            } else {
                console.log("Successfully removed from database");
                response.json({
                    message: "Success",
                    data: data
                });
            };
        });
    }

};