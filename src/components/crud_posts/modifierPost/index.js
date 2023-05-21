import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../../service/posts";
//import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ModifyPostPage() {
  const _post = useParams();
  const postId = _post.id;

  const [post, setPost] = useState({ title: "", content: "", author: "" });

  useEffect(() => {
    async function fetchPost() {
      const result = await api.getPostById(postId);
      setPost(result);
    }
    fetchPost();
  }, [postId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.updatePost(postId, post);
      toast
        .promise(Promise.resolve(), {
          pending: "Modification en cours...",
          success: "Le post a été modifié avec succès !",
          error: "Une erreur s'est produite lors de la modification du post.",
        })
        .then(() => {
          window.location.href = "/list-posts";
        });
    } catch (error) {
      console.error("Erreur lors de la modification du post :", error);
      toast.error("Une erreur s'est produite lors de la modification du post.");
    }
  };

  return (
    <div>
      <h1>Modifier le Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="content">Contenu :</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="author">Auteur :</label>
          <input
            type="text"
            id="author"
            name="author"
            value={post.author}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Modifier</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ModifyPostPage;
