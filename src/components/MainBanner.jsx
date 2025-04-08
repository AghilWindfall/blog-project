import React from "react"
import styles from "../styles/MainBanner.module.css"
import dummyImage from "/dummy-image.jpg"

const MainBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.BannerContain}>
        <img
          src="https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/ai-generated-8577733_1280.jpg"
          alt="Banner"
          className={styles.bannerImage}
        />
        <div className={styles.overlay}>
          <span className={styles.tag}>Inspiration</span>
          <h1 className={styles.title}>
            Anchor for the Soul: Hope in Times of Uncertainty
          </h1>
          <p className={styles.meta}>Paul • 21 March 2025</p>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
