import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { createAuthor } from "../services/authors";
import "./AddAuthor.css";

function AddAuthor(props) {
  let nav = useNavigate();

  const [author, setAuthor] = useState({
    name: "",
    image: "",
    books: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthor({
      ...author,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAuthor(author);
    nav("/authors");
    props.setToggle((prevToggle) => !prevToggle);
  };

  return (
    <Layout user={props.user}>
      <div>
        <div className="author-create">
          <div className="author-sub-create">
            <div className="author-create-form">
              <h1>Add Author Form</h1>
              <form onSubmit={handleSubmit}>
                <label className="add-label">Image URL: </label>
                <input
                  className="author-input"
                  placeholder="Image URL"
                  value={author.image}
                  name="image"
                  required
                  onChange={handleChange}
                />
                <label className="add-label">Author Name: </label>
                <input
                  className="author-input"
                  placeholder="Author Name"
                  value={author.name}
                  name="name"
                  required
                  onChange={handleChange}
                />
                <button className="author-create-button" type="submit">
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

export default AddAuthor;
