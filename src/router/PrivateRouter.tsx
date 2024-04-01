import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { AuthContext } from "@/context/auth/AuthContext";

interface Props {
  children: ReactNode;
}


const PrivateRouter = ({children}: Props) => {
  const { user, loading } = useContext(AuthContext); 
  
  if(loading) {
    return <span className="loading loading-dots"></span>
  }

  if(user) {
    return children;
  }

  return <Link to="/login">{children}</Link>
}

export default PrivateRouter