import React from "react"
import styles from "../styles/SidebarList.module.css"
import { FiChevronRight } from "react-icons/fi"
import StyledHeader from "./StyledHeader"
import { useNavigate } from "react-router-dom"

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
  const navigate = useNavigate()

  const handleCategoryClick = (category) => {
    // convert to lowercase, replace spaces/ampersands with hyphens
    const slug = category
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\s+/g, "-")
    navigate(`/topics/${slug}`)
  }

  return (
    <div className={styles.sidebarContainer}>
      <StyledHeader title="Explore Topics" />
      <ul className={styles.list}>
        {categories.map((category, index) => (
          <li
            key={index}
            className={styles.listItem}
            onClick={() => handleCategoryClick(category)}
            role="button"
            tabIndex={0}
          >
            <FiChevronRight className={styles.icon} />
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidebarList
