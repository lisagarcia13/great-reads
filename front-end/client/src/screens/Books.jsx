import BookCards from "../components/BookCards";
import Layout from "../components/Layout";

function Books({ books }, props) {
  return (
    <Layout user={props.user}>
      <div className="all-books">
        <BookCards books={books} />
      </div>
    </Layout>
  );
}

export default Books;
