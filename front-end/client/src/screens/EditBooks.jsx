import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { getBook, updateBook } from "../services/books";

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
    <div>
      <Layout user={props.user}>
        <div className="main-edit">
          <div className="sub-edit">
            <div className="edit-form">
              <h1>EDIT PRODUCT</h1>
              <form onSubmit={handleSubmit}>
                <label>Image URL:</label>
                <input
                  placeholder="Image URL"
                  value={book.image}
                  name="image"
                  required
                  onChange={handleChange}
                />
                <label>Book Title:</label>
                <input
                  placeholder="Book Title"
                  value={book.title}
                  name="title"
                  required
                  onChange={handleChange}
                />
                <label>Release Date: </label>
                <input
                  placeholder="YYYY-MM-DD"
                  value={book.release}
                  name="date"
                  required
                  onChange={handleChange}
                />
                <label>Description:</label>
                <input
                  placeholder="Short Description"
                  value={book.description}
                  name="description"
                  required
                  onChange={handleChange}
                />
                <label>Author:</label>
                <input
                  placeholder="Author"
                  value={book.author}
                  name="author"
                  required
                  onChange={handleChange}
                />
                <button>Submit Edit</button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default EditBooks;
