var mongoose = require("mongoose");

var Schema  = mongoose.Schema;
var AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quotes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Quote"
        }
    ]
},
{
    timestamps: true   
});

var QuoteSchema = mongoose.Schema({
    _author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    },
    quote: {
        type: String,
        required: true
    },
    votes: {
        type: Number
    }
},
{
    timestamps: true
});

mongoose.model("Author", AuthorSchema);
mongoose.model("Quote", QuoteSchema);

var Author = mongoose.model("Author");
var Quote = mongoose.model("Quote");

module.exports = Author, Quote;