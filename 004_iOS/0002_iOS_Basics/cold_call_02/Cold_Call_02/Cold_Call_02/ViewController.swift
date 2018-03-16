//
//  ViewController.swift
//  Cold_Call_02
//
//  Created by Madin Kim on 3/7/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var numberLabel: UILabel!
    
    let nameList = ["Ready?", "Uyanga", "Courtney", "Jay", "Bryant", "Jimmy", "Cody", "Ryota"]
    
    var currentIndex = 0
    var randomNumber: Int = 0
    
    
    @IBAction func buttonPressed(_ sender: UIButton) {
        if numberLabel.isHidden {
            numberLabel.isHidden = false
        }
        currentIndex = Int(arc4random_uniform(UInt32(nameList.count-1))+1)
        randomNumber = Int(arc4random_uniform(5)+1)
        if randomNumber == 1 || randomNumber == 2 {
            numberLabel.textColor = UIColor.red
        } else if randomNumber == 3 || randomNumber == 4 {
            numberLabel.textColor = UIColor.orange
        } else {
            numberLabel.textColor = UIColor.green
        }
        updateUI()
    }
    
    func updateUI() {
        nameLabel.text = nameList[currentIndex]
        numberLabel.text = String(randomNumber)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        numberLabel.isHidden = true
        updateUI()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

