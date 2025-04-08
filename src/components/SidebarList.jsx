import React from "react"
import styles from "../styles/SidebarList.module.css"
import { FiChevronRight } from "react-icons/fi"
import StyledHeader from "./StyledHeader"

const categories = [
  "Faith & Devotion",
  "Prayer Life",
  "Scripture Reflections",
  "Christian Living",
  "Grace & Redemption",
  "Spiritual Growth",
  "Worship & Praise",
  "Holy Spirit & Gifts",
]

const SidebarList = () => {
  return (
    <div className={styles.sidebarContainer}>
      <StyledHeader title="Explore Topics" />
      <ul className={styles.list}>
        {categories.map((category, index) => (
          <li key={index} className={styles.listItem}>
            <FiChevronRight className={styles.icon} />
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidebarList
