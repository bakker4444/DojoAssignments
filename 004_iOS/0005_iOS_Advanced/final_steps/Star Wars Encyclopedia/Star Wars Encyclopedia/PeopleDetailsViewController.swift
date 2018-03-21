//
//  PeopleDetailsViewController.swift
//  Star Wars Encyclopedia
//
//  Created by Madin Kim on 3/20/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class PeopleDetailsViewController: UIViewController {

    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var genderLabel: UILabel!
    @IBOutlet weak var birthYearLabel: UILabel!
    @IBOutlet weak var massLabel: UILabel!
    
    var name: String?
    var gender: String?
    var birthYear: String?
    var mass: String?
    
    var indexPath: NSIndexPath?
    
    @IBAction func dismissButtonPressed(_ sender: UIButton) {
            dismiss(animated: true, completion: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        nameLabel.text = "Name : \n" + name!
        genderLabel.text = "Gender : \n" + gender!
        birthYearLabel.text = "Birth Year : \n" + birthYear!
        massLabel.text = "Mass : \n" + mass!
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}
