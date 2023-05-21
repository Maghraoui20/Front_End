import { useState } from "react";
import * as api from "../../../service/posts";
//import "./styles.css";
function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content, author };
    await api.createPost(newPost);
    // Réinitialiser les champs après la soumission
    setTitle("");
    setContent("");
    setAuthor("");
    // Rediriger vers la page de liste des publications
    window.location.href = "/list-posts";
  };

  return (
    <div>
      <h1>Ajouter un post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Contenu :</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="author">Auteur :</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddPost;
