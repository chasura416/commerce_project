import { Outlet, Navigate } from "react-router-dom";
import { auth } from "@/firebase";

const SellerRouter = () => {
  return auth.currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default SellerRouter;
