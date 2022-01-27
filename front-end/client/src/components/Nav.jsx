import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="link-container">
        <div>
          <Link to="/books">Books</Link>
        </div>
      </div>
    </nav>
  );
}
