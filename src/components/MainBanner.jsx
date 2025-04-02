import React from "react"
import styles from "../styles/MainBanner.module.css"
import dummyImage from "/dummy-image.jpg"

const MainBanner = () => {
  return (
    <div className={styles.banner}>
      <img src={dummyImage} alt="Banner" className={styles.bannerImage} />
      <div className={styles.overlay}>
        <span className={styles.tag}>Inspiration</span>
        <h1 className={styles.title}>
          5 Easy Ways You Can Turn Future Into Success
        </h1>
        <p className={styles.meta}>Katen Doe • 21 May 2021</p>
      </div>
    </div>
  )
}

export default MainBanner
