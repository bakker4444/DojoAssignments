import UIKit

// First, create a loop (either for or while) that prints all of the values from 1-255
print("================ Problem 1 ================")
for i in 1...255 {
    print(i)
}

// Next, create a program that prints all of the values from 1-100 that are divisible by 3 or 5 but not both
print("================ Problem 2 ================")
for i in 1...100 {
    if (i % 3 == 0 || i % 5 == 0) && (i % 15 != 0) {
        print(i)
    }
}

// Now modify that program to print "Fizz" when the number is divisible by 3 and "Buzz" when the number is divisible by 5 as well as "FizzBuzz" when the number is divisible by both! (See Below).
print("================ Problem 3 ================")
for i in 1 ... 100 {
    var str = ""
    if i % 3 == 0 {
        str += "Fizz"
    }
    if i % 5 == 0 {
        str += "Buzz"
    }
    print("\(i) : \(str)")
}
