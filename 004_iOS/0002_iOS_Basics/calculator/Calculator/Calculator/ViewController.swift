//
//  ViewController.swift
//  Calculator
//
//  Created by Madin Kim on 3/9/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var numberLabel: UILabel!
    
    var dotAdded = false
    
    @IBAction func numberButtonPressed(_ sender: UIButton) {
        if sender.tag == -2 {
            numberLabel.text = "0"
        } else if sender.tag == -1 {
            if !dotAdded {
                numberLabel.text?.append(".")
                dotAdded = true
            }
        } else {
            if numberLabel.text == "0" {
                numberLabel.text = String(sender.tag)
            } else {
                numberLabel.text?.append(String(sender.tag))
            }
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}

