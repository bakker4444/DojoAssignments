var showmethemoney = 0.01;
var duration = 30;
var mypocket1 = showmethemoney;

for (var i = 0; i < duration; i++ ){
    showmethemoney *= 2;
    mypocket1 += showmethemoney;
}
console.log("The Money after the",duration,"day(s) : $", mypocket1);

var getmetotenthousand = 0.01;
var daycount = 1;
var mypocket2 = getmetotenthousand;
while (mypocket2 < 10000) {
    getmetotenthousand *= 2;
    mypocket2 += getmetotenthousand;
    daycount++;
}
console.log("The day needed to be over $ 10,000 :", daycount, "day(s)");

var getmetobillionman = 0.01;
var countday = 1;
var mypocket3 = getmetobillionman;
while (mypocket3 < 1000000000) {
    getmetobillionman *= 2;
    mypocket3 += getmetobillionman;
    countday += 1;
}
console.log("The day needed to be over $ 1,000,000,000 :", countday, "day(s)");

var getmetoinfinity = 0.01;
var infinityday = 1;
var mypocket4 = getmetoinfinity;
while (mypocket4 != Infinity) {
    getmetoinfinity *= 2;
    mypocket4 += getmetoinfinity;
    infinityday += 1;
}
console.log("The day needed reaching Infinity :", infinityday, "day(s)");