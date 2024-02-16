import { FormEvent, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/firebase";

import { Link, useNavigate } from "react-router-dom";

const useSignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [passwordErr, setPasswordErr] = useState<boolean>(false);
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setpasswordMessage] = useState<string>("");
  const [pwdCheckMessage, setpwdCheckMessage] = useState<string>("");
  const navigate = useNavigate();

  
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    
  
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;

    const validateEmail = () => {
      if (!emailRegEx.test(email)) {
        setEmailErr(true);
        setEmailMessage("이메일 형식에 맞춰주씨오");
        // return alert("email failure");
      } else {
        setEmailErr(false);
        setEmailMessage("사용 가능하오");
        // alert("email success");
      }
    };
  
    const validatePass = () => {
      if (!passwordRegex.test(password)) {
        setPasswordErr(true);
        setpasswordMessage("숫자, 영문, 특수문자를 포함하여 최소 8자를 입력해주씨오")
        // return alert("password failure");
      } else {
        setPasswordErr(false);
        setpasswordMessage("사용 가능하오")
      //  alert("password success");
      }
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      validateEmail();
      validatePass();
    };


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    });
  }, []);

  const onChange = (event: FormEvent) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
      validateEmail();
    }
    if (name === "password") {
      setPassword(value);
      validatePass();
    }
    if (name === "passwordCheck") {
      setPasswordCheck(value);
      
    }
  };

  const signUp = (event: FormEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error: unknown) => {
        console.log(error);
      });
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

  return {validateEmail, validatePass,onChange,handleSubmit,signUp, emailErr,passwordErr,emailMessage, passwordMessage, emailRegEx, passwordRegex }

 
};

export default useSignUp;
