// ******************  Configuration  ******************
var express = require("express");
var app = express();
var port = 5000;
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({
    extended: true
}));
// *****************************************************



// *****************  Express Setting  *****************
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
// *****************************************************



// *****************  Mongoose Setting  *****************
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/message_board");

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
},
{
    timestamps: true
});

var CommentSchema = new mongoose.Schema({
    _post: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    },
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

mongoose.model("Post", PostSchema);
mongoose.model("Comment", CommentSchema);

var Post = mongoose.model("Post");
var Comment = mongoose.model("Comment");

mongoose.Promise = global.Promise;
// *****************************************************



// *********************  Routing  *********************
app.get("/", function (request, response) {
    Post.find({})
    .populate("comments")
    .exec(function (error, post) {
        if (error) {
            console.log(error);
            response.send(error);
        } else {
            console.log(post);
            contents = {
                post: post
            }
            response.render("index", contents);
        };
    });
});

app.post("/", function (request, response) {
    console.log("POST DATA : " + request.body);
    var post = new Post({
        name : request.body.name,
        post : request.body.post
    });
    post.save( function (error) {
        if (error) {
            console.log(error);
            response.send(error);
        }
        else {
            console.log("Successfully saved your data");
            response.redirect("/");
        };
    });
});

app.post("/posts/:id", function (request, response) {
    console.log(request.params.id);
    Post.findOne({
        _id: request.params.id
    },
    function (error, post) {
        var comment = new Comment(request.body);
        comment._post = post._id;
        post.comments.push(comment);
        comment.save(function (error) {
            post.save(function (error){
                if (error) {
                    console.log(error);
                    response.send(error);
                }
                else {
                    response.redirect("/");
                };
            });
        });
    });
});
// *****************************************************



// ********************  Server Up  ********************
app.listen(port, function () {
    console.log("listening on port " + port);
});
// *****************************************************