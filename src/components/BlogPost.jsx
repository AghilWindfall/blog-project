import React from "react"
import styles from "../styles/BlogPost.module.css"
import AuthorCard from "./AuthorCard"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"

const BlogPost = () => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate("/blog-archive-suggested")
  }
  return (
    <div className={styles.postContainer}>
      <Navbar />
      <img
        src="https://143329335.fs1.hubspotusercontent-eu1.net/hubfs/143329335/Rectangle%201.png"
        alt="Blog Banner"
        className={styles.banner}
      />

      <div className={styles.contentWrapper}>
        {/* Existing content */}

        <div className={styles.meta}>
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Author"
            className={styles.avatar}
          />
          <div>
            <span className={styles.author}>Katen Doe</span>
            <div className={styles.info}>
              <span>Lifestyle</span>
              <span className={styles.dot}>•</span>
              <span>24 May 2021</span>
            </div>
          </div>
        </div>

        <h1 className={styles.title}>
          16 Unheard Ways To Achieve Greater Walker
        </h1>

        <p className={styles.paragraph}>Lorem ipsum dolor sit amet...</p>

        <blockquote className={styles.quote}>
          "The only way to do great work is to love what you do." – Steve Jobs
        </blockquote>

        <p className={styles.paragraph}>
          {/* Integer vitae libero ac risus egestas... */}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit animi
          tempora ea quia dolorem debitis praesentium temporibus nulla nam
          doloremque, minima eaque sed vel maxime veritatis ut deleniti hic
          nihil ullam deserunt quos iure dolores, exercitationem sit. Repellat
          officiis illo omnis cum earum consequuntur tempore ea, laboriosam
          recusandae tempora voluptatem totam magni aperiam aut esse ipsam
          delectus labore ut dolores impedit non quis quam! Quo incidunt porro
          libero eum impedit dolorem deleniti nulla, repellendus accusantium
          excepturi vero repellat veniam. Laudantium explicabo optio fugit
          corporis, ullam animi vel modi suscipit quae? Itaque, voluptas
          accusamus illum sapiente, eum numquam veniam aliquam animi optio
          exercitationem vitae adipisci deserunt, quo consequatur repellat?
          Magnam veniam vero assumenda autem sequi voluptates ipsa, cupiditate
          suscipit totam aut odio a optio. Ipsa, alias delectus quam illum et
          dolores inventore voluptate asperiores. Facilis alias nulla ad
          voluptates dignissimos cum aperiam odio. Facere similique molestiae
          quo officiis perspiciatis ea, expedita dolore sequi blanditiis,
          tempore exercitationem, hic omnis consectetur nemo quas animi aliquid
          numquam. Odit, ducimus. Obcaecati, commodi iure expedita eos veritatis
          sint neque quod quisquam sapiente assumenda est voluptate ipsa totam
          excepturi aspernatur, ut unde provident amet incidunt id aliquid fuga
          magnam reiciendis repudiandae. Saepe itaque sint obcaecati, nulla
          dignissimos consequatur perferendis suscipit assumenda aperiam
          recusandae impedit quaerat, nam aliquam reprehenderit ab, amet
          accusamus. Culpa obcaecati quas et quibusdam soluta ipsum doloribus
          placeat ut? Omnis delectus blanditiis reprehenderit iure fuga? Vitae
          eaque nemo esse culpa quasi blanditiis labore fugit perferendis, quam
          animi dolores, hic, accusantium necessitatibus unde at iure! Ipsa
          veniam nulla cumque, reiciendis molestias sunt corrupti, ab quod,
          autem deleniti nesciunt! Saepe nobis laborum, accusamus excepturi
          rerum odio cupiditate nam ratione inventore molestias! Quidem dicta
          culpa repellendus quisquam saepe sint, illum officia eligendi aliquam
          non rerum quae, voluptas odit impedit dolorem ipsam reprehenderit.
          Suscipit vero nobis odio cupiditate blanditiis dolores rem quos sequi
          nemo, ab ratione. Veritatis, quos nam? Fugiat saepe deleniti, odio sit
          nemo minus possimus sint at! At rerum, earum mollitia neque impedit
          rem eveniet reiciendis! Ipsa itaque totam laudantium deserunt eius eum
          architecto expedita accusamus tenetur, aspernatur officiis placeat,
          mollitia dolorem cum nobis odit sint maiores eos, ratione debitis
          quasi et obcaecati accusantium. Odio nam laboriosam ipsum porro
          aliquid fuga quos eaque distinctio tenetur, fugiat rerum qui iusto
          tempora delectus incidunt temporibus quae nemo inventore? Vero,
          voluptates expedita? Voluptas recusandae minima rem eligendi laborum
          facere eaque ipsum similique vel dolore, iusto quae eius nihil
          repellat magnam facilis explicabo? Officia magni odio ex tempore?
          Aliquam facilis cupiditate perferendis ratione animi debitis
          distinctio dolorum asperiores impedit sed consectetur reprehenderit,
          nihil repellendus incidunt, id itaque eum a eveniet! Aperiam
          asperiores nihil, adipisci maxime illum unde doloribus nobis
          doloremque eaque vitae neque saepe perferendis, tempore et blanditiis
          maiores animi aspernatur. Dolorem magni maxime repellat fuga ut
          dignissimos, adipisci voluptas natus quod iusto, corporis repellendus,
          eveniet impedit architecto illum? Id illo vero recusandae a labore
          laudantium facere similique ipsam aut, asperiores dolore velit non
          repellendus odit earum ad quibusdam? Recusandae aliquid non quos
          distinctio laboriosam reiciendis rerum facere quia ipsum voluptates.
        </p>

        <div className={styles.socialShare}>
          <span>Share:</span>
          <div className={styles.icons}>
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
          </div>
        </div>
      </div>

      <AuthorCard />

      {/* Suggested Blog Cards */}
      <div className={styles.suggestedSection}>
        <h2 className={styles.suggestedHeading}>Suggested Posts</h2>
        <div className={styles.suggestedCards}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={styles.card}
              onClick={handleCardClick}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`https://shalomworld.org/hubfs/1%20(2).jpg`}
                alt="Suggested Blog"
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <span className={styles.cardCategory}>Travel</span>
                <h3 className={styles.cardTitle}>
                  Explore the unseen corners of the world
                </h3>
                <p className={styles.cardDate}>June {20 + i}, 2021</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
