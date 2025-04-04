// RecentPosts.jsx
import React, { useState } from "react"
import styles from "../styles/RecentPosts.module.css"

const posts = [
  {
    id: 1,
    title: "16 Unheard Ways To Achieve Greater Walker",
    date: "24 May 2021",
    img: "https://shalomworld.org/hubfs/1%20(2).jpg",
  },
  {
    id: 2,
    title: "The Next 60 Things To Immediately Do About Building",
    date: "24 May 2021",
    img: "https://shalomworld.org/hubfs/1-2.jpg",
  },
  {
    id: 3,
    title: "Master The Art Of Nature With These 7 Tips",
    date: "24 May 2021",
    img: "https://shalomworld.org/hubfs/1-3.jpg",
  },
  {
    id: 4,
    title: "Facts About Business That Will Help You Success",
    date: "24 May 2021",
    img: "https://shalomworld.org/hubfs/10.jpg",
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
        {posts.map((post) => (
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
