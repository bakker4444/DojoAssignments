//
//  ViewController.swift
//  Tic Tac Toe
//
//  Created by Madin Kim on 3/7/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var winnerLabel: UILabel!

    @IBOutlet weak var buttonX0Y0: UIButton!
    @IBOutlet weak var buttonX0Y1: UIButton!
    @IBOutlet weak var buttonX0Y2: UIButton!

    @IBOutlet weak var buttonX1Y0: UIButton!
    @IBOutlet weak var buttonX1Y1: UIButton!
    @IBOutlet weak var buttonX1Y2: UIButton!

    @IBOutlet weak var buttonX2Y0: UIButton!
    @IBOutlet weak var buttonX2Y1: UIButton!
    @IBOutlet weak var buttonX2Y2: UIButton!
    
    var playerState = false     // false: player1, true: player2
    
    func buttonClicked(_ button: UIButton) {
        if !playerState && button.backgroundColor == UIColor.gray {
            // color change with duration
            UIView.animate(withDuration: 0.5, animations: {() -> Void in button.backgroundColor = UIColor.red })
            // button.backgroundColor = UIColor.red
            playerState = !playerState
        } else if playerState && button.backgroundColor == UIColor.gray {
            // color change with duration
            UIView.animate(withDuration: 0.5, animations: {() -> Void in button.backgroundColor = UIColor.blue })
            // button.backgroundColor = UIColor.blue
            playerState = !playerState
        }
    }
    
    func buttonReset(_ button: UIButton) {
        // color change with duration
        UIView.animate(withDuration: 0.5, animations: {() -> Void in button.backgroundColor = UIColor.gray })
        // button.backgroundColor = UIColor.gray
    }
    
    @IBAction func buttonX0Y0Pressed(_ sender: UIButton) {
        buttonClicked(sender)
        winningCheck()
    }
    @IBAction func buttonX0Y1Pressed(_ sender: UIButton) {
        buttonClicked(sender)
        winningCheck()
    }
    @IBAction func buttonX0Y2Pressed(_ sender: UIButton) {
        buttonClicked(sender)
        winningCheck()
    }
    @IBAction func buttonX1Y0Presssed(_ sender: UIButton) {
        buttonClicked(sender)
        winningCheck()
    }
    @IBAction func buttonX1Y1Presssed(_ sender: UIButton) {
        buttonClicked(sender)
        winningCheck()
    }
    @IBAction func buttonX1Y2Presssed(_ sender: UIButton) {
        buttonClicked(sender)
        winningCheck()
    }
    @IBAction func buttonX2Y0Presssed(_ sender: UIButton) {
        buttonClicked(sender)
        winningCheck()
    }
    @IBAction func buttonX2Y1Presssed(_ sender: UIButton) {
        buttonClicked(sender)
        winningCheck()
    }
    @IBAction func buttonX2Y2Presssed(_ sender: UIButton) {
        buttonClicked(sender)
        winningCheck()
    }
    
    @IBAction func resetButtonPressed(_ sender: UIButton) {
        buttonReset(buttonX0Y0)
        buttonReset(buttonX0Y1)
        buttonReset(buttonX0Y2)
        buttonReset(buttonX1Y0)
        buttonReset(buttonX1Y1)
        buttonReset(buttonX1Y2)
        buttonReset(buttonX2Y0)
        buttonReset(buttonX2Y1)
        buttonReset(buttonX2Y2)
        playerState = false
        winnerLabel.isHidden = true
        allButtonEnable(result: true)
    }
    
    func allButtonEnable(result: Bool) {
        buttonX0Y0.isEnabled = result
        buttonX0Y1.isEnabled = result
        buttonX0Y2.isEnabled = result

        buttonX1Y0.isEnabled = result
        buttonX1Y1.isEnabled = result
        buttonX1Y2.isEnabled = result

        buttonX2Y0.isEnabled = result
        buttonX2Y1.isEnabled = result
        buttonX2Y2.isEnabled = result
    }
    
    func winningCheck() {
        // Red win case
        if  (buttonX0Y0.backgroundColor == UIColor.red && buttonX0Y1.backgroundColor == UIColor.red && buttonX0Y2.backgroundColor == UIColor.red) ||
            (buttonX1Y0.backgroundColor == UIColor.red && buttonX1Y1.backgroundColor == UIColor.red && buttonX1Y2.backgroundColor == UIColor.red) ||
            (buttonX2Y0.backgroundColor == UIColor.red && buttonX2Y1.backgroundColor == UIColor.red && buttonX2Y2.backgroundColor == UIColor.red) ||    // horizontal
            (buttonX0Y0.backgroundColor == UIColor.red && buttonX1Y0.backgroundColor == UIColor.red && buttonX2Y0.backgroundColor == UIColor.red) ||
            (buttonX0Y1.backgroundColor == UIColor.red && buttonX1Y1.backgroundColor == UIColor.red && buttonX2Y1.backgroundColor == UIColor.red) ||
            (buttonX0Y2.backgroundColor == UIColor.red && buttonX1Y2.backgroundColor == UIColor.red && buttonX2Y2.backgroundColor == UIColor.red) ||    // vertical
            (buttonX0Y0.backgroundColor == UIColor.red && buttonX1Y1.backgroundColor == UIColor.red && buttonX2Y2.backgroundColor == UIColor.red) ||
            (buttonX0Y2.backgroundColor == UIColor.red && buttonX1Y1.backgroundColor == UIColor.red && buttonX2Y0.backgroundColor == UIColor.red)       // diagonal
        {
            winnerLabel.text = "Congrats Red wins"
            winnerLabel.isHidden = false
            allButtonEnable(result: false)
        }
        // Blue win case
        else if (buttonX0Y0.backgroundColor == UIColor.blue && buttonX0Y1.backgroundColor == UIColor.blue && buttonX0Y2.backgroundColor == UIColor.blue) ||
            (buttonX1Y0.backgroundColor == UIColor.blue && buttonX1Y1.backgroundColor == UIColor.blue && buttonX1Y2.backgroundColor == UIColor.blue) ||
            (buttonX2Y0.backgroundColor == UIColor.blue && buttonX2Y1.backgroundColor == UIColor.blue && buttonX2Y2.backgroundColor == UIColor.blue) ||    // horizontal
            (buttonX0Y0.backgroundColor == UIColor.blue && buttonX1Y0.backgroundColor == UIColor.blue && buttonX2Y0.backgroundColor == UIColor.blue) ||
            (buttonX0Y1.backgroundColor == UIColor.blue && buttonX1Y1.backgroundColor == UIColor.blue && buttonX2Y1.backgroundColor == UIColor.blue) ||
            (buttonX0Y2.backgroundColor == UIColor.blue && buttonX1Y2.backgroundColor == UIColor.blue && buttonX2Y2.backgroundColor == UIColor.blue) ||    // vertical
            (buttonX0Y0.backgroundColor == UIColor.blue && buttonX1Y1.backgroundColor == UIColor.blue && buttonX2Y2.backgroundColor == UIColor.blue) ||
            (buttonX0Y2.backgroundColor == UIColor.blue && buttonX1Y1.backgroundColor == UIColor.blue && buttonX2Y0.backgroundColor == UIColor.blue)       // diagonal
        {
            winnerLabel.text = "Congrats Blue wins"
            winnerLabel.isHidden = false
            allButtonEnable(result: false)
        }
        // Draw case
        else if buttonX0Y0.backgroundColor != UIColor.gray
            && buttonX0Y1.backgroundColor != UIColor.gray
            && buttonX0Y2.backgroundColor != UIColor.gray
            && buttonX1Y0.backgroundColor != UIColor.gray
            && buttonX1Y1.backgroundColor != UIColor.gray
            && buttonX1Y2.backgroundColor != UIColor.gray
            && buttonX2Y0.backgroundColor != UIColor.gray
            && buttonX2Y1.backgroundColor != UIColor.gray
            && buttonX2Y2.backgroundColor != UIColor.gray
        {
            winnerLabel.text = "Draw the game!"
            winnerLabel.isHidden = false
            allButtonEnable(result: false)
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        buttonReset(buttonX0Y0)
        buttonReset(buttonX0Y1)
        buttonReset(buttonX0Y2)
        buttonReset(buttonX1Y0)
        buttonReset(buttonX1Y1)
        buttonReset(buttonX1Y2)
        buttonReset(buttonX2Y0)
        buttonReset(buttonX2Y1)
        buttonReset(buttonX2Y2)
        buttonX0Y0.layer.cornerRadius = 10
        buttonX0Y1.layer.cornerRadius = 10
        buttonX0Y2.layer.cornerRadius = 10
        buttonX1Y0.layer.cornerRadius = 10
        buttonX1Y1.layer.cornerRadius = 10
        buttonX1Y2.layer.cornerRadius = 10
        buttonX2Y0.layer.cornerRadius = 10
        buttonX2Y1.layer.cornerRadius = 10
        buttonX2Y2.layer.cornerRadius = 10
        winnerLabel.isHidden = true
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}

