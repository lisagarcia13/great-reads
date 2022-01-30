import { getAuthors } from "../services/authors";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AuthorCards.css";

function AuthorCards(props) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const res = await getAuthors("/authors");
        setAuthors(res);
      } catch (error) {
        console.log(error);
      }
    };
    response();
  }, [props.toggle]);

  return (
    <div className="all-authors">
      {authors.map((author) => (
        <div key={author.id} className="author-card-div">
          <div className="test-author">
            <Link
              className="link-author"
              to={`/authors/${author.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <h2>{author.name}</h2>
              <img
                className="main-author-img"
                src={author.image}
                alt={author.title}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AuthorCards;
