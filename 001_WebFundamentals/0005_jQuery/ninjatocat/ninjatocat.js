$(document).ready(function(){

    $("#image0, #image1, #image2, #image3, #image4").click(function(){
        
        $(this).fadeOut("5000",function(){                                  // added fadeOut methods,
            $(this).attr("data-temp", $(this).attr("src"));                 // after 5s fadeOut, run functions shown below
            $(this).attr("src", $(this).attr("alt"));                       // rotating each image attributes one by one
            $(this).attr("alt", $(this).attr("data-customimage"));          // each clicks, attributes rotates
            $(this).attr("data-customimage", $(this).attr("data-temp"));    // "src --> data-customimage --> alt --> src --> ..." order
        }).fadeIn("5000");                                                  // after the attributes rotation, fadeIn image.
    });

});