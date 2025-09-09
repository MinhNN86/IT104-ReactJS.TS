import { createBrowserRouter } from "react-router-dom";
import ProductDetail_Ex01 from "../components/ProductDetail_Ex01";
import Student_Ex02 from "../components/Student_Ex02";
import Student_Ex03 from "../components/Student_Ex03";
import Account_Ex05 from "../components/Account_Ex05";
import Login_Ex05 from "../components/Login_Ex05";
import PrivateRouter_Ex05 from "../components/PrivateRouter_Ex05";
import Teams from "../components/Teams";
import TeamsIndex from "../components/TeamsIndex";
import Team from "../components/Team";
import LazyLoadComp from "../components/LazyLoadComp";
import Layout_Ex09 from "../components/Layout_Ex09";
import Contact_Ex09 from "../components/Contact_Ex09";
import About_Ex09 from "../components/About_Ex09";
import Post_Ex09 from "../components/Post_Ex09";
import ListProduct_Ex10 from "../components/ListProduct_Ex10";
import ProductDetail_Ex10 from "../components/ProductDetail_Ex10";

const routers = createBrowserRouter([
  {
    path: "/product/:id",
    element: <ProductDetail_Ex01 />,
  },
  {
    path: "/student/:name",
    element: <Student_Ex02 />,
  },
  {
    path: "/student-search",
    element: <Student_Ex03 />,
  },
  {
    path: "/private-router",
    element: <PrivateRouter_Ex05 />,
  },
  {
    path: "/login",
    element: <Login_Ex05 />,
  },
  {
    path: "/account-page",
    element: <Account_Ex05 />,
  },
  {
    path: "/teams",
    element: <Teams />,
    children: [
      {
        index: true,
        element: <TeamsIndex />,
      },
      {
        path: ":teamId",
        element: <Team />,
      },
    ],
  },
  {
    path: "/lazy-load",
    element: <LazyLoadComp />,
  },
  {
    path: "/ex09",
    element: <Layout_Ex09 />,
    children: [
      {
        index: true,
        element: <Contact_Ex09 />,
      },
      {
        path: "about",
        element: <About_Ex09 />,
      },
      {
        path: "post",
        element: <Post_Ex09 />,
      },
    ],
  },
  {
    path: "/products",
    element: <ListProduct_Ex10 />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetail_Ex10 />,
  },
]);

export default routers;
