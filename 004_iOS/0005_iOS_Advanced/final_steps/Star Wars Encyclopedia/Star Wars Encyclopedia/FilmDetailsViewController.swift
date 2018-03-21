//
//  FilmDetailsViewController.swift
//  Star Wars Encyclopedia
//
//  Created by Madin Kim on 3/20/18.
//  Copyright © 2018 DINDIN. All rights reserved.
//

import UIKit

class FilmDetailsViewController: UIViewController {
    
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var releaseDateLabel: UILabel!
    @IBOutlet weak var directorLabel: UILabel!
    @IBOutlet weak var openingCrawlLabel: UILabel!
    
    var filmTitle: String?
    var releaseDate: String?
    var director: String?
    var openingCrawl: String?
    
    var indexPath: NSIndexPath?

    
    @IBAction func dismissButtonPressed(_ sender: UIButton) {
        dismiss(animated: true, completion: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        titleLabel.text = "Title : \n" + filmTitle!
        releaseDateLabel.text = "Release Date : \n" + releaseDate!
        directorLabel.text = "Director : \n" + director!
        openingCrawlLabel.text = "Opening Crawl : \n" + openingCrawl!
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
}
