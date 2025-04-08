import React from "react"
import styles from "../styles/TagCloud.module.css"

const tags = [
  "Faith",
  "Daily Devotion",
  "Holy Spirit",
  "Bible Study",
  "Grace & Salvation",
  "Christian Living",
  "Worship",
  "Scripture Reflection",
]

const TagCloud = () => {
  return (
    <div className={styles.tagCloudContainer}>
      <h2 className={styles.title}>Tag Clouds</h2>
      <img
        src="https://20055220.fs1.hubspotusercontent-na1.net/hubfs/20055220/raw_assets/public/katen/images/wave.svg"
        alt="underline"
        className={styles.underline}
      />
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TagCloud
