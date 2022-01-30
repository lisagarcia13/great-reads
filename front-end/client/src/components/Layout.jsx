import Footer from "./Footer";
import "./Layout.css";

const Layout = (props) => (
  <div className="layout">
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
