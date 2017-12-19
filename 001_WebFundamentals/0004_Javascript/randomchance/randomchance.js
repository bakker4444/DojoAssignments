"use strict";

function randomchancelimit (userhighlimit) {
    var coinnumber = Math.floor(Math.random()*51) + 50;             // initial number of quaters : 50 ~ 100
    var randomwinningnumber = Math.floor(Math.random()*100)+1;      // winning number define for games : 1 ~ 100

    while(true) {
        var randomhittingnumber = Math.floor(Math.random()*100)+1;      // The number for each rolling : 1 ~ 100;

        if (randomwinningnumber !== randomhittingnumber) {
            // console.log("Coin:",coinnumber,", Win #: ",randomwinningnumber, ", Hit #: ",randomhittingnumber, ", FAIL");      // Check Status on console
            coinnumber --;                                              // when game lose, coin - 1
        } else {
            // console.log("Coin:",coinnumber,", Win #: ",randomwinningnumber, ", Hit #: ",randomhittingnumber, ", YOU WON!!!!");  // Check Status on console
            coinnumber += Math.floor(Math.random()*51) + 50;            // when game win, coin + random number coin 50~100
            if (userhighlimit === undefined) {
                return coinnumber;
            } else {
                // continue;
                if (coinnumber >= userhighlimit) {
                    return coinnumber;
                }
            }
        }
        if (userhighlimit === undefined) {
            if (coinnumber == 0) {
                return coinnumber;
            }
        } else {
            if (coinnumber == 0 || coinnumber >= userhighlimit) {
                return coinnumber;
            }
        }
    }
}

console.log(randomchancelimit());           // finish games when the game won.
console.log(randomchancelimit(150));        // game with high coin limit