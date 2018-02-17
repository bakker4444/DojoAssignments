// var mongoose = require("mongoose");
// var Pokemon = mongoose.model("Pokemon");
// var pokemons = require("../controllers/pokemons");

// module.exports = function (app) {

//     app.get("/pokemons", function(request, response){
//         pokemons.showAll(request, response);
//     });

//     app.get("https://pokeapi.co/api/v2/pokemon/1/", function (request, response) {
//         pokemons.showOne(request, response);
//     });

//     app.post("/pokemons", function (request, response) {
//         pokemons.create(request, response);
//     });

//     app.put("/pokemons/:id", function (request, response) {
//         pokemons.update(request, response);
//     });

//     app.delete("/pokemons/:id", function (request, response) {
//         pokemons.destroy(request, response);
//     });

// };