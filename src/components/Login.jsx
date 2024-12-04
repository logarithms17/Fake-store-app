import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { Notify } from "notiflix";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      Notify.failure("Username and password cannot be empty");
      return;
    }
    dispatch(login({ username, password }));

    setUsername("");
    setPassword("");

    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center text-3xl mt-10">
      <div className="border border-black p-4 gap-10 flex flex-col">
        <h1 className="text-4xl text-center">Login Page</h1>
        <form
          action=""
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p className="text-center text-[20px]">
            Not yet registered?
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
