//
//  ViewController.swift
//  Tipster
//
//  Created by Madin Kim on 3/7/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var priceLabel: UILabel!
    @IBOutlet var percentageLabel: [UILabel]!
    @IBOutlet var sliderList: [UISlider]!
    @IBOutlet var tipLabel: [UILabel]!
    @IBOutlet var totalLabel: [UILabel]!
    @IBOutlet weak var groupSizeLabel: UILabel!
    
    var dotPressed = false
    
    @IBAction func numberButtonPressed(_ sender: UIButton) {
        if sender.tag == -2 {   // "C" clicked, reset priceLabel
            priceLabel.text = "0"
            dotPressed = false
            
        } else if sender.tag == -1 {
            if !dotPressed {
                priceLabel.text?.append(".")
                dotPressed = true
            }
        } else {
            if priceLabel.text == "0" {
                priceLabel.text = String(sender.tag)
            } else {
                priceLabel.text?.append(String(sender.tag))
            }
            
        }
        tipUpdate()
    }
    @IBAction func sliderMoved(_ sender: UISlider) {
        print(sliderList[0])
        print(sliderList[1])
        groupSizeLabel.text = "Group Size: " + String(Int(sliderList[1].value))
        tipUpdate()
    }
    
    
    func tipUpdate() {
        let currentTipPercentageNumber = floor(sliderList[0].value)
        let currentGroupSize = floor(sliderList[1].value)
        percentageLabel[0].text = String(currentTipPercentageNumber-5) + "%"
        percentageLabel[1].text = String(currentTipPercentageNumber) + "%"
        percentageLabel[2].text = String(currentTipPercentageNumber+5) + "%"

        if let currentPrice = Float(priceLabel.text!) {
            tipLabel[0].text = "$" + String(format:"%0.2f", (currentPrice*(currentTipPercentageNumber-5)/100) / currentGroupSize)
            tipLabel[1].text = "$" + String(format:"%0.2f", (currentPrice*(currentTipPercentageNumber)/100) / currentGroupSize)
            tipLabel[2].text = "$" + String(format:"%0.2f", (currentPrice*(currentTipPercentageNumber+5)/100) / currentGroupSize)
            
            totalLabel[0].text = "$" + String(format:"%0.2f", (currentPrice + (currentPrice*(currentTipPercentageNumber-5)/100)) / currentGroupSize)
            totalLabel[1].text = "$" + String(format:"%0.2f", (currentPrice + (currentPrice*(currentTipPercentageNumber)/100)) / currentGroupSize)
            totalLabel[2].text = "$" + String(format:"%0.2f", (currentPrice + (currentPrice*(currentTipPercentageNumber+5)/100)) / currentGroupSize)
        } else {
            print("Not a valid number: \(priceLabel.text!)")
        }
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view, typically from a nib.

        print(tipLabel)
        
        tipUpdate()
        
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

