import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { getBook, updateBook } from "../services/books";
import "./EditBooks.css";

function EditBooks(props) {
  let nav = useNavigate();

  const [book, setBook] = useState({
    title: "",
    release: "",
    image: "",
    description: "",
    author: "",
  });

  let { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBook(id);
      setBook(book);
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBook(id, book);
    nav(`/books/${id}`);
    props.setToggle((prevToggle) => !prevToggle);
  };

  return (
    <Layout user={props.user}>
      <div className="book-edit">
        <div className="book-sub-edit">
          <div className="book-edit-form">
            <h1>Edit Book</h1>
            <form onSubmit={handleSubmit}>
              <label className="book-edit-label">Image URL:</label>
              <input
                className="book-edit-input"
                placeholder="Image URL"
                value={book.image}
                name="image"
                required
                onChange={handleChange}
              />
              <label className="book-edit-label">Book Title:</label>
              <input
                className="book-edit-input"
                placeholder="Book Title"
                value={book.title}
                name="title"
                required
                onChange={handleChange}
              />
              <label className="book-edit-label">Release Date: </label>
              <input
                className="book-edit-input"
                placeholder="YYYY-MM-DD"
                value={book.release}
                name="release"
                required
                onChange={handleChange}
              />
              <label className="book-edit-label">Description:</label>
              <input
                className="book-edit-input"
                placeholder="Short Description"
                value={book.description}
                name="description"
                required
                onChange={handleChange}
              />
              <label className="book-edit-label">Author:</label>
              <input
                className="book-edit-input"
                placeholder="Author"
                value={book.author}
                name="author"
                required
                onChange={handleChange}
              />
              <button className="book-edit-button">Submit </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditBooks;
