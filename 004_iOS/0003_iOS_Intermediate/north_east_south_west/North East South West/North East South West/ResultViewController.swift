//
//  ResultViewController.swift
//  North East South West
//
//  Created by Madin Kim on 3/13/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class ResultViewController: UIViewController {
    
    var output: String?
    
    @IBOutlet weak var resultButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        resultButton.setTitle(output, for: UIControlState.normal)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
}
