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
      <div>
        <h2>{author.name}</h2>
        <img
          className="author-detail-img"
          src={author.image}
          alt={author.name}
        />
        <div className="button-container">
          <Link to={`/authors/${author.id}/edit`}>Edit</Link>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
          <div>
            <h3>Books:</h3>
            <div>
              {/* <Link to = {`/books/${book.id}`} >
             
              </Link> */}
              {author.books}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AuthorDetails;
