"use client"
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
      <h1>Add Event</h1>
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
    </div>
  );
}