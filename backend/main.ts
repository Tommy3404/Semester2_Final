import "npm:dotenv/config"
import express from "npm:express";
import {ethers} from "npm:ethers";
import process from "node:process";
import artifact from "../hardhat/artifacts/contracts/FinalContract (1).sol/FinalsContract.json" with { type: "json" };
import { verify } from "node:crypto";
import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';
const app = express();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'your_user',
      password: 'your_password',
      database: 'your_database',
    });

    const sql = `INSERT INTO \`Event\`(\`eventName\`, \`host\`, \`aboutHost\`, \`address\`, \`game\`, \`date\`)
                 VALUES ('event', 'host', 'about', 'address', 'game', 'date');`;

    await connection.execute(sql);
    await connection.end();

    res.status(200).json({ message: 'Insert successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Insert failed' });
  }
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

app.get('/addEvent/:name/:physicalAddress', async( request , response) => {
   try{
     await contract.verifyAdmin();
     response.send({"status":"success"})
   }catch (error:any) {
    console.log(error);
    response.send({"status":"error", "msg":error.reason});
   }
})
