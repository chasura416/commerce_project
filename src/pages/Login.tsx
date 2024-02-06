import { FormEvent, useEffect, useState } from "react";
import { auth } from "@/firebase";

import { 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
 } from "firebase/auth";

 import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card"
 
import Header from "@/layout/Header";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    })
  }, [])

  const onChange = (event: FormEvent) => {
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
    } catch(error: unknown) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error with signUp", errorCode, errorMessage)
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
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log("error with signIn", errorCode, errorMessage)
    }
  };
  const logOut = async (event: FormEvent) => {
    event.preventDefault();
    console.log("click logOut")

    await signOut(auth);
  };

  return (
    <div className="w-800">
      <Header />
      <form>
        <Card>
          <CardHeader className="justify-center">
            <CardTitle>로 그 인</CardTitle>
            <CardDescription>로그인 하씨오</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <label>id : </label>
              <input 
                className="border"
                type="email"
                value={email}
                name="email"
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label>password : </label>
              <input 
                className="border"
                type="password"
                value={password}
                name="password"
                onChange={onChange}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <div className="space-x-5">
            <Link to="/signup">
              <button>회원가입</button>
            </Link>

            <Link to = "/">
              <button onClick={signIn}>로그인</button>
            </Link>

            <button onClick={logOut}>로그아웃</button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Login;
