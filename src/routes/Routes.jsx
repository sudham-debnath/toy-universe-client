/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Blogs from "./../pages/Blogs/Blogs";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import App from "../App";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "",
        element: (
          <PrivateRoute>
           
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;