//
//  ContentView.swift
//  FinaliOS
//

//

import SwiftUI

struct BaseResult: Codable{
    var name:String
}

func getResult()async throws -> BaseResult{
    enum WebRequestError:Error{
        case codeRequestError
    }
    
    //this will connect the xcode to the deno server
    let (data, response) = try await URLSession.shared.data(from: URL(string: "https://localhost:3005/")!)
    
    guard let response = response as? HTTPURLResponse, response.statusCode == 200 else {
        throw WebRequestError.codeRequestError
    }
    
    let jsonDecoder = JSONDecoder()
    let result = try jsonDecoder.decode( BaseResult.self, from: data)
    
    return result
}

struct ContentView: View {
    var body: some View {
        VStack{
            Text("Simply The Gathering")
        }.frame(width: 1000, height: 50)
            .font(.largeTitle)
            .background(Color.green)
            
            
        NavigationView {
            ScrollView{
                ForEach(testData){
                    event in
                    NavigationLink {
                        EventDetailView(eventData: event)
                        
                    } label: {
                        EventMenuItemView(eventData: event)
                    }
                }
            }
        }.padding()
    }
}

#Preview {
    ContentView()
}
