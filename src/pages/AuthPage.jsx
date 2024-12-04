import { useLocation, useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import { useEffect } from "react";

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const isLoggedIn = localStorage.getItem("success");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  const dynamicTab = () => {
    if (pathname === "/login") {
      return <Login />;
    }

    if (pathname === "/register") {
      return <Register />;
    }
  };

  return <div>{dynamicTab()}</div>;
};

export default AuthPage;
