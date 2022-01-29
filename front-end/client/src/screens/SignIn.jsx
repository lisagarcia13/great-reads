import { useState } from "react";
import { signIn } from "../services/users";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

function SignIn(props) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        username: "",
        password: "",
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
        <div className="button">
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </div>
      );
    }
  };

  const { username, password } = form;

  return (
    <Layout className="layout-signin" user={props.user}>
      <div className="signin-container">
        <div className="header-signin">
          <h3 className="signin">Sign In</h3>
        </div>
        <form className="signin-form" onSubmit={onSignIn}>
          <div className="container">
            <label className="signin-label">Username: </label>
            <div className="signin-usernmae">
              <input
                required
                className="signin-input"
                type="text"
                name="username"
                value={username}
                placeholder="Enter Username"
                onChange={handleChange}
              />
            </div>

            <label className="signin-label">Password: </label>
            <div className="signin-pw">
              <input
                required
                className="signin-input"
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>
          {renderError()}
        </form>
      </div>
    </Layout>
  );
}

export default SignIn;
