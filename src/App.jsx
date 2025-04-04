import "./App.css"
import Home from "./pages/Home"
import "./index.css"
import { Route, Routes } from "react-router-dom"
import BlogArchive from "./pages/BlogArchive"
import CreateBlog from "./pages/CreateBlog"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-archive" element={<BlogArchive />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
