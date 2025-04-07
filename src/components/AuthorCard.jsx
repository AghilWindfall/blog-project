import React from "react"
import styles from "../styles/AuthorCard.module.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

const AuthorCard = () => {
  return (
    <div className={styles.card}>
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Katen Doe"
        className={styles.avatar}
      />
      <div>
        <h3 className={styles.name}>Katen Doe</h3>
        <p className={styles.description}>
          Hello, I’m a content writer who is fascinated by content fashion,
          celebrity, and lifestyle. She helps clients bring the right content to
          the right people.
        </p>
        <div className={styles.social}>
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AuthorCard
