//
//  StarWarsModel.swift
//  Star Wars Encyclopedia
//
//  Created by Madin Kim on 3/20/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import Foundation

class StarWarsModel {
    // Note that we are passing in a function to the getAllPeople method (similar to our use of callbacks in JS). This function will allow the ViewController that calls this method to dictate what runs upon completion.
    
    static func getAllPeople(urlInput: String, completionHandler:@escaping (_ data: Data?, _ response: URLResponse?, _ error: Error?) -> Void) {
        // Specify the url that we will be sending the GET Request to
        let url = URL(string: urlInput)
        // Create a URLSession to handle the request tasks
        let session = URLSession.shared
        // Create a "data task" which will request some data from a URL and then run the completion handler that we are passing into the getAllPeople function itself
        let task = session.dataTask(with: url!, completionHandler: completionHandler)
        // Actually "execute" the task. This is the line that actually makes the request that we set up above
        task.resume()
    }
    
    static func getAllFilms(urlInput: String, completionHandler:@escaping (_ data: Data?, _ response: URLResponse?, _ error: Error?) -> Void) {
        // Specify the url that we will be sending the GET Request to
        let url = URL(string: urlInput)
        // Create a URLSession to handle the request tasks
        let session = URLSession.shared
        // Create a "data task" which will request some data from a URL and then run the completion handler that we are passing into the getAllPeople function itself
        let task = session.dataTask(with: url!, completionHandler: completionHandler)
        // Actually "execute" the task. This is the line that actually makes the request that we set up above
        task.resume()
    }
    
}

