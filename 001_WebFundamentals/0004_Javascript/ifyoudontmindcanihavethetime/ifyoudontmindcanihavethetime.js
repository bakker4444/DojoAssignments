var HOUR = 7;
var MINUTE = 15;
var PERIOD = "AM";
var morning = "in the morning";
var evening = "in the evening";

if (MINUTE < 30) {
    if (PERIOD == "AM") {
        console.log("It's just after", HOUR, morning );
    } else {
        console.log("It's just after", HOUR, evening );
    }
} else {
    if (PERIOD == "AM") {
        console.log("It's almost", HOUR+1, morning );
    }  else {
        console.log("It's almost ", HOUR+1, evening );
    }
}
