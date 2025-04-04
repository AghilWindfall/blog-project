import React from "react"
import BlogEditor from "../components/BlogEditor"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"

const CreateBlog = () => {
  const handleBlogSubmit = (blogData) => {
    console.log("Blog Submitted:", blogData)
  }
  return (
    <Layout>
      <Navbar />
      <BlogEditor onSubmit={handleBlogSubmit} />
    </Layout>
  )
}

export default CreateBlog
