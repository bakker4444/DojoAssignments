# Coding Dojo Bootcamp Assignment
## MEAN / Node / Math Module

### Assignment details

For this exercise, create a javascript file called **'mathlib.js'**.  We're not going to make a node server for this exercise, but we'll still make a file called app.js.  Within app.js, we're going to r**equire our mathlib module** and use its functionality to do some basic computations.

In this javascript module, you're going to return a javascript object that allows the developer to do the following tricks.

* add two numbers (e.g. math.add(2,3) should return 5)
* multiply two numbers (e.g. math.multiply(3,5) should return 15)
* square a number (e.g. math.square(5) should return 25)
* return a random number between the two numbers (e.g. math.random(1,35) should return a random number between 1 and 35)


Now there are a few different ways to do this, but the way we would recommend you structure your 'mathlib.js' is to do something like below:
```
module.exports = function (){
  return {
    add: function(num1, num2) {
         // add code here
    },
    multiply: function(num1, num2) {
         // add code here
    },
    square: function(num) {
         // add code here
    },
    random: function(num1, num2) {
         // add code here
    }
  }
};
```