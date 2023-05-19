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
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";

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
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
