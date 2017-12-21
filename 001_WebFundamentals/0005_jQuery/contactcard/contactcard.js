$(document).ready(function(){

    $(".namecard").click(
        $(this).html(
            "<p class='.namecard'>" + $("#desc").val() + "</p>"
        )
    )
    
    $("form").submit(function(){
        $(".shownamecard").append(
            "<div class='namecard'><h1>" + $("#fname").val()+ " " + $("#lname").val() + "</h1><h3>Click for description!</h3><h4>" + $("#desc").val() + "</h4></div>"
        );

        $(document).on("click", ".namecard", function(){
            $(this).children().toggle();
        });

        return false;
    });

});