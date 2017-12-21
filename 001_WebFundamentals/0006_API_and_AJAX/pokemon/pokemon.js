$(document).ready(function(){

    var numofimg = 151;
    for (var i=1; i <= numofimg; i++){

        $(".wrapper").append(
            "<img src='http://pokeapi.co/media/img/"+i+".png'>"
        );
        
    };

});