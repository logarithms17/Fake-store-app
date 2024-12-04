import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const WelcomePage = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  useEffect(() => {
    if (auth.success) {
      navigate("/shop");
    }
  }, [auth.success]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to My Fake Store</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl"
        onClick={() => navigate("/register")}
      >
        Register
      </button>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default WelcomePage;
