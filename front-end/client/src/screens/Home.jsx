import Layout from "../components/Layout";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="home">
        <h1>Home</h1>
      </div>
    </Layout>
  );
};

export default Home;
