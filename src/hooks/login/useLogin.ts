import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { auth } from "@/firebase";

import { 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
 } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { User } from "@/interface/User";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const signIn = async ({email, password}: User) => {
    // event.preventDefault();
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

  return {onChange, signIn, logOut, navigate, email, password }
};

export default useLogin;
