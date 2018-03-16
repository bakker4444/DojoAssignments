//
//  CustomCell.swift
//  Binary Counter
//
//  Created by Madin Kim on 3/14/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit
class CustomCell: UITableViewCell {
    
    var delegate: CustomCellDelegate?
    
    @IBOutlet weak var rightPlusButton: UIButton!
    @IBOutlet weak var leftMinusButton: UIButton!
    @IBOutlet weak var middleNumberLabel: UILabel!
    
    @IBAction func leftMinusButtonPressed(_ sender: UIButton) {
        delegate?.leftMinusButtonOperation(from: self)
        print("Minus Button Pressed, " + middleNumberLabel.text!)
    }
    
    @IBAction func rightPlusButtonPressed(_ sender: UIButton) {
        delegate?.rightPlusButtonOperation(from: self)
        print("Plus Button Pressed, " + middleNumberLabel.text!)
    }

}
