//
//  EventModel.swift
//  FinaliOS
//
//  Created by Student on 5/12/25.
//

import Foundation

//struct of event
struct Event: Identifiable{
    var id = UUID()
    
    var eventName: String
    var host: String
    var aboutHost: String
    var address: String
    var game: String
    var date: Date
}

var testData = [
    Event(eventName: "Magic Tournament", host: "Bob Ross", aboutHost: "Bob is a painter", address: "123 Main St", game: "Magic The Gathering", date: Date()),
    Event(eventName: "Farming Simulator Showdown", host: "Morgan Pritchard", aboutHost: "Morgan is a professor at FHNW", address: "246 Washington Blvd", game: "Farming Simulator", date: Date()),
    Event(eventName: "Red Dead Tutorial", host: "Karson Mellott", aboutHost: "Karson is a student at FHNW", address: "135 Cherry St", game: "Red Dead Redemption 2", date: Date())
]
