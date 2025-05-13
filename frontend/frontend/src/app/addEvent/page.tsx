"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ethers } from "ethers";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_walletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_physicalAddress",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_walletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_physicalAddress",
				"type": "string"
			}
		],
		"name": "addAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "admins",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "walletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "physicalAddress",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export default function Home() {

  const [contract, setContract] = useState<ethers.Contract>()
  const [event, setEvent] = useState("")

  async function connectToWallet() {
    if(contract !== undefined){
      return;
    }
  

  if((window as any).ethereum){
    //We have metamask or another wallet

    //Step 1 - Get the provider
    let provider = new ethers.BrowserProvider((window as any).ethereum)

    //Step 2 - Get the signer from the wallet
    let signer = await provider.getSigner();

    //Step 3 - Get our Contract instance with our address
    //           abi, and our signer
      setContract(new ethers.Contract(contractAddress, abi, signer))
      console.log("Contract Created");
      
  }else{
    alert("You need a wallet");
  }
  }


async function addAdmin() {
if(contract === undefined){
  await connectToWallet();
}

if(contract){
  // setAdmin(await contractAddress.addAdmin());
  // setAddress(await contractAddress.addAddress());
  contract.addAdmin("name", "walletAddress", "physicalAddress") //these are only place holders
}

}

async function getEvent(){

  let response = await fetch("http://localhost:3005/")
  let data = await response.json();

  console.log(data);
  

  setEvent(data.event);
}

  return (
    <div className={styles.page}>
      <div className={styles.header}>
      <h1>Add Event/Add Admin</h1>
      </div>
      <div>
        <button onClick={connectToWallet}>Connect To Wallet</button>
      </div>
      <div className={styles.back}>
        <Link href="../">🔙</Link>
      </div>
      <section className={styles.addEvent}>
        <div className={styles.name}>
            <h2>Event Name:</h2>
            <input type="text" placeholder="Event Name" />
        </div>
        <div className={styles.host}>
            <h2>Host:</h2>
            <input type="text" placeholder="Host Name" />
        </div>
        <div className={styles.about}>
            <h2>About Host:</h2>
            <input type="text" placeholder="About Host" />
        </div>
        <div className={styles.address}>
            <h2>Address:</h2>
            <input type="text" placeholder="Address" />
        </div>
        <div className={styles.date}>
            <h2>Date:</h2>
            <input type="text" placeholder="Date" />
        </div>
        <div className={styles.game}>
            <h2>Game:</h2>
            <input type="text" placeholder="Game" />
        </div>
        <div className={styles.submit}>
            <button>Submit</button>
        </div>
      </section>
      <div className={styles.admin}>
      <h2>Add Admin</h2>
      </div>
      <section className={styles.addAdmin}>
      <div className={styles.adminname}>
            <h2>Admin Name:</h2>
            <input type="text" placeholder="Name" />
        </div>
        <div className={styles.wallet}>
            <h2>Wallet:</h2>
            <input type="text" placeholder="Wallet" />
        </div>
        <div className={styles.physical}>
            <h2>Address:</h2>
            <input type="text" placeholder="Physical Address" />
        </div>
        <div className={styles.submit}>
            <button>Submit</button>
        </div>
      </section>
    </div>
  );
}



