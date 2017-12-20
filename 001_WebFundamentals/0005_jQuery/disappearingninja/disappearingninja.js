$(document).ready(function(){

    $(".image").click(function () {
        $(this).fadeOut();
    });

    $(".header input").click(function(){
        $(".image").fadeIn();
    });
    
});