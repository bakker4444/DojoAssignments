//
//  MainViewController.swift
//  TodoList App
//
//  Created by Madin Kim on 3/19/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit
import CoreData

class MainViewController: UIViewController, AddToDoListViewControllerDelegate {

    @IBOutlet weak var tableView: UITableView!
    
    var items = [TodoListItem]()

    override func viewDidLoad() {
        
        super.viewDidLoad()
        
        tableView.dataSource = self
        tableView.delegate = self
        
        fetchAllItems()
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    // Database Controll Part
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext

    // Fetch All Data from Database
    func fetchAllItems() {
        
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "TodoListItem")
        do {
            let result = try managedObjectContext.fetch(request)
            items = result as! [TodoListItem]
        } catch {
            print("\(error)")
        }
        
    }
    
    // Segue prepare function - needed for delegate
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        if segue.identifier == "addItemSegue" {
            let addToDoListViewController = segue.destination as! AddToDoListViewController
            addToDoListViewController.delegate = self
        }

    }
    
    // Delegate Item save function
    func itemSaved(by controller: AddToDoListViewController, withTitle title: String, withDescription desc: String, withDate date: Date) {
        
        let item = NSEntityDescription.insertNewObject(forEntityName: "TodoListItem", into: managedObjectContext) as! TodoListItem
        
        item.title = title
        item.desc = desc
        item.date = date
        item.finished = false
        items.append(item)
        
        do {
            try managedObjectContext.save()
        } catch {
            print("\(error)")
        }
        
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
        
    }

}

// TableView data source part - number of section, number of rows, cell generation
extension MainViewController: UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath) as! CustomCell
        
        cell.titleLabel.text = items[indexPath.row].title
        cell.descriptionLabel.text = items[indexPath.row].desc
        
        // date formatting part
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "MM/dd, YYYY"
        if let strDate = items[indexPath.row].date {
            cell.dateLabel.text = dateFormatter.string(from: strDate)
        }

        // checkmark part
        if items[indexPath.row].finished == true {
            cell.accessoryType = .checkmark
        } else {
            cell.accessoryType = .none
        }

        // number of lines in each cell
        cell.textLabel?.numberOfLines = 0
        
        return cell
    }
    
    // Table View Row Height Setup
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 80.0
    }
    
    // tableView data delete part
    func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        
        // DB deletion
        let item = items[indexPath.row]
        managedObjectContext.delete(item)
        
        do {
            try managedObjectContext.save()
        } catch {
            print("\(error)")
        }
        
        // table deletion
        items.remove(at: indexPath.row)
        tableView.reloadData()
    }
    
}

extension MainViewController: UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        
        // row deselection part
        tableView.deselectRow(at: indexPath, animated: true)
        
        // DB checkmark change part
        print("before : " + String(items[indexPath.row].finished))
        items[indexPath.row].finished = !(items[indexPath.row].finished)
        print("after : " + String(items[indexPath.row].finished))
        do {
            try managedObjectContext.save()
        } catch {
            print("\(error)")
        }
        
        // tableView reload
        tableView.reloadData()
        
    }
}
