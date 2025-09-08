import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
// Cách import truyền thống
// import Home from "../pages/Home.tsx";
// import About from "../pages/About.tsx";
// import Contact from "../pages/Contact.tsx";
import ProductDetail from "../pages/ProductDetail.tsx";
import Product from "../pages/Product.tsx";
import NotFound from "../pages/NotFound.tsx";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import Profile from "../pages/Profile.tsx";
import Order from "../pages/Order.tsx";
import ChangePassword from "../pages/ChangePassword.tsx";
import Login from "../pages/Login.tsx";

// Import theo lazy
// Lazy loading (tải chậm) là kỹ thuật chỉ tải một phần mã nguồn khi cần thiết,
// Thay vì tải toàn bộ ứng dụng ngay từ đầu.
const Home = React.lazy(() => import("../pages/Home.tsx"));
const About = React.lazy(() => import("../pages/About.tsx"));
const Contact = React.lazy(() => import("../pages/Contact.tsx"));

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "/product",
    element: <Product />,
  },

  // Demo Protected Route
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/product-detail/:productId/:productName", //Dynamic Router :productId/:productName
    element: <ProductDetail />,
  },

  {
    path: "*", // Những đường dẫn còn lại ( khác với đường dẫn đã định nghĩa )
    element: <NotFound />,
  },
  // Cơ chế Nested Route
  {
    path: "/user",
    element: <DefaultLayout />,
    children: [
      {
        index: true, // Chỉ định sẽ là nội dung của trang /user
        // path: "profile",
        element: <Profile />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
    ],
  },
]);

export default routers;
