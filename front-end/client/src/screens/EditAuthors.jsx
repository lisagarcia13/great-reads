import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { getAuthor, updateAuthor } from "../services/authors";
import "./EditAuthors.css";

function EditAuthors(props) {
  let nav = useNavigate();

  const [author, setAuthor] = useState({
    name: "",
    image: "",
  });

  let { id } = useParams();

  useEffect(() => {
    const fetchAuthor = async () => {
      const author = await getAuthor(id);
      setAuthor(author);
    };
    fetchAuthor();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthor({
      ...author,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateAuthor(id, author);
    nav(`/authors/${id}`);
    props.setToggle((prevToggle) => !prevToggle);
  };

  return (
    <Layout user={props.user}>
      <div className="author-main-edit">
        <div className="author-sub-edit">
          <div className="author-edit-form">
            <h2 className="edit-label">Edit Author</h2>
            <form onSubmit={handleSubmit}>
              <label className="edit-author-label">Author Name:</label>
              <input
                className="edit-author-input"
                placeholder="Name"
                value={author.name}
                name="name"
                required
                onChange={handleChange}
              />
              <label className="edit-author-label">Image URL:</label>
              <input
                className="edit-author-input"
                placeholder="Image URL"
                value={author.image}
                name="image"
                required
                onChange={handleChange}
              />
              <button className="author-update-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditAuthors;
