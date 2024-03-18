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
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    })
  }, [])


  const signIn = async ({email, password}: User) => {
    console.log("click signIn")
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log("user with signIn", userCredential.user)
      navigate("/");
    } catch (error: unknown) {
      console.log("error with signIn")
    }
  };


  const logOut = async (event: FormEvent) => {
    event.preventDefault();
    console.log("click logOut")

    await signOut(auth);
  };

  return { signIn, logOut, navigate }
};

export default useLogin;
