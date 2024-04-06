import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { ReactNode, useState, createContext, useEffect } from "react";
import { auth } from "@/firebase";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export interface AuthContextProps {
  user: User | string | null;
  createUser: (email: string, password: string) => void;
  loginUser: (email: string, password: string) => void;
  logOut: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  user: "", 
  createUser: () => {},
  loginUser: () => {},
  logOut: () => {},
  loading: false,
});

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  console.log(user)

  const createUser = (email: string, password: string) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email: string, password: string) => {
    setLoading(true);
    localStorage.setItem("user", "login");
    signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(false);
    setUser(null);
    signOut(auth);
    navigate("/login"); // Redirect to the login page after logout
    localStorage.removeItem("user");
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
};

export default AuthProvider;
