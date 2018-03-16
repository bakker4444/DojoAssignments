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
    
    var wordsList: [String] = ["", "", "", ""]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let destination = segue.destination as! FormViewController
        if textLabel.text == "...." {
            destination.placeholderList[0] = "Adjective"
            destination.placeholderList[1] = "Verb"
            destination.placeholderList[2] = "Verb"
            destination.placeholderList[3] = "Noun"
        } else {
            destination.textFieldValueList[0] = wordsList[0]
            destination.textFieldValueList[1] = wordsList[1]
            destination.textFieldValueList[2] = wordsList[2]
            destination.textFieldValueList[3] = wordsList[3]
        }
    }

    @IBAction func unwindSegueFromFormViewController (_ sender: UIStoryboardSegue) {
        let source = sender.source as! FormViewController
        wordsList[0] = source.textFieldList[0].text!
        wordsList[1] = source.textFieldList[1].text!
        wordsList[2] = source.textFieldList[2].text!
        wordsList[3] = source.textFieldList[3].text!
        textLabel.text = wordsList[0] + " , " + wordsList[1] + " , " + wordsList[2] + " , " + wordsList[3]
        print(wordsList)
        print("Unwinded!")
    }

}

