import { createBrowserRouter } from "react-router-dom";
import Layout_Ex01 from "../components/Ex01/Layout_Ex01";
import Home_Ex01 from "../components/Ex01/Home_Ex01";
import About_Ex01 from "../components/Ex01/About_Ex01";
import Contact_Ex01 from "../components/Ex01/Contact_Ex01";
import ProductList_Ex02 from "../components/Ex02/ProductList_Ex02";
import ProductDetail_Ex02 from "../components/Ex02/ProductDetail_Ex02";
import NotFound from "../components/NotFound";
import TaskList_Ex03 from "../components/Ex03/TaskList_Ex03";
import TaskDetail_Ex03 from "../components/Ex03/TaskDetail_Ex03";
import ProductList_Ex04 from "../components/Ex04/ProductList_Ex04";
import Layout_Ex05 from "../components/Ex05/Layout_Ex05";
import Posts_Ex05 from "../components/Ex05/Posts_Ex05";
import PostDetail_Ex05 from "../components/Ex05/PostDetail_Ex05";
import Layout_Ex06 from "../components/Ex06/Layout_Ex06";
import Home_Ex06 from "../components/Ex06/Home_Ex06";
import Detail_Ex06 from "../components/Ex06/Detail_Ex06";
import Product_Ex06 from "../components/Ex06/Product_Ex06";
import Home_Ex07 from "../components/Ex07/Home_Ex07";
import About_Ex07 from "../components/Ex07/About_Ex07";
import Register_Ex08 from "../components/Ex08/Register_Ex08";
import Login_Ex08 from "../components/Ex08/Login_Ex08";

const routers = createBrowserRouter([
  {
    path: "/ex01",
    element: <Layout_Ex01 />,
    children: [
      {
        index: true,
        element: <Home_Ex01 />,
      },
      {
        path: "about",
        element: <About_Ex01 />,
      },
      {
        path: "contact",
        element: <Contact_Ex01 />,
      },
    ],
  },
  {
    path: "/products-ex02",
    element: <ProductList_Ex02 />,
  },
  {
    path: "/products-ex02/:idProduct",
    element: <ProductDetail_Ex02 />,
  },
  {
    path: "/task-list-ex03",
    element: <TaskList_Ex03 />,
  },
  {
    path: "/task-list-ex03/:idTask",
    element: <TaskDetail_Ex03 />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/products-ex04",
    element: <ProductList_Ex04 />,
  },
  {
    path: "/blog-ex05",
    element: <Layout_Ex05 />,
    children: [
      {
        index: true,
        element: <Posts_Ex05 />,
      },
      {
        path: ":id",
        element: <PostDetail_Ex05 />,
      },
    ],
  },
  {
    path: "/ex06",
    element: <Layout_Ex06 />,
    children: [
      {
        index: true,
        element: <Home_Ex06 />,
      },
      {
        path: "product",
        element: <Product_Ex06 />,
      },
      {
        path: "detail",
        element: <Detail_Ex06 />,
      },
    ],
  },
  {
    path: "/ex07",
    element: <Home_Ex07 />,
  },
  {
    path: "/ex07/about",
    element: <About_Ex07 />,
  },
  {
    path: "/ex08",
    children: [
      {
        path: "register",
        element: <Register_Ex08 />,
      },
      {
        path: "login",
        element: <Login_Ex08 />,
      },
    ],
  },
]);

export default routers;
