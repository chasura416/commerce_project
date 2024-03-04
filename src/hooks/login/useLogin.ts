import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { auth } from "@/firebase";

import { 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
 } from "firebase/auth";

import { useNavigate } from "react-router-dom";
// import { userInfo } from "os";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    })
  }, [])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const signUp = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password
      );
      console.log("user", userCredential.user);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser,{
          displayName: auth.currentUser.displayName,
        })
      }
    } catch(error: unknown) {
        console.log("error with signUp")
    }
  };
  const signIn = async (event: FormEvent) => {
    event.preventDefault();
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

  return {onChange, signUp, signIn, logOut, email, password }
};

export default useLogin;
