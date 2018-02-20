var path = require("path");

module.exports = function (app) {

    app.all("*", (request, response, next) => {
        console.log("ABC");
        response.sendFile(path.resolve("./../client/dist/index.html"));
    });

};
