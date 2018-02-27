var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var NoteSchema = mongoose.Schema({
    note: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

mongoose.model("Note", NoteSchema);

var Note = mongoose.model("Note");

module.exports = Note;