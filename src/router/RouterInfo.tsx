import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Cart from "@/pages/Cart";
import ProductDetail from "@/pages/ProductDetail";
import MyPage from "@/pages/MyPage";
import Seller from "@/pages/Seller";

type RouterItem = {
  path: string;
  element: JSX.Element;
  withAuthorization: boolean;
};


const RouterInfo: RouterItem[] = [
  { path: "/", element: <Home />, withAuthorization: false },
  { path: "/login", element: <Login />, withAuthorization: false },
  { path: "/signup", element: <Signup />, withAuthorization: false },
  { path: "/mypage", element: <MyPage />, withAuthorization: true },
  { path: "/my/seller_center", element: <Seller />, withAuthorization: true },
  { path: "/my/cart", element: <Cart />, withAuthorization: true },
  {
    path: "/products/:id",
    element: <ProductDetail />,
    withAuthorization: false,
  },
];
export default RouterInfo;
