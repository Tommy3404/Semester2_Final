"use client"
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { ethers } from "ethers";


export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
      <h1>Simply the Gathering</h1>
      </div>
      <div className={styles.add}>
        <Link href="./addEvent">➕</Link>
      </div>
    </div>
  );
}