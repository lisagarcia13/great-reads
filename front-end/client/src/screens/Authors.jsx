import AuthorCards from "../components/AuthorCards";
import Layout from "../components/Layout";

function Books({ authors }, props) {
  return (
    <Layout user={props.user}>
      <div className="all-books">
        <AuthorCards authors={authors} />
      </div>
    </Layout>
  );
}

export default Books;
