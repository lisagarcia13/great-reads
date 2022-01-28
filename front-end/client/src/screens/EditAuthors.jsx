import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { getAuthor, updateAuthor } from "../services/authors";

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
    <div>
      <Layout user={props.user}>
        <div className="main-edit">
          <div className="sub-edit">
            <div className="edit-form">
              <h1>EDIT Author</h1>
              <form onSubmit={handleSubmit}>
                <label>Author Name:</label>
                <input
                  placeholder="Name"
                  value={author.name}
                  name="name"
                  required
                  onChange={handleChange}
                />
                <label>Image URL:</label>
                <input
                  placeholder="Image URL"
                  value={author.image}
                  name="image"
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

export default EditAuthors;
