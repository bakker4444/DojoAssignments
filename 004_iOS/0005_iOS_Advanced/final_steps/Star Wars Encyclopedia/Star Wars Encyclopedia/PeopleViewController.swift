//
//  PeopleViewController.swift
//  Star Wars Encyclopedia
//
//  Created by Madin Kim on 3/19/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class PeopleViewController: UITableViewController {
    
    var people:[String] = []
    var name:[String] = []
    var gender:[String] = []
    var birthYear:[String] = []
    var mass:[String] = []
    
    func dataLoading(urlInput: String) {
        
        StarWarsModel.getAllPeople(urlInput: urlInput, completionHandler: { // passing what becomes "completionHandler" in the 'getAllPeople' function definition in StarWarsModel.swift
            data, response, error in
            do {
                // Try converting the JSON object to "Foundation Types" (NSDictionary, NSArray, NSString, etc.)
                if let jsonResult = try JSONSerialization.jsonObject(with: data!, options: JSONSerialization.ReadingOptions.mutableContainers) as? NSDictionary {
                    if let results = jsonResult["results"] as? NSArray {
                        for person in results {
                            let personDict = person as! NSDictionary
                            self.people.append(personDict["name"]! as! String)
                            self.name.append(personDict["name"]! as! String)
                            self.gender.append(personDict["gender"]! as! String)
                            self.birthYear.append(personDict["birth_year"]! as! String)
                            self.mass.append(personDict["mass"]! as! String)
                        }
                    }
                    // if next key is exists, run dataLoading function again with new url
                    // (using recursion)
                    if let nextPage = jsonResult["next"] {
                        if nextPage is NSNull {
                            print(nextPage)
                        } else {
                            print(nextPage)
                            self.dataLoading(urlInput: nextPage as! String)
                        }
                    } else {
                        print("\(error ?? "No next page key" as! Error)")
                    }
                }
                DispatchQueue.main.async {
                    self.tableView.reloadData()
                }
            } catch {
                print("Something went wrong")
            }
        })
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        dataLoading(urlInput: "http://swapi.co/api/people")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func numberOfSections(in tableView: UITableView) -> Int {
        // if we return - sections we won't have any sections to put our rows in
        return 1
    }
    
    // // Row Click Case
    // override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
    //     performSegue(withIdentifier: "Details", sender: indexPath)
    // }
    
    // Accessory Button Clicked
    override func tableView(_ tableView: UITableView, accessoryButtonTappedForRowWith indexPath: IndexPath) {
        performSegue(withIdentifier: "Details", sender: indexPath)
    }
    
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        people.remove(at: indexPath.row)
        tableView.reloadData()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "Details" {
            let PeopleDetailsViewController = segue.destination as! PeopleDetailsViewController
            let indexPath = sender as! NSIndexPath
            
            let name = self.name[indexPath.row]
            let gender = self.gender[indexPath.row]
            let birthYear = self.birthYear[indexPath.row]
            let mass = self.mass[indexPath.row]
            
            PeopleDetailsViewController.name = name
            PeopleDetailsViewController.gender = gender
            PeopleDetailsViewController.birthYear = birthYear
            PeopleDetailsViewController.mass = mass
            
        }
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return the count of people in our data array
        return people.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "personCell", for: indexPath)
        cell.textLabel?.text = people[indexPath.row]
        // return the cell so that it can be rendered
        return cell
    }

}

