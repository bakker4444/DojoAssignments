
$(document).ready(function(){
    // console.log("ready");

    // // Hide House Details tag
    $(".detail").hide();

    // // When click the images, house details tag shows up with image information
    $("img").click(function(){
        var urlHousePre = "https://anapioficeandfire.com/api/houses/";
            var urlHouseId = $(this).attr("id");
            var urlRequest = urlHousePre + urlHouseId + "/";    
            var name, words, titles;

        $(".detail").fadeOut("fast",function(){
            
            $.get(urlRequest, function(dataHouse){
                var name = dataHouse["name"];
                var words = dataHouse["words"];
                var titles = dataHouse["titles"];
                console.log(name);
                console.log(words);
                console.log(titles);
    
                $(".detailname").html("Name: " + name);
                $(".detailwords").html("Words: " + words);
                $(".detailtitles").html("Titles: " + titles);
    
            }, "json");
        }).fadeIn("fast");
    });
});