# Coding Dojo Bootcamp Assignment
## MEAN / Javascript / Ninja Class III

### Assignment details

**Part I**

Recreate the base Ninja class from scratch using **ES6 classes**. Your Ninja needs the following public attributes (do not worry about private variables for this assignment):

* name
* health
* speed
* strength


`Speed` and `strength` should be 3 by default. `Health` should be 100 by default.

The Ninja class should have the following methods:

* **sayName()** - This should log that Ninja's name to the console.
* **showStats()** - This should show the Ninja's name, strength, speed, and health.
* **drinkSake()** - This should add +10 health to the Ninja


**Part II - Sensei Class**

Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the `speakWisdom()` method. `speakWisdom()` should call the `drinkSake()` method from the Ninja class, before console.logging a wise message.
```
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
```
