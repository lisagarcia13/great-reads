import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../services/users";

function SignOut(props) {
  const { setUser } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const signOutUser = async () => {
      await signOut();
      setUser(null);
      navigate("/");
    };
    signOutUser();
  }, [navigate, setUser]);

  return "";
}

export default SignOut;
