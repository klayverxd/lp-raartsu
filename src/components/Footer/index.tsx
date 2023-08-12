import React from 'react'

import Image from 'next/image'

import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.containerFooter}>
      Made by
      <Image
        src='https://cdn.discordapp.com/icons/327551153091117066/1cd44b89f836cfaa618e33b9238641af.webp?size=128'
        alt="Logo JDJ"
        width={30}
        height={30}
        className={styles.logoFooter}
      />
      JDJ
    </footer>
  )
}
