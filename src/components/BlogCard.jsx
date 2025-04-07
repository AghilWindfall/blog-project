import React from "react"
import styles from "../styles/BlogCard.module.css"
import { Link } from "react-router-dom" // <-- import Link

const cardData = [
  {
    id: 1,
    image: "https://shalomworld.org/hubfs/1%20(2).jpg",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    author: "Katen Doe",
    category: "Lifestyle",
    date: "24 May 2021",
    title: "16 Unheard Ways To Achieve Greater Walker",
    description:
      "The European languages are members of the same family. Their separate existence is a myth. For...",
  },
  {
    id: 2,
    image: "https://shalomworld.org/hubfs/1-2.jpg",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    author: "John Smith",
    category: "Travel",
    date: "18 Apr 2021",
    title: "Top 10 Places You Should Visit This Summer",
    description:
      "Discover the most amazing places to relax and explore this summer around the world...",
  },
  {
    id: 3,
    image: "https://shalomworld.org/hubfs/1-1.jpg",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    author: "Emma Watson",
    category: "Health",
    date: "12 Mar 2021",
    title: "Healthy Living: Secrets You Never Knew",
    description:
      "Health is wealth! Discover unknown ways to live a healthier, longer life starting today...",
  },
  {
    id: 4,
    image: "https://shalomworld.org/hubfs/2-2.jpg",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    author: "Liam Brown",
    category: "Technology",
    date: "08 Feb 2021",
    title: "AI In 2025: What To Expect",
    description:
      "Artificial Intelligence is evolving fast. Here's what we can expect to change by 2025...",
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
