var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    completed: {
        type: Boolean,
        default: false
    },
},
{
    timestamps: true
});
mongoose.model("Task", TaskSchema);
var Task = mongoose.model("Task");

module.exports = Task
