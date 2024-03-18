import { useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { auth } from "@/firebase";

import { useNavigate } from "react-router-dom";

import { User } from "../../interface/User";

const useSignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, () => {
    });
  }, []);


  const signUp = async ({ username, email, password }: User ) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    if(!auth.currentUser) return
    await updateProfile(auth.currentUser, { displayName: username });
    navigate("/");
    return user;
  };


  //이거 바탕으로 회원가입 이름 받고 try catch로 리팩토링하자.
  // const signUp = async (event: FormEvent) => {
  //   event.preventDefault();

  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth, 
  //       email, 
  //       password
  //     );
  //     console.log("user", userCredential.user);
  //    // firebase는 회원가입 시 이메일과 비밀번호만 받기때문에 updateProfile함수를 활용해야한다.
  //     if (auth.currentUser) {
  //       await updateProfile(auth.currentUser,{
  //         displayName: userInfo.name,
  //       })
  //     }
  //   } catch(error: unknown) {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log("error with signUp", errorCode, errorMessage)
  //   }
  // };

  return { navigate, signUp };

 
};

export default useSignUp;
