import React, { useState } from "react"
import styles from "../styles/NewsLetter.module.css"
import StyledHeader from "./StyledHeader"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [showPopup, setShowPopup] = useState(false)

  const handleSignUp = () => {
    if (email.trim() === "" || !email.includes("@gmail.com")) {
      alert("Please enter a valid Gmail address.")
      return
    }
    setShowPopup(true)
    setEmail("")
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className={styles.newsletterContainer}>
      <StyledHeader title="Newsletter" />
      <p className={styles.subtitle}>Join 70,000 subscribers!</p>
      <input
        type="email"
        placeholder="Email address...*"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className={styles.button} onClick={handleSignUp}>
        Sign Up
      </button>
      <p className={styles.terms}>
        By signing up, you agree to our <a href="#">Privacy Policy</a>
      </p>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupBox}>
            <h2>🎉 Thank You!</h2>
            <p>You've successfully subscribed to our newsletter.</p>
            <button onClick={closePopup} className={styles.popupCloseBtn}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Newsletter
