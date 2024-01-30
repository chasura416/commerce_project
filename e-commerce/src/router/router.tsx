import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/Login";

type RouterItem = {
  path: string;
  element: JSX.Element;
  withAuthorization: boolean;
};

const RouterInfo: RouterItem[] = [
  { path: "/", element: <Home />, withAuthorization: false },
  { path: "/account/login", element: <Login />, withAuthorization: false },
  { path: "/account/signup", element: <Signup />, withAuthorization: false },
  { path: "/my/page", element: <Login />, withAuthorization: true },
  { path: "/my/seller_center", element: <Signup />, withAuthorization: true },
  { path: "/my/cart", element: <Cart />, withAuthorization: true },
  {
    path: "/products/:id",
    element: <ProductDetail />,
    withAuthorization: false,
  },
];
export default RouterInfo;
