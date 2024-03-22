import { FormEvent, useEffect } from "react";
import { auth } from "@/firebase";

import { 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
 } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { User } from "@/interface/User";

const useLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, () => {
    })
  }, [])


  const signIn = async ({email, password}: User) => {
    try {
       await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      navigate("/");
    } catch (error: unknown) {
      console.log("error with signIn")
    }
  };


  const logOut = async (event: FormEvent) => {
    event.preventDefault();

    await signOut(auth);
  };

  return { signIn, logOut, navigate }
};

export default useLogin;
