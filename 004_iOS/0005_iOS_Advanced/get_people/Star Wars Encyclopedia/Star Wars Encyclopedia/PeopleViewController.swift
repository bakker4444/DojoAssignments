//
//  PeopleViewController.swift
//  Star Wars Encyclopedia
//
//  Created by Madin Kim on 3/19/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class PeopleViewController: UITableViewController {
    
    // Hardcoded data for now
    // var people = ["Luke Skywalker", "Leia Organa", "Han Solo", "C-3PO", "R2-D2"]
    var people:[String] = []
    
    func peopleDataLoading(urlInput: String) {
        
        // specify the url that we will be sending the GET Request to
        let url = URL(string: urlInput)
        // create a URLSession to handle the request tasks
        let session = URLSession.shared
        // create a "data task" to make the request and run the completion handler
        
        let task = session.dataTask(with: url!, completionHandler: {
            // see: Swift closure expression syntax
            data, response, error in
            // data -> JSON data, response -> headers and other meta-information, error-> if one occurred
            // "do-try-catch" blocks execute a try statement and then use the catch statement for errors
            do {
                // try converting the JSON object to "Foundation Types" (NSDictionary, NSArray, NSString, etc.)
                if let jsonResult = try JSONSerialization.jsonObject(with: data!, options: JSONSerialization.ReadingOptions.mutableContainers) as? NSDictionary {
                    // Why do we need to optionally unwrap jsonResult["results"]
                    // Try it without the optional unwrapping and you'll see that the value is actually an optional
                    if let results = jsonResult["results"] {
                        // coercing the results object as an NSArray and then storing that in resultsArray
                        let resultsArray = results as! NSArray
                        // now we can run NSArray methods like count and firstObject
                        
                        // appending names from JSON data to people array
                        for i in 0..<resultsArray.count {
                            let arr1 = resultsArray[i] as! NSDictionary
                            let name = arr1["name"] as! NSString
                            self.people.append(name as String)
                        }
                        
                        // Dispatching from upper thread to main thread as asyncronous execution
                        DispatchQueue.main.async{
                            self.tableView.reloadData()
                        }
                    }
                    
                    // if next key is exists, run peopleDataLoading function again with new url
                    // (using recursion)
                    if let nextPage = jsonResult["next"] {
                        if nextPage is NSNull {
                            print(nextPage)
                        } else {
                            print(nextPage)
                            self.peopleDataLoading(urlInput: nextPage as! String)
                        }
                    }
                }
            } catch {
                print(error)
            }
        })
        // execute the task and wait for the response before
        // running the completion handler. This is async!
        task.resume()
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        peopleDataLoading(urlInput: "http://swapi.co/api/people")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func numberOfSections(in tableView: UITableView) -> Int {
        // if we return - sections we won't have any sections to put our rows in
        return 1
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return the count of people in our data array
        return people.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Create a generic cell
        let cell = UITableViewCell()
        // set the default cell label to the corresponding element in the people array
        cell.textLabel?.text = people[indexPath.row]
        // return the cell so that it can be rendered
        return cell
    }

}

