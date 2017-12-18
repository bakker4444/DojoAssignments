// console.log("Hello");


function printRange(start, end, step){
    if (step === undefined) {
        step = 1;
    }
    if (end === undefined) {
        end = start;    
        start = 0;
    }

    for (var i = start; i < end; i += step){
        console.log(i);
    }
}
