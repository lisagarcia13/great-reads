import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getAuthors } from "../services/authors";
import { createBook } from "../services/books";
import "./AddBook.css";

function AddBook(props) {
  let nav = useNavigate();
  const params = useParams();
  const [authors, setAuthors] = useState([]);

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

  useEffect(() => {
    const grabAuthors = async () => {
      const authorsList = await getAuthors();
      setAuthors(authorsList);
    };
    grabAuthors();
  }, [params.id]);

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
                {/* <input
                  className="book-input"
                  placeholder="Author"
                  value={book.author}
                  name="author"
                  // required
                  onChange={handleChange}
                /> */}
                <select
                  name="author"
                  value={authors.id}
                  className="book-input"
                  onChange={handleChange}
                >
                  <option>Author Name</option>
                  {authors.map((author) => {
                    return (
                      <option
                        value={author.id}
                        key={author.id}
                        onChange={handleChange}
                      >
                        {author.name}
                      </option>
                    );
                  })}
                </select>
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
