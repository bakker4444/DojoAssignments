//
//  CustomCellDelegate.swift
//  Binary Counter
//
//  Created by Madin Kim on 3/15/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

protocol CustomCellDelegate {
    func leftMinusButtonOperation ( from cell: CustomCell )
    func rightPlusButtonOperation ( from cell: CustomCell )
}
