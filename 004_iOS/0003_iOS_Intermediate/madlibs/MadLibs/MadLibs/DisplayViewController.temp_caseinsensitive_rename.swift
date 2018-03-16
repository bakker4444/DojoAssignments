//
//  ViewController.swift
//  MadLibs
//
//  Created by Madin Kim on 3/13/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class DisplayViewController: UIViewController {
    
    @IBOutlet weak var textLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if textLabel.text == "...." {
            
        }
    }

    @IBAction func unwindSegueFromFormViewController (_ sender: UIStoryboardSegue) {
        print("Unwinded!")
    }

}

