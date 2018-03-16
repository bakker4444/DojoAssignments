//
//  ViewController.swift
//  Aging People
//
//  Created by Madin Kim on 3/12/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var tableView: UITableView!

    // Create this array at the top of your class as a property
    var tasks = ["George", "Betty", "Fran", "Joe", "Helda", "Winifred", "Zed", "Sara", "Jeffy", "Abraham", "Anna", "Melinda"]

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        tableView.dataSource = self
        print(tableView)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}

extension ViewController: UITableViewDataSource {
    // MAKE SURE THESE ARE WITHIN UITableViewDataSource EXTENSION!
    // How many cells are we going to need?
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    // return an integer that indicates how many rows (cells) to dra}
        return tasks.count
    }
    
    // How should I create each cell?
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Get the UITableViewCell and create/populate it with data then return it
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        // set text label to the model that is corresponding to the row in array
        cell.textLabel?.text = tasks[indexPath.row]
        cell.detailTextLabel?.text = String(format: "%2.0f", floor(Double(arc4random_uniform(91) + 5))) + " years old"
        // return cell so that Table View knows what to render in each row
        return cell
    }

}


