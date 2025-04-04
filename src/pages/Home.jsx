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

const Home = () => {
  const handleBlogSubmit = (blogData) => {
    console.log("Blog Submitted:", blogData)
    // Send blogData to API or save it
  }

  return (
    <Layout>
      <Navbar />

      <RecentPosts />
      <MainBanner />
      <StyledHeader title="Editor's Pick" />
      <SidebarList />
      <Newsletter />
      <TagCloud />
      <BlogEditor onSubmit={handleBlogSubmit} />
    </Layout>
  )
}

export default Home
