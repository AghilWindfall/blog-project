import React from "react"
import styles from "../styles/NewsLetter.module.css"
import StyledHeader from "./StyledHeader"

const Newsletter = () => {
  return (
    <div className={styles.newsletterContainer}>
      <StyledHeader title="Newsletter" />
      <p className={styles.subtitle}>Join 70,000 subscribers!</p>
      <input
        type="email"
        placeholder="Email address...*"
        className={styles.input}
      />
      <button className={styles.button}>Sign Up</button>
      <p className={styles.terms}>
        By signing up, you agree to our <a href="#">Privacy Policy</a>
      </p>
    </div>
  )
}

export default Newsletter
