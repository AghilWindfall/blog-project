import React from "react"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
import RecentPosts from "../components/RecentPosts"
import MainBanner from "../components/MainBanner"

const Home = () => {
  return (
    <Layout>
      <Navbar />

      <RecentPosts />
      <MainBanner />
    </Layout>
  )
}

export default Home
