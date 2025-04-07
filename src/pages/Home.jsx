import React from "react"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
import RecentPosts from "../components/RecentPosts"
import MainBanner from "../components/MainBanner"
import StyledHeader from "../components/StyledHeader"
import SidebarList from "../components/SidebarList"
import Newsletter from "../components/NewsLetter"
import TagCloud from "../components/TagCloud"
import BlogEditor from "../components/BlogEditor"
import styles from "../styles/Home.module.css"
import BlogCard from "../components/BlogCard"
import Footer from "../components/Footer"
const Home = () => {
  // const handleBlogSubmit = (blogData) => {
  //   console.log("Blog Submitted:", blogData)
  // }

  return (
    <Layout>
      <Navbar />
      <div className={styles.topBanner}>
        <div className={styles.leftSection}>
          <MainBanner />
          {/* <StyledHeader title="Editor's Pick" />
          <RecentPosts /> */}
          {/* <MainBanner /> */}
          {/* <StyledHeader title="Editor's Pick" /> */}
          {/* <SidebarList /> */}
          {/* <Newsletter /> */}

          {/* <BlogEditor onSubmit={handleBlogSubmit} /> */}
          <BlogCard />
        </div>

        <div>
          <RecentPosts />
          <SidebarList />
          <Newsletter />
          <TagCloud />
         
          
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default Home
