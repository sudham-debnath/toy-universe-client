/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
//   console.log(user);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="px-14 py-5 bg-gray-100">
        <div className="navbar flex">
          <div className="navbar-start">
            <Link to="/" className="text-3xl font-bold">
              Toy's Universe
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? " text-gray-500 text-xl font-bold " : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? " text-gray-500 text-xl font-bold " : ""
                  }
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? " text-gray-500 text-xl font-bold " : ""
                  }
                >
                  Register
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/chefs"
                  className={({ isActive }) =>
                    isActive ? " text-gray-500 text-xl font-bold" : ""
                  }
                >
                  Toys
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? " text-gray-500 text-xl font-bold " : ""
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="navbar-end">

            {/* Logged User Info */}
            {user?.email ? (
              <div className="flex items-center">
                <button
                  className="btn border-none"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <img
                  className="rounded-full w-14 ml-5"
                  src={user?.photoURL}
                  alt={user.email}
                  title={user.displayName}
                />
              </div>
            ) : (
              <Link to="/login">
                <li className="btn border-none">Login</li>
              </Link>
            )}
                      
                      

          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;