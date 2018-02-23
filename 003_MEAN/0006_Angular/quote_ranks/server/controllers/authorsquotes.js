var mongoose = require("mongoose");
var Author = mongoose.model("Author");
var Quote = mongoose.model("Quote");

module.exports = {

    /////////// Author related methods ///////////
    getAllAuthors: function (request, response) {
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

    getOneAuthor: function (request, response) {
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

    createOneAuthor: function (request, response) {
        if (request.body.name.length < 3) {
            response.json({
                message: "Error",
                error: "Author name is too short! Name should be at least 3 character!"
            });
        } else {
            console.log("POST DATA : " + request.body);
            var author = new Author({
                name: request.body.name,
                quotes: request.body.quotes
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

    updateAuthor: function (request, response) {
        if (request.body.name.length < 3) {
            response.json({
                message: "Error",
                error: "Author name is too short! Name should be at least 3 character!"
            });
        } else {
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

    destroyAuthor: function (request, response) {
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
    },
    /////////////////////////////////////////////


    /////////////////////////////////////////////
    getAllQuotesTableQuote: function (request, response) {
        Quote.find({
            _author: request.params.id
        }, function(error, data) {
            if (error) {
                console.log("Error", error);
                response.json({
                    message: "Error",
                    error: error
                });
            } else {
                console.log("Success", data);
                response.json({
                    message: "Success",
                    data: data
                });
            }
        })
        .sort({votes: -1});
    },
    /////////////////////////////////////////////


    /////////// Quote related methods ///////////    
    getAllQuotes: function (request, response) {
        Author.find({
            _id: request.params.id
        })
        .populate("quotes")
        .exec( function(error, data) {
            if (error) {
                console.log("Error", error);
                response.json({
                    message: "Error",
                    error: error
                });
            } else {
                console.log("Success, This is the result : ", data);
                response.json({
                    message: "Success",
                    data: data
                });
            }
        });
    },

    // getOneQuote: function (request, response) {
    //     Author.findOne({
    //         _id: request.params.id
    //     })
    //     .populate("quotes")
    //     .exec(function (error, data) {
    //         if (error) {
    //             console.log("Error", error);
    //             response.json({
    //                 message: "Error",
    //                 error: error
    //             });
    //         } else {
    //             console.log("Success", data);
    //             response.json({
    //                 message: "Success",
    //                 data: data
    //             });
    //         };
    //     });
    // },

    createOneQuote: function (request, response) {
        Author.findOne({
            _id: request.params.id
        }, function(error, author) {
            // console.log("This id data._id : ", data._id);
            // console.log("POST DATA : ", request.body);
            var quote = new Quote({
                quote: request.body.quote,
                votes: request.body.votes
            });
            quote._author = author._id;
            // console.log("This is quote object", quote);
            quote.save(function (error, quote) {
                // console.log("This is quote : ", quote);
                // console.log("This is author : ", author);
                author.quotes.push(quote);
                author.save(function (error) {
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
                            // data: data
                        });
                    };
                });
            });
        });
    },

    updateQuote: function (request, response) {
        console.log(request.params.id);
        Quote.update({
            _id: request.params.id
        },
        {
            quote: request.body.quote,
            votes: request.body.votes
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
            };
        });
    },

    destroyQuote: function (request, response) {
        Author.update({
            _id: request.params.authorid
        },
        {
            $pull: {
                quotes: request.params.quoteid
            }
        },
        function(error, data) {
            if (error) {
                console.log(error);
                response.json({
                    message: "Error on updating author's quotes",
                    error: error
                });
            } else {
                console.log(data);
                response.json({
                    message: "Success on updating author's quotes",
                    data: data
                });
            };
        });

        Quote.remove({
            _id: request.params.quoteid
        },
        function (error, data) {
            if (error) {
                console.log(error);
                response.json({
                    message: "Error on removing quote's collection",
                    error: error
                });
            } else {
                console.log("Successfully removed on quote's collection");
                response.json({
                    message: "Success",
                    data: data
                });
            };
        });
    }
    /////////////////////////////////////////////

};