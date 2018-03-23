//
//  addToDoListViewControllerDelegate.swift
//  TodoList App
//
//  Created by Madin Kim on 3/22/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import Foundation

protocol AddToDoListViewControllerDelegate {
    func itemSaved(by controller: AddToDoListViewController, withTitle title: String, withDescription desc: String, withDate date: Date)
}
