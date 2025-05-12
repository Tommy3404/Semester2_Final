//
//  EventDetailView.swift
//  FinaliOS
//
//  Created by Student on 5/12/25.
//

import SwiftUI

struct EventDetailView: View {
    var eventData: Event!
    var body: some View {
        VStack(alignment: .leading){
            Text(eventData.eventName)
                .font(.title)
            Divider()
            Text(eventData.host)
                .font(.title)
            Text(eventData.aboutHost)
                .font(.title)
            Text(eventData.address)
                .font(.title)
            Text(eventData.game)
                .font(.title)
        } .padding()
    }
}

struct EventDetailView_Preview:
    PreviewProvider{
    static var previews: some View {
        EventDetailView(eventData: Event(eventName: "Greetings", host: "hello", aboutHost: "buenosdias", address: "hi", game: "hola", date: Date()))
    }
    
}
