import UIKit

struct Card {
    var color: String
    var roll: Int
    init () {
        self.color = ["Blue", "Red", "Green"][Int(arc4random_uniform(3))]
        if self.color == "Blue" {
            self.roll = Int(arc4random_uniform(2)) + 1
        } else if self.color == "Red" {
            self.roll = Int(arc4random_uniform(2)) + 3
        } else {
            self.roll = Int(arc4random_uniform(3)) + 4
        }
    }
}

class Deck {
    var numOfBlue, numOfRed, numOfGreen: Int
    var cards: [Card]
    
    init () {
        numOfBlue = 0
        numOfRed = 0
        numOfGreen = 0
        cards = []
        
        while (cards.count == 30) {
            let card: Card = Card()
            if card.color == "Blue" && numOfBlue < 10 {
                self.cards.append(card)
                self.numOfBlue += 1
            } else if card.color == "Red" && numOfRed < 10 {
                self.cards.append(card)
                self.numOfRed += 1
            } else if card.color == "Green" && numOfGreen < 10 {
                self.cards.append(card)
                self.numOfGreen += 1
            }
        }
        
        self.shuffle(numOfTimes: 300)
    }
    
    func deal () -> Card {
        return self.cards.removeLast()
    }
    
    func isEmpty () -> Bool {
        if cards.count == 0 {
            return true
        } else {
            return false
        }
    }
    
    func shuffle (numOfTimes: Int) {
        for _ in 0..<numOfTimes {
            let location1 = Int(arc4random_uniform(UInt32(self.cards.count)))
            let location2 = Int(arc4random_uniform(UInt32(self.cards.count)))
            var temp: Card
            
            temp = cards[location1]
            cards[location1] = cards[location2]
            cards[location2] = temp
        }
    }
}

class Player {
    var name: String
    var hand: [Card]
    
    init(name: String) {
        self.hand = []
        self.name = name
    }
    
    func draw (deck: Deck) {
        let card = deck.deal()
        self.hand.append(card)
    }
    
    func rollDice () -> Int {
        return Int(arc4random_uniform(6)) + 1
    }
    
    func matchingCards (color: String, roll: Int) -> Int {
        var numOfMatchingCards = 0
        for i in 0..<self.hand.count {
            if self.hand[i].color == color && self.hand[i].roll == roll {
                numOfMatchingCards += 1
            }
        }
        return numOfMatchingCards
    }
    
}
