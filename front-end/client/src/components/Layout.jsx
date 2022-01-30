import Footer from "./Footer";

const Layout = (props) => (
  <div className="layout">
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
