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
                <label>Image URL: </label>
                <input
                  placeholder="Image URL"
                  value={author.image}
                  name="image"
                  required
                  onChange={handleChange}
                />
                <label>Author Name: </label>
                <input
                  placeholder="Name"
                  value={author.name}
                  name="name"
                  required
                  onChange={handleChange}
                />
                <button type="submit">Submit Author</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddAuthor;
