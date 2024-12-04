import { useState } from "react";
import { Notify } from "notiflix";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/authSlice";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      Notify.failure("Username and password cannot be empty");
      return;
    }

    dispatch(
      register({
        username,
        password,
      })
    );

    setUsername("");
    setPassword("");

    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center text-3xl mt-10">
      <div className="border border-black p-4 gap-10 flex flex-col">
        <h1 className="text-4xl text-center">Register Page</h1>
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
