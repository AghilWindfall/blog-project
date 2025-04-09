import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import styles from "../styles/TopicPage.module.css"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
const blogData = {
  "faith-and-devotion": [
    {
      title: "Walking in Faith Every Day",
      description:
        "Discover how daily devotion can transform your walk with God.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-8269984_1280.png",
    },
    {
      title: "Living a Christ-Centered Life",
      description: "Put your faith at the center of everything you do.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/ai-generated-8139390_1280.png",
    },
    {
      title: "The Power of Persistent Prayer",
      description:
        "Uncover the hidden strength of consistent, heartfelt prayer.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/ai-generated-8614881_1280.jpg",
    },
    {
      title: "Morning Prayer Rituals",
      description: "Start your day with spiritual intention and peace.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-7038661_1280.jpg",
    },
  ],
  "prayer-life": [
    {
      title: "The Power of Persistent Prayer",
      description:
        "Uncover the hidden strength of consistent, heartfelt prayer.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/ai-generated-8614881_1280.jpg",
    },
    {
      title: "Morning Prayer Rituals",
      description: "Start your day with spiritual intention and peace.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-7038661_1280.jpg",
    },
    {
      title: "Walking in Faith Every Day",
      description:
        "Discover how daily devotion can transform your walk with God.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-8269984_1280.png",
    },
    {
      title: "Living a Christ-Centered Life",
      description: "Put your faith at the center of everything you do.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/ai-generated-8139390_1280.png",
    },
  ],
  "scripture-reflections": [
    {
      title: "Reflecting on Psalms",
      description:
        "Find comfort, hope, and joy in the poetic wisdom of Psalms.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/angel-1347118_1280.png",
    },
    {
      title: "Scripture for Everyday Life",
      description: "Apply biblical teachings to your modern life challenges.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-7038661_1280.jpg",
    },
    {
      title: "Walking in Faith Every Day",
      description:
        "Discover how daily devotion can transform your walk with God.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-8269984_1280.png",
    },
    {
      title: "Living a Christ-Centered Life",
      description: "Put your faith at the center of everything you do.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/ai-generated-8139390_1280.png",
    },
  ],
  "christian-living": [
    {
      title: "Living Out the Gospel",
      description: "How to embody Christian values in daily life.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-8269984_1280.png",
    },
    {
      title: "Grace in Action",
      description: "Show compassion and love in a divided world.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/ai-generated-8139390_1280.png",
    },
    {
      title: "Walking in Faith Every Day",
      description:
        "Discover how daily devotion can transform your walk with God.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-8269984_1280.png",
    },
    {
      title: "Living a Christ-Centered Life",
      description: "Put your faith at the center of everything you do.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/ai-generated-8139390_1280.png",
    },
  ],
  "grace-and-redemption": [
    {
      title: "The Gift of Grace",
      description: "Explore the unmerited favor of God in your life.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-8269984_1280.png",
    },
    {
      title: "Redemption Through Christ",
      description: "Discover the freedom found in forgiveness and salvation.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-8269984_1280.png",
    },
    {
      title: "Worship with Your Whole Heart",
      description: "Connect deeply through praise and worship.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/birth-9214235_1280.jpg",
    },
    {
      title: "The Power of Praise",
      description: "Discover joy in praising God in all seasons.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/hand-6676763_1280.jpg",
    },
  ],
  "spiritual-growth": [
    {
      title: "Steps to Grow Spiritually",
      description: "Nurture your soul through consistent spiritual habits.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-8269984_1280.png",
    },
    {
      title: "Overcoming Spiritual Dryness",
      description: "Find renewal and joy in your walk with God.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/ai-generated-8139390_1280.png",
    },
    {
      title: "Worship with Your Whole Heart",
      description: "Connect deeply through praise and worship.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/birth-9214235_1280.jpg",
    },
    {
      title: "The Power of Praise",
      description: "Discover joy in praising God in all seasons.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/hand-6676763_1280.jpg",
    },
  ],
  "worship-and-praise": [
    {
      title: "Worship with Your Whole Heart",
      description: "Connect deeply through praise and worship.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/birth-9214235_1280.jpg",
    },
    {
      title: "The Power of Praise",
      description: "Discover joy in praising God in all seasons.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/hand-6676763_1280.jpg",
    },
    {
      title: "The Gift of Grace",
      description: "Explore the unmerited favor of God in your life.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-8269984_1280.png",
    },
    {
      title: "Redemption Through Christ",
      description: "Discover the freedom found in forgiveness and salvation.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-8269984_1280.png",
    },
  ],
  "holy-spirit-and-gifts": [
    {
      title: "Understanding the Holy Spirit",
      description: "Who is the Holy Spirit and how does He move in our lives?",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/ai-generated-9245671_1280.jpg",
    },
    {
      title: "Spiritual Gifts Explained",
      description: "Identify and use your gifts to serve others.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-8269984_1280.png",
    },
    {
      title: "The Gift of Grace",
      description: "Explore the unmerited favor of God in your life.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-8269984_1280.png",
    },
    {
      title: "Redemption Through Christ",
      description: "Discover the freedom found in forgiveness and salvation.",
      image:
        "https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/jesus-8269984_1280.png",
    },
  ],
}
const formatSlug = (slug) => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}

const TopicPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const formattedTitle = formatSlug(slug)
  const blogs = blogData[slug] || []

  const handleCardClick = (blogTitle) => {
    // You can pass state or query params if needed
    navigate("/blog-archive", { state: { topic: slug, title: blogTitle } })
  }

  return (
    <Layout>
      <Navbar />
      <div className={styles.container} style={{ height: "100vh" }}>
        <h1 className={styles.heading}>{formattedTitle}</h1>

        {blogs.length > 0 ? (
          <div className={styles.cardGrid}>
            {blogs.map((blog, index) => (
              <div
                key={index}
                className={styles.card}
                onClick={() => handleCardClick(blog.title)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{blog.title}</h3>
                  <p className={styles.cardDesc}>{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noBlogs}>
            No blogs available for this topic yet.
          </p>
        )}

        <Footer />
      </div>
    </Layout>
  )
}

export default TopicPage
