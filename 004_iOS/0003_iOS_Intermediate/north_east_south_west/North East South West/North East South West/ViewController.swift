//
//  ViewController.swift
//  North East South West
//
//  Created by Madin Kim on 3/13/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        let destination = segue.destination as! ResultViewController
        if segue.identifier == "North" {
            destination.output = "North"
        } else if segue.identifier == "South" {
            destination.output = "South"
        } else if segue.identifier == "West" {
            destination.output = "West"
        } else if segue.identifier == "East" {
            destination.output = "East"
        }
    }
    
    @IBAction func unwindSegueFromResultViewController (_ sender: UIStoryboardSegue) {
        print("This is unwind")
    }
    
    
}

