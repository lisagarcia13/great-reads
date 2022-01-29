import { useState } from "react";
import { signUp } from "../services/users";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function SignUp(props) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        email: "",
        password: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <div>
          <button className="signup-button" type="submit">
            Sign Up
          </button>
        </div>
      );
    }
  };

  const { username, email, password } = form;

  return (
    <Layout user={props.user}>
      <div className="signup-container">
        <div className="signup-helper">
          <div className="header-signup">
            <h3 className="signup">Sign Up</h3>
          </div>
          <form className="signup-form" onSubmit={onSignUp}>
            <label className="signup-label">Username: </label>
            <input
              required
              className="signup-input"
              type="text"
              name="username"
              value={username}
              placeholder="Enter Username"
              onChange={handleChange}
            />
            <label className="signup-label">Password: </label>
            <input
              required
              className="signup-input"
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <label className="signup-label">Email: </label>
            <input
              required
              className="signup-input"
              type="email"
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={handleChange}
            />
            {renderError()}
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
