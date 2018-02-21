var mongoose = require("mongoose");
var Author = mongoose.model("Author");

module.exports = {

    showAll: function (request, response) {
        Author.find({}, function (error, data) {
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

    showOne: function (request, response) {
        Author.findOne({
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

    create: function (request, response) {
        if (request.body.name.length < 3) {
            response.json({
                message: "Error",
                error: "Author name is too short! Name should be at least 3 character!"
            });
        }
        else {
            console.log("POST DATA : " + request.body);
            var author = new Author({
                name: request.body.name,
            });
            author.save(function (error, data) {
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
        };

    },

    update: function (request, response) {
        if (request.body.name.length < 3) {
            response.json({
                message: "Error",
                error: "Author name is too short! Name should be at least 3 character!"
            });
        }
        else {
            console.log(request.params.id);
            Author.update({
                _id: request.params.id
            },
            {
                name: request.body.name
            },
            function (error, data) {
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
        };
    },

    destroy: function (request, response) {
        Author.remove({
            _id: request.params.id
        },
        function (error, data) {
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