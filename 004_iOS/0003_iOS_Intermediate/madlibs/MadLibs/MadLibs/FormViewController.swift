//
//  formViewController.swift
//  MadLibs
//
//  Created by Madin Kim on 3/13/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class FormViewController: UIViewController {
    
    @IBOutlet var textFieldList: [UITextField]!
    
    var placeholderList: [String] = ["", "", "", ""]
    
    var textFieldValueList: [String] = ["", "", "", ""]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        for i in 0..<textFieldList.count {
            textFieldList[i].placeholder = placeholderList[i]
            textFieldList[i].text = textFieldValueList[i]
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}
