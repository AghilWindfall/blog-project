import React from "react"
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

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img
        src="https://shalomworld.org/hubfs/Shalom%20Tidings%20Web%20Assets/Tidings%20Logo%20for%20Web-01.svg"
        alt="logo"
        width="100px"
      />

      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog-archive"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Blog Archive
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create-blog"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Create Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
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
        <button className={styles.iconButton}>
          <FiSearch />
        </button>
        <button className={styles.iconButton}>
          <HiMenu />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
