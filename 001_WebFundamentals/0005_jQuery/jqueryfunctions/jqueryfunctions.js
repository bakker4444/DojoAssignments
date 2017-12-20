$(document).ready(function(){
    // .click() practice
    $(".divclick input").click(function() {
        $(".divclick .example").css("color","red");
    });

    // .hide() practice
    $(".divhide input").click(function(){
        $(".divhide .example").hide();
    });

    // .show() practice
    $(".divshow .example").hide();
    $(".divshow input").click(function(){
        $(".divshow .example").show();
    });

    // .toggle() practice
    $(".divtoggle input").click(function(){
        $(".divtoggle .example").toggle();
    });

    // .slideDown() practice
    $(".divslidedown .example").hide();
    $(".divslidedown input").click(function(){
        $(".divslidedown .example").slideDown();
    });

    // .slideUp() practice
    $(".divslideup input").click(function () {
        $(".divslideup .example").slideUp();
    });

    // .slideToggle() practice
    $(".divslidetoggle").click(function () {
        $(".divslidetoggle .example").slideToggle();
    });

    // .fadeIn() practice
    $(".divfadein .example").hide();
    $(".divfadein input").click(function(){
        $(".divfadein .example").fadeIn();
    });

    // .fadeOut() practice
    $(".divfadeout input").click(function(){
        $(".divfadeout .example").fadeOut();
    });

    // .addClass() practice
    $("#addclasscolorred").click(function(){
        $(".divaddclass .example").addClass("textred");
    });
    $("#addclassbgcolorblue").click(function(){
        $(".divaddclass .example").addClass("bgcolorblue");
    });
    $("#addclassfontsize30").click(function(){
        $(".divaddclass .example").addClass("fontsize30");
    });

    // .before() practice
    $(".divbefore input").click(function(){
        $(".divbefore .example").before(' <span class="bgyellow textred">HERE!!!! </span> ');
    });

    // .after() practice
    $(".divafter input").click(function(){
        $(".divafter .example").after(' <span class="bggreen textwhite">HERE!!!! </span> ');
    });

    // .prepend() practice
    $(".divprepend input").click(function(){
        $(".divprepend .example").prepend(' <span class="bgorange textwhite">HERE!!!! </span> ');
    });

    // .append() practice
    $(".divappend input").click(function(){
        $(".divappend .example").append(' <span class="bgpurple textwhite">HERE!!!! </span> ');
    });

    // .html() practice
    $(".divhtml input").click(function() {
        var loremstring = $(".divhtml .example").html();
        $(".divhtml .example").text(loremstring);
    });

    // .attr() practice
    $(".divattr input").click(function(){
        $(".divattr .example").after("<br>background-color : " + $(".divattr .example").css("background-color")+"<br>font-size : " + $(".divattr .example").css("font-size")+"<br>");
    });

    // .val() practice
    $(".divval input").click(function(){
        $("#textbox1").attr("placeholder",$(this).val());        
    });

    // .text() practice
    $(".divtext input").click(function(){
        var textstring = $(".divtext .example").text();
        $(".divtext .example").after("<br>"+textstring);
    });

    // .data() practice
    $(".divdata input").click(function(){
        $(".divdata .example").data("wordsave",{ "one":"lolol", "two":"omgomg" });
        $(".divdata .example").after("<br>" + $(".divdata .example").data("wordsave").one + "<br>" + $(".divdata .example").data("wordsave").two + "<br>");
    });

});

