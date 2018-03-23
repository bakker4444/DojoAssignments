//
//  addToDoListViewController.swift
//  TodoList App
//
//  Created by Madin Kim on 3/19/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class AddToDoListViewController: UIViewController {
    
    var delegate: AddToDoListViewControllerDelegate?
    
    @IBOutlet weak var titleTextField: UITextField!
    @IBOutlet weak var descriptionTextView: UITextView!
    @IBOutlet weak var datePicker: UIDatePicker!
    
    var toDoListTitle: String = ""
    var toDoListDesc: String = ""
    var toDoListDate: Date = Date()
    var toDoListFinished: Bool = false
    
    @IBAction func datePickerChanged(_ sender: UIDatePicker) {
        print(sender.date)
        
        // Date Formatting part
        let dateFormatter = DateFormatter()
        dateFormatter.dateStyle = .short
        dateFormatter.timeStyle = .none
        self.toDoListDate = sender.date
        
    }
    
    // item add to DB using delegate
    @IBAction func addItemPressed(_ sender: UIButton) {
        
        let toDoListItemTitle = titleTextField.text!
        let toDoListItemDesc = descriptionTextView.text!
        let toDoListItemDate = self.toDoListDate

        delegate?.itemSaved(by: self, withTitle: toDoListItemTitle, withDescription: toDoListItemDesc, withDate: toDoListItemDate)
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        datePicker.date = Date()
        titleTextField.placeholder = "Title ..."
        descriptionTextView.text = "Desc ..."
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}
