import { Outlet, Navigate } from "react-router-dom";
import { auth } from "@/firebase";

const PrivateRouter = () => {
  return auth.currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
