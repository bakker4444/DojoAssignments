import UIKit

// Array create
var arr: [Int] = []
for i in 1...255 {
    arr.append(i)
}

// function definition : Swap random elements in array once
func swapRand(arr: inout [Int]) {
    let num1 = arc4random_uniform(UInt32(arr.count))
    let num2 = arc4random_uniform(UInt32(arr.count))
    let temp = arr[Int(num2)]
    arr[Int(num2)] = arr[Int(num1)]
    arr[Int(num1)] = temp
}

// function definition : Shuffle 100 times
func shuffle(arr: inout [Int], numOfShuffle: Int) {
    for _ in 1...numOfShuffle {
        swapRand(arr: &arr)
    }
}

func searchValueInArray(num: Int, arr: inout [Int]) {
    if let ind = arr.index(of: num) {
        print("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index \(ind)")
        arr.remove(at: ind)
    }
}

// Function call
shuffle(arr: &arr, numOfShuffle: 100)

// Check Shuffled array
print(arr)
print("\n")

// Remove specific value
searchValueInArray(num: 42, arr: &arr)

// Check result array
print(arr)
