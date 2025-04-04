import React from "react"
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
          {/* <button className={styles.activeButton}>Home</button> */}
          <li>Home</li>
        </li>
        <li>Blog Archive</li>
        <li>Create Blog</li>
        {/* <li>
          Pages <span>▼</span>
        </li>
        <li>
          System Pages <span>▼</span>
        </li> */}
        <li>Contact</li>
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
