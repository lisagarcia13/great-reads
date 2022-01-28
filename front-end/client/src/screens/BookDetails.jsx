import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { getBook, deleteBook } from "../services/books";

function BookDetails(props) {
  const navigate = useNavigate();

  const [bookDetails, setBookDetails] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBook(id);
      setBookDetails(book);
      setLoaded(true);
    };
    fetchBook();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = () => {
    deleteBook(bookDetails.id);
    navigate("/books");
    props.setToggle((prevToggle) => !prevToggle);
  };

  return (
    <Layout user={props.user}>
      <div>
        <h2>{bookDetails.title}</h2>
        <h4> Written by: {bookDetails.author}</h4>
        <img src={bookDetails.image} alt={bookDetails.title} />
        <h4> Release Date: {bookDetails.release}</h4>
        <h3>Description: </h3>
        <p>{bookDetails.description}</p>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </Layout>
  );
}
export default BookDetails;
