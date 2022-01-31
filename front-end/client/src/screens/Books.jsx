import BookCards from "../components/BookCards";
import Layout from "../components/Layout";
import "./Books.css";

function Books({ books }, props) {
  return (
    <Layout user={props.user}>
      <div className="all-books">
        <h2 className="book-header-main">Books</h2>
        <BookCards books={books} />
      </div>
    </Layout>
  );
}

export default Books;
