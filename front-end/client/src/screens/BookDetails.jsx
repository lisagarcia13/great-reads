import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { getBook, deleteBook } from "../services/books";
import "./BookDetails.css";

function BookDetails(props) {
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBook(id);
      setBook(book);
      setLoaded(true);
    };
    fetchBook();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = () => {
    deleteBook(book.id);
    navigate("/books");
    props.setToggle((prevToggle) => !prevToggle);
  };

  return (
    <Layout user={props.user}>
      <div className="book-detail-container">
        <div className="book-author">
          <h2>{book.title}</h2>
          <h4> Written by: {book.author.name}</h4>
          {/* {book.author.map((author) => (
            <h3>{author.name}</h3>
          ))} */}
          {/* {author.name} */}
        </div>
        <img className="book-detail-img" src={book.image} alt={book.title} />
        <div className="book-details">
          <h4> Release Date: {book.release}</h4>
          <h3>Description: </h3>
          <p>{book.description}</p>
        </div>
        <div className="detail-button-container">
          <Link to={`/books/${book.id}/edit`}>Edit</Link>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </Layout>
  );
}
export default BookDetails;
