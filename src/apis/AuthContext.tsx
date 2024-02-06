import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { ReactNode, useState, createContext, useEffect } from "react"
import { auth } from "@/firebase";
import { User } from "firebase/auth";

interface Props {
  children: ReactNode;
}

interface AuthContextProps {
  user: User;
  loading: boolean;
}

export const AuthContext = createContext({
  createUser: (_email: string, _password: string) => {},
  user: localStorage.getItem("user"),
  loginUser: (_email: string, _password: string) => {},
  logOut: () => {},
  loading: true,
});

import { useNavigate } from "react-router-dom";

const AuthProvider = ({children}: Props) => {
  const [ user, setUser ] = useState<string | null>(null)
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const createUser = (email: string, password: string) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email: string, password: string) => {
    setLoading(true);
    localStorage.setItem("user", "login")
    signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    setUser(null);
    signOut(auth);
    navigate("/login"); // Redirect to the login page after logout
    localStorage.removeItem("user")
    
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authValue = {
    createUser, 
    user,
    loginUser,
    logOut,
    loading,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}

export default AuthProvider;