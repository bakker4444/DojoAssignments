# Coding Dojo Bootcamp Assignment
## MEAN / Javascript / Ninja Class

### Assignment details

Create a new object constructor called `Ninja` with the following attributes:

* name
* health
* speed (private)
* strength (private)


`Speed` and `strength` should be 3 by default. `Health` should be 100 by default.

Ninja should have the following methods:

* sayName() - This should log that Ninja's name to the console.
* showStats() - This should show the Ninja's name, strength, speed, and health.
* drinkSake() - This should add +10 Health to the Ninja

**Example Outputs**
```
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
```
