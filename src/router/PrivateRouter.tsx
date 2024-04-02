import { Outlet, Navigate } from "react-router-dom";
import { auth } from "@/firebase";

// interface PrivateRouteProps {
//   path: string;
//   element: React.ReactElement;
//   // children: ReactNode;
// }

const PrivateRouter = () => {
  return auth.currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
