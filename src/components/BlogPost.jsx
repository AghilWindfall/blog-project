import React from "react"
import styles from "../styles/BlogPost.module.css"
import AuthorCard from "./AuthorCard"
import Navbar from "./Navbar"

const BlogPost = () => {
  return (
    <div className={styles.postContainer}>
      <Navbar />
      <img
        src="https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/Rectangle%201.png"
        alt="Blog Banner"
        className={styles.banner}
      />

      <div className={styles.contentWrapper}>
        {/* Existing content */}

        <div className={styles.meta}>
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Author"
            className={styles.avatar}
          />
          <div>
            <span className={styles.author}>Katen Doe</span>
            <div className={styles.info}>
              <span>Lifestyle</span>
              <span className={styles.dot}>•</span>
              <span>24 May 2021</span>
            </div>
          </div>
        </div>

        <h1 className={styles.title}>
          16 Unheard Ways To Achieve Greater Walker
        </h1>

        <p className={styles.paragraph}>Lorem ipsum dolor sit amet...</p>

        <blockquote className={styles.quote}>
          "The only way to do great work is to love what you do." – Steve Jobs
        </blockquote>

        <p className={styles.paragraph}>
          Integer vitae libero ac risus egestas...
        </p>

        <div className={styles.socialShare}>
          <span>Share:</span>
          <div className={styles.icons}>
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
          </div>
        </div>
      </div>

      <AuthorCard />

      {/* Suggested Blog Cards */}
      <div className={styles.suggestedSection}>
        <h2 className={styles.suggestedHeading}>Suggested Posts</h2>
        <div className={styles.suggestedCards}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.card}>
              <img
                src={`https://shalomworld.org/hubfs/1%20(2).jpg`}
                alt="Suggested Blog"
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Travel</span>
                <h3 className={styles.cardTitle}>
                  Explore the unseen corners of the world
                </h3>
                <p className={styles.cardDate}>June {20 + i}, 2021</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
