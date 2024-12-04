import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Notify } from "notiflix";

const HomePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("success");

  useEffect(() => {
    if (!isLoggedIn) {
      Notify.failure("Please login again.");
      navigate("/login");
    }
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to My Fake Store</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl"
        onClick={() => navigate("/shop")}
      >
        Shop now!
      </button>
    </div>
  );
};

export default HomePage;
