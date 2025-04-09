import React, { useState, useRef } from "react"
import styles from "../styles/ContactUs.module.css"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
import Footer from "../components/Footer"

const Contact = () => {
  const [showModal, setShowModal] = useState(false)
  const formRef = useRef(null) // useRef to reset the form

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    if (formRef.current) {
      formRef.current.reset() // Reset the form fields
    }
  }

  return (
    <Layout>
      <Navbar />

      <section className={styles.contactSection}>
        <h2 className={styles.heading}>Contact us</h2>

        <div className={styles.infoCards}>
          <div className={styles.card}>
            <span className={styles.icon}>📞</span>
            <h4>Phone</h4>
            <p>+1-202-555-0135</p>
          </div>
          <div className={styles.card}>
            <span className={styles.icon}>📧</span>
            <h4>E-Mail</h4>
            <p>hello@example.com</p>
          </div>
          <div className={styles.card}>
            <span className={styles.icon}>🗺️</span>
            <h4>Location</h4>
            <p>California, USA</p>
          </div>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.left}>
            <h3>Contact Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
              lectus porta, aliquet neque ac, vehicula leo. Sed tempus magna at
              tellus porta ornare. Vestibulum nec dignissim arcu.
            </p>
            <ul>
              <li>How about if I sleep a little bit</li>
              <li>A collection of textile samples lay spread out</li>
              <li>His many legs, pitifully thin compared with</li>
              <li>He lay on his armour-like back</li>
              <li>Gregor Samsa woke from troubled dreams</li>
            </ul>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
            <input type="text" placeholder="First name*" required />
            <input type="text" placeholder="Last name" />
            <input type="email" placeholder="Email*" required />
            <textarea placeholder="Your message here..." rows={4} />
            <button type="submit">Get Started</button>
          </form>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>🎉 Form Submitted Successfully!</h2>
            <p>Thank you for reaching out. We'll get back to you soon.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </Layout>
  )
}

export default Contact
