import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ message, status }) => {
  const navigate = useNavigate();
  return (
    <div className="text-red-500 flex flex-col text-center h-screen justify-center bg-black text-4xl">
      <h1>{message}</h1>
      <h1>{status}</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl w-1/3 mx-auto"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
