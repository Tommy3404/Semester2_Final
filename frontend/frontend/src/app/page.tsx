"use client"
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import Link from "next/link";


export default function Home() {
  const [event, setEvent] = useState("")
  const [host, setHost] = useState("")
    const [about, setAbout] = useState("")
    const [address, setAddress] = useState("")
    const [date, setDate] = useState("")
    const [game, setGame] = useState("")

  async function getEvent(){
    console.log(`http://localhost:3005/${event}/${host}/${about}/${address}/${date}/${game}`);
    
    let response = await fetch(`http://localhost:3005/${event}/${host}/${about}/${address}/${date}/${game}`)
    let data = await response.json();

    console.log(data);
    

    setEvent(data.event);
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
      <h1>Simply the Gathering</h1>
      </div>
      <button onClick={getEvent}>See Events</button>
      <div className={styles.add}>
        <Link href="./addEvent">➕</Link>
      </div>
      <div className={styles.event}>
      <h2>MTG</h2>
      <p>Host: William</p>
      <p>About Host: Likes to play magic the gathering.</p>
      <p>Address: 123 main St</p>
      <p>Date: 05-22-2025</p>
      <p>Game: Magic The Gathering</p>
      </div>
    </div>
  );
}