import "./App.css"
import Home from "./pages/Home"
import "./index.css"
import { Route, Routes } from "react-router-dom"
import BlogArchive from "./pages/BlogArchive"
import CreateBlog from "./pages/CreateBlog"
import Contact from "./pages/Contact"
import ScrollToTop from "./components/ScrollToTop"
import TopicPage from "./pages/TopicPage"

function App() {
  return (
    <>
      {/* <Home /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-archive" element={<BlogArchive />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/topics/:slug" element={<TopicPage />} />
      </Routes>
    </>
  )
}

export default App
