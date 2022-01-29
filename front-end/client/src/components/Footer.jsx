import "./Footer.css";

function Footer() {
  return (
    <nav className="footer">
      <h3>Lisa Garcia</h3>
      <div>
        <a href="https://github.com/lisagarcia13">
          <img
            src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/github_fpykxh.png"
            alt="github-icon"
            className="icons"
          />
        </a>
        <a href="https://www.linkedin.com/in/lisa-marie-garcia/">
          <img
            src="https://res.cloudinary.com/briandanger/image/upload/v1568954107/linkedin_vnvo6s.png"
            alt="linkedin-icon"
            className="icons"
          />
        </a>
      </div>
    </nav>
  );
}

export default Footer;
