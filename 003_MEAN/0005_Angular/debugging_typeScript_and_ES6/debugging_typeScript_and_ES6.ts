class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
}

document.body.appendChild(button);



// Assignment

// 1. Setting types

var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";
// change 9 to "9" --> number to string



// 2. Setting the types for function parameters

function sayHello(name: string) {
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("9"));
// change 9 to "9" --> number to string



// 3. Optional parameters

function fullName(firstName: string, lastName: string, middleName ? : string) {
    // add ? right after the key called middleName --> make middleName variable as optional
    // condition to check whether middleName is exists or not
    if (middleName) {
        return `${firstName} ${middleName} ${lastName}`;
    } else {
        return `${firstName} ${lastName}`;
    }
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));



// 4. Interfaces and function parameters

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}

function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
    // key called belt should be same as the interface defined --> belt to belts
}

// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));



// 5. Classes and function parameters

class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string
    ) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug ? () {
        // add debug method as optional
        console.log("Console.log() is my friend.");
    }
}
// This is not making an instance of Ninja, for some reason:
// const shane = new Ninja();
const shane = new Ninja("Hoho", "Huhu");
// add new before class, and add firstName, and lastName parameter into class

// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja) {
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));



// 6. Arrow functions

var increment = (x) => x + 1;
// add ( )

// This works great:
console.log(increment(3));

var square = (x) => x * x;
// remove { }

// This is not showing me what I want:
console.log(square(4));

// This is not working:
var multiply = (x, y) => x * y;
// add ( )

// Nor is this working:
var math = (x, y) => {
    let sum = x + y;
    let product = (x, y) => x * y;
    let difference = (x, y) => Math.abs(x - y);
    return [sum, product, difference];
}
// add { }



// 7. Arrow functions and 'this'

class Elephant {
    constructor(public age: number) { }
    birthday = () => {
        // change normal function to lambda function
        this.age++;
    }
}

const babar = new Elephant(8);
setTimeout(babar.birthday(), 1000)
// add ( )

setTimeout(function () {
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
