$(document).ready(function(){

    $(".divclick input").click(function() {
        $(".divclick .example").css("color","red");
    });

    $(".divhide input").click(function(){
        $(".divhide .example").hide();
    });

    $(".divshow .example").hide();
    $(".divshow input").click(function(){
        $(".divshow .example").show();
    });

    $(".divtoggle input").click(function(){
        $(".divtoggle .example").toggle();
    });

    $(".divslidedown .example").hide();
    $(".divslidedown input").click(function(){
        $(".divslidedown .example").slideDown();
    });

    $(".divslideup input").click(function () {
        $(".divslideup .example").slideUp();
    });

    $(".divslidetoggle").click(function () {
        $(".divslidetoggle .example").slideToggle();
    });

    $(".divfadein .example").hide();
    $(".divfadein input").click(function(){
        $(".divfadein .example").fadeIn();
    });

    $(".divfadeout input").click(function(){
        $(".divfadeout .example").fadeOut();
    });

    $("#addclasscolorred").click(function(){
        $(".divaddclass .example").addClass("textred");
    });
    $("#addclassbgcolorblue").click(function(){
        $(".divaddclass .example").addClass("bgcolorblue");
    });
    $("#addclassfontsize30").click(function(){
        $(".divaddclass .example").addClass("fontsize30");
    });

    $(".divbefore input").click(function(){
        $(".divbefore .example").before(' <span class="bgyellow textred">HERE!!!! </span> ');
    });

    $(".divafter input").click(function(){
        $(".divafter .example").after(' <span class="bggreen textwhite">HERE!!!! </span> ');
    });

    $(".divprepend input").click(function(){
        $(".divprepend .example").prepend(' <span class="bgorange textwhite">HERE!!!! </span> ');
    });

    $(".divappend input").click(function(){
        $(".divappend .example").append(' <span class="bgpurple textwhite">HERE!!!! </span> ');
    });

    $(".divhtml input").click(function() {
        var loremstring = $(".divhtml .example").html();
        $(".divhtml .example").text(loremstring);
    });

    $(".divattr input").click(function(){
        $(".divattr .example").after("<br>background-color : " + $(".divattr .example").css("background-color")+"<br>font-size : " + $(".divattr .example").css("font-size")+"<br>");
    });

    $(".divval input").click(function(){
        $("#textbox1").attr("placeholder",$(this).val());        
    });

    $(".divtext input").click(function(){
        var textstring = $(".divtext .example").text();
        $(".divtext .example").after("<br>"+textstring);
    });

    $(".divdata input").click(function(){
        $(".divdata .example").data("wordsave",{ "one":"lolol", "two":"omgomg" });
        $(".divdata .example").after("<br>" + $(".divdata .example").data("wordsave").one + "<br>" + $(".divdata .example").data("wordsave").two + "<br>");
    });

});

