//
//  EventMenuItemView.swift
//  FinaliOS
//
//  Created by Student on 5/12/25.
//

import SwiftUI

struct EventMenuItemView: View {
    var eventData: Event!
    var body: some View {
        VStack(alignment: .leading){
            Text(eventData.eventName)
                .font(.title2)
            Divider()
            Text("Host: \(eventData.host)")
            Text("Game: \(eventData.game)")
        }.padding()
        .frame(width: 200)
        .background(Color.gray.opacity(0.2))
            .cornerRadius(10)
    }
}

struct EventMenuItemView_Previews: PreviewProvider {
    static var previews: some View {
        EventMenuItemView(eventData: Event(eventName: "Magic", host: "Bob", aboutHost: "painter", address: "8675309 blvd", game: "MTG", date: Date()))
    }
}
