import { useEffect, useState } from "react";
import * as api from "../../../service/posts";
import "./styles.css";
import { Link } from "react-router-dom";
function ListPosts() {
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    async function fetchData() {
      const result = await api.getPosts();
      setRows(result);
    }
    fetchData();
  }, []);

  const displayPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return rows.slice(startIndex, endIndex).map((post) => (
      <div className="post" key={post._id}>
        <h2 className="post-title">{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <div className="post-details">
          <p className="post-author">{post.author}</p>
          <p className="post-created-at">{post.createdAt}</p>
        </div>
        {/* Ajoutez le lien ou le bouton de modification */}
        <Link to={`/modifier-post/${post._id}`} className="edit-post-link">
          Modifier
        </Link>
      </div>
    ));
  };
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    const lastPage = Math.ceil(rows.length / postsPerPage);
    if (currentPage < lastPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const totalPages = Math.ceil(rows.length / postsPerPage);

  return (
    <div>
      <h1>Liste des Posts</h1>
      <a href="/ajouter-post" className="add-post-link">
        Ajouter un post
      </a>
      {displayPosts()}
      <div className="pagination">
        <p className="page-info">{`Page ${currentPage} sur ${totalPages}`}</p>
        <button className="prev-btn" onClick={goToPrevPage}>
          Précédent
        </button>

        <button className="next-btn" onClick={goToNextPage}>
          Suivant
        </button>
      </div>
    </div>
  );
}
export default ListPosts;
