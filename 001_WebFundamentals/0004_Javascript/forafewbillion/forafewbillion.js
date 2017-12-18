var showmethemoney = 0.01;
var duration = 30;
for (var i = 0; i < duration; i++ ){
    showmethemoney *= 2;
}
console.log("The Money after the",duration,"day(s) : $", showmethemoney);

var getmetotenthousand = 0.01;
var daycount = 1;
while (getmetotenthousand < 10000) {
    getmetotenthousand *= 2;
    daycount++;
}
console.log("The day needed to be over $ 10,000 :", daycount, "day(s)");

var getmetobillionman = 0.01;
var countday = 1;
while (getmetobillionman < 1000000000) {
    getmetobillionman *= 2;
    countday += 1;
}
console.log("The day needed to be over $ 1,000,000,000 :", countday, "day(s)");

var getmetoinfinity = 0.01;
var infinityday = 1;
while (getmetoinfinity != Infinity) {
    getmetoinfinity *= 2;
    infinityday += 1;
}
console.log("The day needed reaching Infinity :", infinityday, "day(s)");