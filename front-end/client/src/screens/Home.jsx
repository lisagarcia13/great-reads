import Layout from "../components/Layout";
import "./Home.css";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="home">
        <div className="home-container">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/17/10/29/coffee-2151200_1280.jpg"
            alt="coffee-book"
            className="home-img"
          />
        </div>
        <div>
          <h2 className="about">About Us</h2>
          <p className="home-text">
            Here at GreatReads you can find your next adventure with a click of
            a button. Feel free to scroll through our books and authors to find
            your next GreatRead. Don’t forget to login to add your own author
            and books to our never ending list! if you don’t have an acoount,
            what are you waiting for? Join our amazing book community!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
