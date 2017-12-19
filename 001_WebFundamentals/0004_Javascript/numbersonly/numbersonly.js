"use strict";

function numbersOnly(obj) {                     // Using New array inside of function
    var new_obj = [];
    for (var i = 0; i < obj.length; i++){
        if (typeof obj[i] === "number"){
            new_obj.push(obj[i]);
        }
    }
    return new_obj;
}

var newArray1 = numbersOnly([1, "apple", -3, "orange", 0.5]);
console.log(newArray1);

function numbersRemoveNotUsingNewArray(obj){      // Using input objects array
    var j = 0;
    var numbercount = 0;
    for (var i = 0; i < obj.length; i++){
        if (typeof obj[i] === "number"){
            obj[j] = obj[i];
            j++;
        }
    }
    var numberofpop = obj.length-j;
    for (var k = 0; k < numberofpop; k++) {
        obj.pop();
    }
    return obj;
}

var newArray2 = numbersRemoveNotUsingNewArray([1, "apple", -3, "orange", 0.5]);
console.log(newArray2);

/************** (cf) Good Example Code

function numbersOnlyRemove(arr){
    for (var i = 0; i < arr.length; i++) {
        while(typeof(arr[i]) != "number"){
            for (var k = i; k < arr.length; k++) {
                arr[k] = arr[k+1]
            }
            arr.pop()
        }
    }
    console.log(arr);
}
numbersOnlyRemove([1, "apple", -3, "orange", 0.5])

**********************/