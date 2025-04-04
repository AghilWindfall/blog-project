import React from "react"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
import RecentPosts from "../components/RecentPosts"
import MainBanner from "../components/MainBanner"
import StyledHeader from "../components/StyledHeader"
import SidebarList from "../components/SidebarList"
import Newsletter from "../components/NewsLetter"
<<<<<<< Updated upstream
import TagCloud from "../components/TagCloud"
import BlogEditor from "../components/BlogEditor"
=======
import styles from "../styles/Home.module.css"
>>>>>>> Stashed changes

const Home = () => {
  const handleBlogSubmit = (blogData) => {
    console.log("Blog Submitted:", blogData)
    // Send blogData to API or save it
  }

  return (
    <Layout>
      <Navbar />
<div className={styles.topBanner}>
  <div><MainBanner />
  <StyledHeader title="Editor's Pick" /></div>

<<<<<<< Updated upstream
      <RecentPosts />
      <MainBanner />
      <StyledHeader title="Editor's Pick" />
      <SidebarList />
      <Newsletter />
      <TagCloud />
      <BlogEditor onSubmit={handleBlogSubmit} />
=======
<div><RecentPosts />
<SidebarList />
<Newsletter /></div>

</div>
      
    
      
      
      
>>>>>>> Stashed changes
    </Layout>
  )
}

export default Home
