//
//  ViewController.swift
//  Binary Counter
//
//  Created by Madin Kim on 3/14/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class BinaryCounterViewController: UIViewController {
    
    @IBOutlet weak var totalSumLabel: UILabel!
    @IBOutlet weak var tableView: UITableView!
    
    var sum: Int = 0

    func updateSum() {
        totalSumLabel.text = "Total : \(sum)"
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        tableView.dataSource = self
        updateSum()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
}


extension BinaryCounterViewController: UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 16
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell") as! CustomCell
        let value = Int(pow(Double(10), Double(indexPath.row)))
        cell.middleNumberLabel.text = String(value)
        cell.delegate = self
        return cell
    }

}

extension BinaryCounterViewController: CustomCellDelegate {
    
    func leftMinusButtonOperation ( from cell: CustomCell ) {
        sum -= Int(cell.middleNumberLabel.text!)!
        updateSum()
    }
    
    func rightPlusButtonOperation(from cell: CustomCell) {
        print(sum)
        sum += Int(cell.middleNumberLabel.text!)!
        print(sum)
        updateSum()
    }

}
