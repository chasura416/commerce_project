import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  SignUpPage,
  MyPage,
  Cart,
  ProductUpload,
  NotFound,
  SellerPage,
  ProductDetail,
  CategoryList,
  ProductEdit,
} from "../pages";
import PrivateRouter from "./PrivateRouter";
import SellerRouter from "./SellerRouter";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/sellerpage" element={<SellerPage />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
      <Route path="/category/:id" element={<CategoryList />} />
      <Route path="/*" element={<NotFound />} />

      {/* Private Route */}
      <Route element={<PrivateRouter/>}>
        <Route path="/mypage" element={<MyPage />} />
        <Route element={<SellerRouter/>}>
          <Route path="/upload" element={<ProductUpload />} />
          <Route path="/productedit/:id" element={<ProductEdit />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
