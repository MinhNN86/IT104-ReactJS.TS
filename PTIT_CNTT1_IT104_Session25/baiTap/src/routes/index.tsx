import { createBrowserRouter } from "react-router-dom";
import Home_Ex01 from "../pages/Home_Ex01";
import Contact_Ex01 from "../pages/Contact_Ex01";
import Login_Ex03 from "../pages/Login_Ex03";
import Register_Ex04 from "../pages/Register_Ex04";
import NotFound_Ex05 from "../pages/NotFound_Ex05";
import NavLink_Ex06 from "../pages/NavLink_Ex06";
import Product from "../pages/Product";
import Detail from "../pages/Detail";
import CustomLink_Ex07 from "../pages/CustomLink_Ex07";
import ListUser_Ex08 from "../pages/ListUser_Ex08";
import UserDetail_Ex08 from "../pages/UserDetail_Ex08";
import Home_Ex10 from "../pages/Home_Ex10";

const routers = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home_Ex01 />,
  //   },
  {
    path: "/",
    element: <NavLink_Ex06 />,
    children: [
      {
        index: true,
        element: <Home_Ex01 />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
  {
    path: "/user",
    element: <ListUser_Ex08 />,
  },
  {
    path: "user/:id",
    element: <UserDetail_Ex08 />,
  },
  {
    path: "/home-page",
    element: <Home_Ex01 />,
  },
  {
    path: "/contact",
    element: <Contact_Ex01 />,
  },
  {
    path: "/login",
    element: <Login_Ex03 />,
  },
  {
    path: "/register",
    element: <Register_Ex04 />,
  },
  {
    path: "home-pages",
    element: <Home_Ex10 />,
  },
  {
    path: "/custom-link",
    element: <CustomLink_Ex07 />,
  },
  {
    path: "*",
    element: <NotFound_Ex05 />,
  },
]);

export default routers;
