import React from "react"
import styles from "../styles/BlogCard.module.css"
import { Link } from "react-router-dom" // <-- import Link

const cardData = [
  {
    id: 1,
    image: "https://shalomworld.org/hubfs/1%20(2).jpg",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    author: "Raichel",
    category: "Faith & Devotion",
    date: "24 May 2021",
    title: "Walking in His Light: A Journey of Faith",
    description:
      "When the world gets loud, His still small voice calms our hearts...",
  },
  {
    id: 2,
    image: "https://shalomworld.org/hubfs/1-2.jpg",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
    author: "Joey",
    category: "Prayer & Worship",
    date: "18 Apr 2021",
    title: "Faith That Moves Mountains",
    description:
      "True faith isn't just belief — it's bold trust in God’s power...",
  },
  {
    id: 3,
    image: "https://shalomworld.org/hubfs/1-1.jpg",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    author: "Chandler",
    category: "Grace & Redemption",
    date: "12 Mar 2021",
    title: "The Power of Prayer in Daily Life",
    description:
      "The Power of Prayer in Daily Life.Prayer is not a ritual — it's a relationship...",
  },
  {
    id: 4,
    image: "https://shalomworld.org/hubfs/2-2.jpg",
    avatar: "https://randomuser.me/api/portraits/women/34.jpg",
    author: "Monica",
    category: "Scripture & Truth",
    date: "08 Feb 2021",
    title: "AI In 2025: What To Expect",
    description: "Uncover the strength found in yielding to God's will....",
  },
]

const BlogCard = () => {
  return (
    <div className={styles.cardContainer}>
      {cardData.map((card) => (
        <Link to="/blog-archive" key={card.id} className={styles.cardLink}>
          <div className={styles.card}>
            <img
              src={card.image}
              alt={card.title}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <div className={styles.meta}>
                <img
                  src={card.avatar}
                  className={styles.avatar}
                  alt={card.author}
                />
                <span>{card.author}</span>
                <span className={styles.dot}>•</span>
                <span>{card.category}</span>
                <span className={styles.dot}>•</span>
                <span>{card.date}</span>
              </div>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.description}>{card.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.shareIcon}>🔗</span>
                <span className={styles.dots}>•••</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogCard
