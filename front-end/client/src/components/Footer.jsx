import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className="footer">
      <h3>Lisa Garcia</h3>
      <Link className="contact-link" to="https://github.com/lisagarcia13">
        Github
      </Link>
    </nav>
  );
}

export default Footer;
