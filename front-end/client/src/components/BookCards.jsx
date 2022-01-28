import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBooks } from "../services/books";

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
    <div className="all-products">
      {books.map((book) => (
        <div key={book.id} className="book-card-div">
          <Link className="link" to={`/books/${book.id}`}>
            <h2>{book.title}</h2>
            <img src={book.image} alt="book cover" />
          </Link>
          <div className="book-card-info">
            <h3>{book.author}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookCards;
