var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    games: {
        game_1 : {
            type: String,
            required: true
        },
        game_2 : {
            type: String,
            required: true
        },
        game_3 : {
            type: String,
            required: true
        }
    }
},
{
    timestamps: true
});

mongoose.model("User", UserSchema);

var User = mongoose.model("User");

module.exports = User;
