import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { createBook } from "../services/books";
import "./AddBook.css";

function AddBook(props) {
  let nav = useNavigate();

  const [book, setBook] = useState({
    image: "",
    title: "",
    release: "",
    description: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBook(book);
    nav("/books");
    props.setToggle((prevToggle) => !prevToggle);
  };

  return (
    <Layout user={props.user}>
      <div>
        <div className="book-create">
          <div className="book-sub-create">
            <div className="book-create-form">
              <h2 className="book-main-header">Add Book Form</h2>
              <form onSubmit={handleSubmit}>
                <label className="book-label">Image URL:</label>
                <input
                  className="book-input"
                  placeholder="Image URL"
                  value={book.image}
                  name="image"
                  required
                  onChange={handleChange}
                />
                <label className="book-label">Book Title:</label>
                <input
                  className="book-input"
                  placeholder="Book Title"
                  value={book.title}
                  name="title"
                  required
                  onChange={handleChange}
                />
                <label className="book-label">Release Date: </label>
                <input
                  className="book-input"
                  placeholder="YYYY-MM-DD"
                  value={book.release}
                  name="release"
                  required
                  onChange={handleChange}
                />
                <label className="book-label">Description:</label>
                <input
                  className="book-input"
                  placeholder="Short Description"
                  value={book.description}
                  name="description"
                  required
                  onChange={handleChange}
                />
                <label className="book-label">Author:</label>
                <input
                  className="book-input"
                  placeholder="Author"
                  value={book.author}
                  name="author"
                  // required
                  onChange={handleChange}
                />
                <button className="book-create-button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddBook;
