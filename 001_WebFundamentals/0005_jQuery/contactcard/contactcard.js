$()




$(document).ready(function(){

    $(".namecard").click(
        $(this).html(
            "<p class='.namecard'>" + $("#desc").val() + "</p>"
        )
    )
    
    $("form").submit(function(){
        // console.log("this");
        $(".shownamecard").append(
            "<div class='namecard'><h1>" + $("#fname").val()+ " " + $("#lname").val() + "</h1><h4>Click for description!</h4></div>"
        );

        $(document).on("click", ".namecard", function(){
            $(this).html(
                "<p class='.namecard'>" + $("#desc").val() + "</p>"
            )
        });






        // $(".shownamecard").fadeIn(5000,function(){
        //     $(".shownamecard").html(
        //         "<div class='namecard'><h1>" + $("#fname").val()+ " " + $("#lname").val() + "</h1><h4>Click for description!</h4></div>"
        //     );
        // });

        return false;
    });

});