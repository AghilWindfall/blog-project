// RecentPosts.jsx
import React, { useState } from "react"
import styles from "../styles/RecentPosts.module.css"

const recentPosts = [
  {
    id: 1,
    title: "The Power of Daily Devotion",
    date: "03 Apr 2025",
    img: "https://shalomworld.org/hubfs/1%20(2).jpg",
  },
  {
    id: 2,
    title: "Why Prayer Changes Everything",
    date: "02 Apr 2025",
    img: "https://shalomworld.org/hubfs/1-2.jpg",
  },
  {
    id: 3,
    title: "Finding Peace in Christ During Trials",
    date: "01 Apr 2025",
    img: "https://shalomworld.org/hubfs/1-3.jpg",
  },
  {
    id: 4,
    title: "Letting God Guide Your Decisions",
    date: "30 Mar 2025",
    img: "https://shalomworld.org/hubfs/10.jpg",
  },
]

const popularPosts = [
  {
    id: 1,
    title: "Understanding the Fruits of the Spirit",
    date: "14 Mar 2025",
    img: "https://shalomworld.org/hubfs/9.jpg",
  },
  {
    id: 2,
    title: "How Jesus Taught Us to Forgive",
    date: "10 Mar 2025",
    img: "https://shalomworld.org/hubfs/8.jpg",
  },
  {
    id: 3,
    title: "The Beatitudes: Living a Blessed Life",
    date: "05 Mar 2025",
    img: "https://shalomworld.org/hubfs/7.jpg",
  },
  {
    id: 4,
    title: "Walking in Faith, Not Fear",
    date: "01 Mar 2025",
    img: "https://shalomworld.org/hubfs/6.jpg",
  },
]

const RecentPosts = () => {
  const [activeTab, setActiveTab] = useState("recent")

  return (
    <div className={styles.sidebarContainerRecentPost}>
      <div className={styles.tabs}>
        <button
          className={activeTab === "recent" ? styles.active : ""}
          onClick={() => setActiveTab("recent")}
        >
          Recent
        </button>
        <button
          className={activeTab === "popular" ? styles.active : ""}
          onClick={() => setActiveTab("popular")}
        >
          Popular
        </button>
      </div>
      <div className={styles.postsList}>
        {(activeTab === "recent" ? recentPosts : popularPosts).map((post) => (
          <div key={post.id} className={styles.postItem}>
            <img src={post.img} alt={post.title} className={styles.postImage} />
            <div className={styles.postDetails}>
              <h4 className={styles.postTitle}>{post.title}</h4>
              <p className={styles.postDate}>{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentPosts
