import React from "react"
import { Link } from "react-router-dom"
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
      <div className={styles.logo}>
        Katen<span className={styles.dot}>.</span>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
     
          {/* <button className={styles.activeButton}>Home</button> */}
          <li className={styles.active}>Home</li>
       
        <li>Blog Archive</li>
        <li>Create Blog</li>
        {/* <li>
          Pages <span>▼</span>
        </li>
        <li>
          <Link to="/blog-archive">Blog Archive</Link>
        </li>
        <li>
          <Link to="/create-blog">Create Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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
