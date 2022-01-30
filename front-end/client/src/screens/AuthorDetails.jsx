import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { getAuthor, deleteAuthor } from "../services/authors";
import "./AuthorDetails.css";

function AuthorDetails(props) {
  const navigate = useNavigate();

  const [author, setAuthor] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchAuthor = async () => {
      const author = await getAuthor(id);
      setAuthor(author);
      setLoaded(true);
    };
    fetchAuthor();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = () => {
    deleteAuthor(author.id);
    navigate("/authors");
    props.setToggle((prevToggle) => !prevToggle);
  };

  return (
    <Layout user={props.user}>
      <div className="author-detail-container">
        <div className="img-flex">
          <img
            className="author-detail-img"
            src={author.image}
            alt={author.name}
          />
        </div>

        <div className="author-book-container">
          <h2 className="author-detail-name">{author.name}</h2>
          <h3 className="author-detail-header">Books:</h3>
          <div>
            {author.books.map((books) => (
              <h3 key={books.id} className="book-list-detail">
                {books.title}
              </h3>
            ))}
          </div>
        </div>
        <div className="author-button-container">
          <Link className="edit-author-link" to={`/authors/${author.id}/edit`}>
            Edit
          </Link>
          <button className="author-delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default AuthorDetails;
