import React from "react"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
import RecentPosts from "../components/RecentPosts"
import MainBanner from "../components/MainBanner"
import StyledHeader from "../components/StyledHeader"
import SidebarList from "../components/SidebarList"

const Home = () => {
  return (
    <Layout>
      <Navbar />

      <RecentPosts />
      <MainBanner />
      <StyledHeader title="Editor's Pick" />
      <SidebarList />
    </Layout>
  )
}

export default Home
