import { Routes, Route } from "react-router-dom";
// import { Home, Login, Signup, MyPage, Cart } from "../pages";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import MyPage from "@/pages/MyPage";
import Cart from "@/pages/Cart";
import NotFound from "@/pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
