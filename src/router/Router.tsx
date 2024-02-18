import { Routes, Route } from "react-router-dom";
// import { Home, Login, Signup, MyPage, Cart } from "../pages";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import SignUpPage from "@/pages/SignUpPage";
import MyPage from "@/pages/MyPage";
import Cart from "@/pages/Cart";
import ProductUpload from "@/pages/ProductUpload";
import NotFound from "@/pages/NotFound";
import SellerPage from "@/pages/SellerPage";
import { ProductDetail } from "@/pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/upload" element={<ProductUpload />} />
      {/* <Route path="/productdetail/" element={<ProductDetail />} /> */}
      <Route path="/productdetail/:id" element={<ProductDetail />} />
      <Route path="/sellerpage" element={<SellerPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
