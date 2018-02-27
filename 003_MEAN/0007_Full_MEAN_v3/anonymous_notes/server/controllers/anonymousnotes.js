var mongoose = require("mongoose");
var Note = mongoose.model("Note");

module.exports = {

    getAllNotes: function (request, response) {
        Note.find({})
        .sort({ createdAt: -1 })
        .exec( function (error, data) {
            if (error) {
                console.log("Error, getAllNotes : ", error);
                response.json({
                    message: "Error",
                    route: "getAllNotes",
                    details: "",
                    error: error
                });
            } else {
                console.log("Success, getAllNotes : ", data);
                response.json({
                    message: "Success",
                    route: "getAllNotes",
                    details: "",
                    data: data
                });
            };
        });
    },

    getOneNote: function (request, response) {
        Note.findOne({
            _id: request.params.noteid
        }, function (error, data) {
            if (error) {
                console.log("Error, getOneNote : ", error);
                response.json({
                    message: "Error",
                    route: "getOneNote",
                    details: "",
                    error: error
                });
            } else {
                console.log("Success, getOneNote : ", data);
                response.json({
                    message: "Success",
                    route: "getOneNote",
                    details: "",
                    data: data
                });
            };
        });
    },

    createNote: function (request, response) {
        if (request.body.note.length < 3) {
            console.log("Error, createNote, validation, length error : ", error);
            response.json({
                message: "Error",
                route: "createNote",
                details: "Note is too short. Note should be at least 3 characters!",
                error: error
            });
        } else {
            console.log("createNote route POST DATA : ", request.body);
            var note = new Note({
                note: request.body.note,
            });
            note.save(function (error, data) {
                if (error) {
                    console.log("Error, createNote, data creation error : ", error);
                    response.json({
                        message: "Error",
                        route: "createNote",
                        details: "data creation error",
                        error: error
                    });
                } else {
                    console.log("Success, createNote: ", data);
                    response.json({
                        message: "Success",
                        route: "createNote",
                        details: "",
                        data: data
                    });
                };
            });
        };
    },

    updateNote: function (request, response) {
        if (request.body.note.length < 3) {
            console.log("Error, updateNote, validation, length error : ", error);
            response.json({
                message: "Error",
                route: "updateNote",
                details: "Note is too short. Note should be at least 3 characters!",
                error: error
            });
        } else {
            console.log("updateNote route POST DATA: ", request.body);
            Note.update({
                _id: request.params.noteid
            }, {
                note: request.body.note
            }, function (error, data) {
                if (error) {
                    console.log("Error, updateNote, date update error : ", error);
                    response.json({
                        message: "Error",
                        route: "updateNote",
                        details: "data update error",
                        error: error
                    });
                } else {
                    console.log("Success, updateNote : ", data)
                    response.json({
                        message: "Success",
                        route: "updateNote",
                        details: "",
                        data: data
                    });
                };
            });
        };
    },

    destroyNote: function (request, response) {
        Note.remove({
            _id: request.params.id
        }, function (error, data) {
            if (error) {
                console.log("Error, destroyNote, date remove error : ", error);
                response.json({
                    message: "Error",
                    route: "destroyNote",
                    details: "data remove error",
                    error: error
                });
            } else {
                console.log("Success, destroyNote : ", data)
                response.json({
                    message: "Success",
                    route: "destroyNote",
                    details: "",
                    data: data
                });
            };
        });
    }

};