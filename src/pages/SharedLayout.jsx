import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

const SharedLayout = () => {
  const isLoggedIn = localStorage.getItem("success");

  const reduxAmount = useSelector((state) => state.ui.amount);
  console.log(reduxAmount);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("amount", reduxAmount.toFixed(2));
  }, [reduxAmount]);

  const handleLogout = () => {
    dispatch(logout());

    navigate("/login");
  };
  return (
    <>
      <nav className="flex px-10 py-5 text-4xl font-bold justify-between items-center flex-wrap">
        <div className="flex gap-10 items-center">
          <h1 className="text-blue-400">My Fake Store</h1>
          <ul className="flex gap-10">
            {isLoggedIn && (
              <li>
                <Link to="/home">Home</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            )}
          </ul>
        </div>

        <span className="flex items-center gap-5">
          {isLoggedIn && (
            <button className="text-center">
              Cart ({(Math.round(reduxAmount * 100) / 100).toFixed(2)})
            </button>
          )}
          {isLoggedIn && (
            <button className="bg-slate-500" onClick={handleLogout}>
              Logout
            </button>
          )}
        </span>
      </nav>

      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
