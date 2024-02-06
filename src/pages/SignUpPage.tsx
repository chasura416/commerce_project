import { FormEvent, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/firebase";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"


import Header from "@/layout/Header";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
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

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader className="justify-center">
            <CardTitle>회원가입</CardTitle>
            <CardDescription>회원가입 하씨오</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <label>id : </label>
              <input
                className="border pl-2"
                placeholder="아이디를 입력하씨오"
                type="email"
                value={email}
                name="email"
                onChange={onChange}
                required
              />
            </div>
            {emailErr && <p className="text-red-500">{emailMessage}</p>}
            {emailErr === false && <p className="text-blue-600">{emailMessage}</p>}
            <div>
              <label>비밀번호 : </label>
              <input
                className="border pl-2"
                placeholder="비밀번호를 입력하씨오"
                type="password"
                value={password}
                name="password"
                onChange={onChange}
                required
              />
            </div>
            {passwordErr && <p className="text-red-500">{passwordMessage}</p>}
            {passwordErr === false && <p className="text-blue-500">{passwordMessage}</p>}
            {/* <div>
              <label>비밀번호 확인 : </label>
              <input
                className="border pl-2"
                placeholder="다시 한번 더 입력하씨오"
                type="password"
                value={passwordCheck}
                name="passwordCheck"
                onChange={onChange}
                required
              />
            </div> */}
          </CardContent>
          <CardFooter className="justify-center">
            <div className="space-x-5">
              <Link to="/">
                <Button variant="outline" onClick={signUp}>회원가입</Button>
              </Link>
              <Button variant="outline">Button</Button>
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                취소
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default SignUpPage;
