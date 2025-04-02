// Header.js
import React from "react"
import styles from "../styles/StyledHeader.module.css"

const StyledHeader = ({ title }) => {
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.title}>{title}</h2>
      <img
        src="https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/wave.svg"
        alt="underline"
        className={styles.underline}
      />
    </div>
  )
}

export default StyledHeader
