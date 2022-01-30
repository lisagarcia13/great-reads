import AuthorCards from "../components/AuthorCards";
import Layout from "../components/Layout";
import "./Authors.css";

function Books({ authors }, props) {
  return (
    <Layout user={props.user}>
      <div className="all-books">
        <h2 className="author-header-main">Authors</h2>
        <AuthorCards authors={authors} />
      </div>
    </Layout>
  );
}

export default Books;
