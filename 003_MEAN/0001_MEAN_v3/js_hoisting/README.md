# Coding Dojo Bootcamp Assignment
## MEAN / Javascript / JavaScript Hoisting

### Assignment details

**Objectives:**

1. Practice reading JavaScript the same way as the interpreter reads it.

---

Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:

```
// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
var example;
console.log(example); // logs undefined
example = "I'm the example!";
```

After you've made your prediction, run the original code to find out if you were right! If your predictions were incorrect, look back at how the code is hoisted by the interpreter.

**Note**

Run the same code as above with ES6 syntax and compare your results:

```
console.log(example);
let example = "I'm the example!";
```

Even if `let` and `const` prevent a lot of the confusing behavior of JavaScript's hoisting, these are ES6 constructs and a huge amount of the world's live JavaScript code is still ES5. Understanding how ES5 hoists `var` and the rules of scoping are important for every JavaScript developer!

**1**
```
console.log(hello);
var hello = 'world';
```

**2**
```
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
```

**3**
```
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
```

**4**
```
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
```

**5**
```
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
```

**6**
```
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
```

**7**
```
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
```

**8 - Bonus ES6: const**
```
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
```
- [ ] Rewrite the given code as it is seen by the interpreter
- [ ] Predict the outputs
- [ ] Run the original code and compare the outputs to your predictions