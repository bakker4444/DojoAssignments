//
//  AddItemTableViewControllerDelegate.swift
//  Bucket List CRUD
//
//  Created by Madin Kim on 3/12/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import Foundation

protocol AddItemTableViewControllerDelegate {
    func itemSaved(by controller: AddItemTableViewController, with text: String, at indexPath: NSIndexPath?)
    func cancelButtonPressed(by controller: AddItemTableViewController)
}
