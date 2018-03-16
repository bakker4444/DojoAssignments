//
//  ViewController.swift
//  Cold_Call_01
//
//  Created by Madin Kim on 3/7/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var nameLabel: UILabel!
    
    let nameList = ["Ready?", "Uyanga", "Courtney", "Jay", "Bryant", "Jimmy", "Cody", "Ryota"]
    
    var currentIndex = 0
    
    @IBAction func buttonPressed(_ sender: UIButton) {
        currentIndex = Int(arc4random_uniform(UInt32(nameList.count-1))+1)
        updateUI()
    }
    
    func updateUI() {
        nameLabel.text = nameList[currentIndex]
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        updateUI()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}

