function fancyArray (objects,direction,reversed) {
    if (reversed === undefined) {
        reversed = false;
    }
    if (direction === undefined) {
        direction = "-->"
    }

    for (var i = 0; i < objects.length; i++) {
        if (reversed == false){
            console.log(i + " " + direction + " " + objects[i]);
        } else {
            console.log(i + " " + direction + " " + objects[objects.length-1-i]);
        }
        
    }
}
fancyArray([ "James", "Jill", "Jane", "Jack" ]);
fancyArray([ "James", "Jill", "Jane", "Jack" ], "->");
fancyArray([ "James", "Jill", "Jane", "Jack" ], "::",true);
