import React from "react"
import styles from "./BlogCard.module.css"

const BlogCard = () => {
  return (
    <div className={styles.card}>
      <img
        src="https://via.placeholder.com/1500x1000"
        alt="Blog"
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.meta}>
          <img
            src="https://via.placeholder.com/40"
            alt="Author"
            className={styles.avatar}
          />
          <span className={styles.author}>Katen Doe</span>
          <span className={styles.dot}>•</span>
          <span className={styles.category}>Lifestyle</span>
          <span className={styles.dot}>•</span>
          <span className={styles.date}>24 May 2021</span>
        </div>
        <h2 className={styles.title}>
          16 Unheard Ways To Achieve Greater Walker
        </h2>
        <p className={styles.description}>
          The European languages are members of the same family. Their separate
          existence is a myth. For...
        </p>
        <div className={styles.actions}>
          <span className={styles.shareIcon}>🔗</span>
          <span className={styles.moreIcon}>⋯</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
