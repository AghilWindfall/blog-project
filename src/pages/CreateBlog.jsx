import React from "react"
import BlogEditor from "../components/BlogEditor"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
import Footer from "../components/Footer"

const CreateBlog = () => {
  const handleBlogSubmit = (blogData) => {
    console.log("Blog Submitted:", blogData)
  }
  return (
    <Layout>
      <Navbar />
      <BlogEditor onSubmit={handleBlogSubmit} />
      <Footer />
    </Layout>
  )
}

export default CreateBlog
