import "npm:dotenv/config"
import express from "npm:express";
import {ethers} from "npm:ethers";
import process from "node:process";
import artifact from "../hardhat/artifacts/contracts/FinalContract (1).sol/FinalsContract.json" with { type: "json" };
import mysql from 'npm:mysql2';
import  cors  from 'npm:cors'
import { connection } from "./sqlconnector.ts";
const app = express();
app.use(cors())

export default async function createEvent(event:string, host:string, about:string, address:string, date:Date,  game:string) {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'your_user',
      password: 'your_password',
      database: 'your_database',
    });

    const sql = `INSERT INTO 'Event'('eventName', 'host', 'aboutHost', 'address', 'date', 'game')
                 VALUES ('${event}', '${host}', '${about}', '${address}', '${date}', '${game}');`;

    await connection.execute(sql);
    await connection.end();

}
catch{
  // console.log(createEvent);
}
}

export async function getEvent() {
  const sql = 'SELECT * FROM `Event` WHERE 1';
  
  await connection.execute(sql);
  await connection.end();
}


// Getting Keys from the .env file. process.env.MainWalletKey!;    process.env.ContractAddress!
const key:string = process.env.WalletKey || "";
const contractAddress = process.env.ContractAddress || "";



// Setting our blockchain network to Hardhat
const provider = new ethers.JsonRpcProvider();
// Setting our main wallet to pay for gas as the first wallet in Hardhat
const wallet = new ethers.Wallet(key,  provider);
// Setting up our contract
const contract = new ethers.Contract(contractAddress, artifact.abi, wallet); 


app.get('/', async( request , response )=>{
    const verifyAdmin = await contract.verifyAdmin(); 
    response.send({"name": verifyAdmin ,"physicalAddress": verifyAdmin})
})
app.get("/getEvents", (request, response)=>{
    getEvent()
  response.send([request.params.eventName, request.params.host, request.params.aboutHost, request.params.address, request.params.date, request.params.game])
})

app.get('/addAdmin/:name/:physicalAddress', async( request , response) => {
   try{
     await contract.verifyAdmin();
     response.send({"status":"success"})
   }catch (error:any) {
    console.log(error);
    response.send({"status":"error", "msg":error.reason});
   }
})

app.get("/addEvent/:eventName/:host/:aboutHost/:address/:date/:game", async (request, response)=>{
  try{
    await createEvent(request.params.eventName, request.params.host, request.params.aboutHost, request.params.address, request.params.date, request.params.game);
    response.send({"status":"success"})
  }catch (error:any) {
   console.log(error);
   response.send({"status":"error", "msg":error.reason});
  }
})

app.listen(3005)
console.log("Loaded on 3005");

