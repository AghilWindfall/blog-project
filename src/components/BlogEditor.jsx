import React, { useState } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import TextStyle from "@tiptap/extension-text-style"
import Color from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import Link from "@tiptap/extension-link"
import Image from "@tiptap/extension-image"
import styles from "../styles/BlogEditor.module.css"

const BlogEditor = ({ onSubmit }) => {
  const [title, setTitle] = useState("")
  const [color, setColor] = useState("#000000")
  const [author, setAuthor] = useState("")
  const [tags, setTags] = useState("")
  const [category, setCategory] = useState("")
  const [featuredImage, setFeaturedImage] = useState(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [language, setLanguage] = useState("")

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      Highlight,
      Link,
      Image,
    ],
    content: "<p>Start writing your blog...</p>",
  })

  if (!editor) return null

  const handleSubmit = () => {
    if (
      !title.trim() ||
      !editor.getHTML().trim() ||
      !author.trim() ||
      !tags.trim() ||
      !category.trim() ||
      !featuredImage
    ) {
      setShowErrorModal(true)
      return
    }

    onSubmit({
      language,
      title,
      content: editor.getHTML(),
      author,
      tags: tags.split(",").map((tag) => tag.trim()),
      category,
      featuredImage,
    })

    setShowSuccessModal(true)

    setTimeout(() => {
      setShowSuccessModal(false)
      setTitle("")
      setAuthor("")
      setTags("")
      setCategory("")
      setFeaturedImage(null)
      editor.commands.setContent("")
    }, 2000)
  }

  return (
    <div className={styles.editorContainer}>
      <div className={styles.languageSelector}>
        <label htmlFor="language">Select Language:</label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={styles.selectField}
        >
          <option value="">Choose Language</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Malayalam">Malayalam</option>
          <option value="Hindi">Hindi</option>
          <option value="Tamil">Tamil</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Enter Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.titleInput}
      />

      <div className={styles.toolbar}>
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          <b>B</b>
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          <i>I</i>
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <u>U</u>
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()}>
          S
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          • List
        </button>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value)
            editor.chain().focus().setColor(e.target.value).run()
          }}
          className={styles.colorPicker}
        />
        <button
          onClick={() => {
            const url = prompt("Enter URL:")
            if (url) editor.chain().focus().setLink({ href: url }).run()
          }}
        >
          🔗
        </button>
        <button onClick={() => document.getElementById("imageUpload").click()}>
          🖼
        </button>
        <input
          type="file"
          id="imageUpload"
          style={{ display: "none" }}
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0]
            if (!file) return
            const reader = new FileReader()
            reader.onload = (event) => {
              editor
                .chain()
                .focus()
                .setImage({ src: event.target.result })
                .run()
            }
            reader.readAsDataURL(file)
          }}
        />
        <button onClick={() => editor.chain().focus().undo().run()}>↩</button>
        <button onClick={() => editor.chain().focus().redo().run()}>↪</button>
      </div>

      <div className={styles.editor}>
        <EditorContent editor={editor} />
      </div>

      {/* Blog Meta Data Form */}
      <div className={styles.metaForm}>
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className={styles.inputField}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles.selectField}
        >
          <option value="">Select Category</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <h2>Featured Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFeaturedImage(e.target.files[0])}
        />
      </div>

      <button onClick={handleSubmit} className={styles.publishBtn}>
        🚀 Publish Blog
      </button>

      {/* Error Modal */}
      {showErrorModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>⚠️ All fields are required!</p>
            <button onClick={() => setShowErrorModal(false)}>OK</button>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>
              ✅ Your blog has been submitted for review. It will go live once
              approved.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogEditor
