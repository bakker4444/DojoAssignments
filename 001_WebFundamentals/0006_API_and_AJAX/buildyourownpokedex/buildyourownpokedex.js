$(document).ready(function(){

    var numofimg = 151;
    for (var i=1; i< numofimg; i++){
        $(".pokeimgleft").append(
            "<img class='pokeimg " + i + "' src='https://pokeapi.co/media/img/" + i + ".png' alt='" + i + ".png'>"
        );
        $("img").css("width","100px");
        $("img").css("height","100px");
    };

    $(document).on("click",".pokeimg",function(){
        var imagenumber = $(this).attr("class").split(" ")[1];
        console.log($(this).attr("class").split(" ")[1]);

        var preimgurl = "https://pokeapi.co/media/img/";
        console.log(preimgurl);

        var datapreurl = "https://pokeapi.co/api/v2/pokemon/";
        console.log(datapreurl);

        var imageurlall = preimgurl + imagenumber + ".png";
        console.log(preimgurl + imagenumber + ".png");
        
        var dataurlall = datapreurl + imagenumber+'/';
        console.log(datapreurl + imagenumber+'/');
        var typeurlall = "https://pokeapi.co/api/v2/type/"+imagenumber+"/";

        $.get(dataurlall,function(pokedata){
            var pokename = pokedata["name"][0].toUpperCase()+pokedata["name"].substr(1);
            var poketype = pokedata["types"][0];
            var typeval = "";

            for(var i=0; i < pokedata["types"].length; i++){
                typeval += "<li>" + pokedata['types'][i]['type']['name'][0].toUpperCase() + pokedata['types'][i]['type']['name'].substr(1) + "</li>";
            ;}

            $(".pokemoninforight").html(
                "<h1>" + pokename + "</h1>"
                + "<img src='" + imageurlall + "' alt='" + imagenumber + ".png'>"
                + "<h3>Types</h3>"
                + "<ul>"
                + typeval
                + "</ul>"
                + "<h3>Height</h3>"
                + pokedata["height"]
                + "<h3>Weight</h4>"
                + pokedata["weight"]

            );
        },"json");

    });

});