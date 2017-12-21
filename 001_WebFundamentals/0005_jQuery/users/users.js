$(document).ready(function(){

    $("#formid").submit(function(){

        $("#tablefname").append(
            "<span class='textblue'>" + $("#fname").val() + "</span>"
        );
        
        $("#tablelname").append(
            "<span class='textblue'>" + $("#lname").val() + "</span>"
        );

        $("#tableemail").append(
            "<span class='textblue'>" + $("#email").val() + "</span>"
        );

        $("#tablecontactnum").append(
            "<span class='textblue'>" + $("#cnumber").val() + "</span>"
        );

        return false;
    });

});