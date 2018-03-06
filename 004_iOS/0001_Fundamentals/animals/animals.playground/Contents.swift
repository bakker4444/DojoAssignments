import UIKit

class Animal {
    var name: String
    var health: Int
    init(name: String) {
        self.name = name
        self.health = 100
    }
    
    func displayHealth () {
        print("My health is now", self.health)
    }
}

class Cat: Animal {
    
    override init(name: String) {
        super.init(name: name)
        self.health = 150
    }
    
    func growl() {
        print("Rawr!")
    }
    
    func run() {
        if self.health < 10 {
            print("I am tired so much ... I'm not gonna run here")
            self.health = 0
        } else {
            print("Running")
            self.health -= 10
        }
    }
}

class Cheetah: Cat {
    
    override func run() {
        if self.health < 50 {
            self.health = 0
            print("I am tired so much ... I'm not gonna run here")
        } else {
            self.health -= 50
            print("Running Fast")
        }
    }
    
    func sleep () {
        if self.health > 150 {
            self.health = 200
        } else {
            self.health += 50
        }
    }
}

class Lion: Cat {

    override init(name: String) {
        super.init(name: name)
        self.health = 200
    }
    
    override func growl() {
        print("ROAR!!!! I am the King of the Jungle")
    }
}


print("======== Cheetah ========")
// Create a Cheetah
var cheetah1 = Cheetah(name: "CheChe")

// Check cheetah1's health first
cheetah1.displayHealth()

// Run 4 times
for _ in 0..<4 {
    cheetah1.run()
}

// Display the Cheetah's health
cheetah1.displayHealth()

print("========== Lion ==========")
// Create a Lion
var lion1 = Lion(name: "LeonLeon")

// Check lion1's health first
lion1.displayHealth()

// Run 3 times
for _ in 0..<3 {
    lion1.run()
}

// Check lion1's health
lion1.displayHealth()

// Have the Lion growl
lion1.growl()


