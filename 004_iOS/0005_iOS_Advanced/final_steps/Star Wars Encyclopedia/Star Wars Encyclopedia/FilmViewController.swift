//
//  FilmTableViewController.swift
//  Star Wars Encyclopedia
//
//  Created by Madin Kim on 3/19/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class FilmViewController: UITableViewController {
    
    var films:[String] = []
    var filmtitle: [String] = []
    var releaseDate: [String] = []
    var director: [String] = []
    var openingCrawl: [String] = []
    
    func dataLoading(urlInput: String) {

        StarWarsModel.getAllFilms(urlInput: urlInput, completionHandler: { // passing what becomes "completionHandler" in the 'getAllPeople' function definition in StarWarsModel.swift
            data, response, error in
            do {
                // Try converting the JSON object to "Foundation Types" (NSDictionary, NSArray, NSString, etc.)
                if let jsonResult = try JSONSerialization.jsonObject(with: data!, options: JSONSerialization.ReadingOptions.mutableContainers) as? NSDictionary {
                    
                    if let results = jsonResult["results"] as? NSArray {
                        for film in results {
                            let filmDict = film as! NSDictionary
                            self.films.append(filmDict["title"]! as! String)
                            self.filmtitle.append(filmDict["title"]! as! String)
                            self.releaseDate.append(filmDict["release_date"]! as! String)
                            self.director.append(filmDict["director"]! as! String)
                            self.openingCrawl.append(filmDict["opening_crawl"]! as! String)
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
        dataLoading(urlInput: "http://swapi.co/api/films")
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
    //         performSegue(withIdentifier: "Details", sender: indexPath)
    // }
    
    // Accessory Button Clicked
    override func tableView(_ tableView: UITableView, accessoryButtonTappedForRowWith indexPath: IndexPath) {
        performSegue(withIdentifier: "Details", sender: indexPath)
    }
    
    // Delete Left Slide functionality
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        films.remove(at: indexPath.row)
        tableView.reloadData()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "Details" {
            let FilmDetailsViewController = segue.destination as! FilmDetailsViewController
            let indexPath = sender as! NSIndexPath
            
            let filmTitle = self.filmtitle[indexPath.row]
            let releaseDate = self.releaseDate[indexPath.row]
            let director = self.director[indexPath.row]
            let openingCrawl = self.openingCrawl[indexPath.row]
            
            FilmDetailsViewController.filmTitle = filmTitle
            FilmDetailsViewController.releaseDate = releaseDate
            FilmDetailsViewController.director = director
            FilmDetailsViewController.openingCrawl = openingCrawl
            
        }
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // return the count of films in our data array
        return films.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "filmCell", for: indexPath)
        cell.textLabel?.text = films[indexPath.row]
        // return the cell so that it can be rendered
        return cell
    }
    
}


