import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "../styles/Navbar.module.css"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaMediumM,
  FaYoutube,
} from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { HiMenu } from "react-icons/hi"
import { IoMdClose } from "react-icons/io"

const Navbar = () => {
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const openSearch = () => setShowSearchModal(true)
  const closeSearch = () => {
    setSearchModal(false)
    setSearchTerm("")
  }

  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/">
          <img
            src="https://shalomworld.org/hubfs/Shalom%20Tidings%20Web%20Assets/Tidings%20Logo%20for%20Web-01.svg"
            alt="logo"
            width="100px"
            style={{ cursor: "pointer" }}
          />
        </NavLink>

        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog-archive"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Blog Archive
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create-blog"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Create Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className={styles.socialIcons}>
          <FaFacebookF className={styles.icon} />
          <FaTwitter className={styles.icon} />
          <FaInstagram className={styles.icon} />
          <FaPinterestP className={styles.icon} />
          <FaMediumM className={styles.icon} />
          <FaYoutube className={styles.icon} />
        </div>

        <div className={styles.actions}>
          <button className={styles.iconButton} onClick={openSearch}>
            <FiSearch />
          </button>
          <button className={styles.iconButton}>
            <HiMenu />
          </button>
        </div>
      </nav>

      {/* Search Modal */}
      {showSearchModal && (
        <div className={styles.searchModalOverlay}>
          <div className={styles.searchModal}>
            <button
              className={styles.closeButton}
              onClick={() => setShowSearchModal(false)}
            >
              <IoMdClose size={28} />
            </button>
            <h2>🔍 Search Blogs</h2>
            <input
              type="text"
              placeholder="Type to search..."
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Future: map and show results below */}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
