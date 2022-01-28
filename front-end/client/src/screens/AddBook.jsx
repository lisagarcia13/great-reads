import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { createBook } from "../services/books";

function AddBook(props) {
  let nav = useNavigate();

  const [book, setBook] = useState({
    title: "",
    release: "",
    image: "",
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
        <div className="main-create">
          <div className="sub-create">
            <div className="create-form">
              <h1>ADD BOOK</h1>
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
                <button type="submit">Submit Book</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddBook;
