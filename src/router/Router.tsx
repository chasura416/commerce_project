import { Routes, Route } from "react-router-dom";
// import { Home, Login, Signup, MyPage, Cart } from "../pages";

import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Signup } from "@/pages/Signup";
import { MyPage } from "@/pages/MyPage";
import { Cart } from "@/pages/Cart";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/login" element = {<Login />} />
      <Route path="/signup" element = {<Signup />} />
      <Route path="/mypage" element = {<MyPage />} />
      <Route path="/cart" element = {<Cart />} />
    </Routes>
  )
}

export default Router;