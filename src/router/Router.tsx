import { Routes, Route } from "react-router-dom";
import { Home, Login, SignUpPage, MyPage, Cart, ProductUpload, NotFound, SellerPage, ProductDetail, CategoryList, } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/upload" element={<ProductUpload />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
      <Route path="/category/:id" element={<CategoryList />} />
      <Route path="/sellerpage" element={<SellerPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
