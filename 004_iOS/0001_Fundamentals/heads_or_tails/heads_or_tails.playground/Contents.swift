import UIKit

func tossCoin() -> String {
    print("Tossing a Coin!")
    var result: String
    if arc4random_uniform(2) == 1 {
        result = "Heads"
    } else {
        result = "Tails"
    }
    print(result)
    return result
}

func tossMultipleCoins(num: Int) -> Double {
    var numberOfHeads : Double = 0.0
    if num == 0 {
        return 0.0
    }
    for _ in 1...num {
        if tossCoin() == "Heads" {
            numberOfHeads += 1.0
        }
    }
    return numberOfHeads / Double(num)
}

print(tossMultipleCoins(num: 10))
