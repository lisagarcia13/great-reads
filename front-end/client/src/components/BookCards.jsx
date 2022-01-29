import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBooks } from "../services/books";
import "./BookCards.css";

function BookCards(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const res = await getBooks("/books");
        setBooks(res);
      } catch (error) {
        console.log(error);
      }
    };
    response();
  }, [props.toggle]);

  return (
    <div className="all-books">
      {books.map((book) => (
        <div key={book.id} className="book-card-div">
          <Link
            className="link-book"
            style={{ textDecoration: "none" }}
            to={`/books/${book.id}`}
          >
            <h2>{book.title}</h2>
            <img className="main-book-img" src={book.image} alt={book.title} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BookCards;
