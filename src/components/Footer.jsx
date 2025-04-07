import React from "react"
import styles from "../styles/Footer.module.css"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaMediumM,
  FaYoutube,
} from "react-icons/fa"
import { IoIosArrowUp } from "react-icons/io"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.leftText}>
        © 2021 Katen. Template by <a href="#">ThemeGer</a>.
      </p>

      <div className={styles.socialIcons}>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaPinterestP />
        <FaMediumM />
        <FaYoutube />
      </div>

      <button className={styles.backToTop}>
        <IoIosArrowUp className={styles.arrowIcon} />
        Back to Top
      </button>
    </footer>
  )
}

export default Footer
