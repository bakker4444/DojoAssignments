# Coding Dojo Bootcamp Assignment
## MEAN / Javascript / Ninja Class II

### Assignment details

Complete the below challenges using Ninja from the previous assignment.

**.punch()**

Add a new method to Ninja called `.punch()`. This method will take another Ninja instance and subtract 5 Health *from the Ninja we passed in*. Your `.punch()` should display a console message like the below example.
```
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
```

**.kick()**

Now add a method to your Ninja class called `.kick()`. Kick will subtract 15 Health for each point of Strength the *calling* Ninja has, and like `.punch()` will take another Ninja instance.
```
blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength
```

**Validations**

Update `.punch()` and `.kick()` so that they only accept Instances of Ninja. Hint: You will need to find a way to check the constructor of an instance. You will often need to consult outside documentation to find solutions for particular features.

