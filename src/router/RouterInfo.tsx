import Home from "@/pages/Home";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Cart from "@/pages/Cart";
import ProductDetail from "@/pages/ProductDetail";
import MyPage from "@/pages/MyPage";
import Seller from "@/pages/SellerPage";

type RouterItem = {
  path: string;
  element: JSX.Element;
  withAuthorization: boolean;
};

const RouterInfo: RouterItem[] = [
  { path: "/", element: <Home />, withAuthorization: false },
  { path: "/login", element: <Login />, withAuthorization: false },
  { path: "/signup", element: <SignUp />, withAuthorization: false },
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
