import { FormEvent, useEffect, useState } from "react";
import { 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
 } from "firebase/auth";
import { auth } from "@/firebase";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const user = auth.currentUser;

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

  const signUp = (event: FormEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error: unknown) => {
        console.log(error)
      })
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
      console.log(userCredential)
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
    <div className="App">

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <h2>로그인 페이지</h2>
      <form>
        <div>
          <label>이메일 : </label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={onChange}
            required
          ></input>
        </div>
        <div>
          <label>비밀번호 : </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={onChange}
            required
          ></input>
        </div>
        <div className="flex gap-3">
        <button onClick={signUp}>회원가입</button>
        <button onClick={signIn}>로그인</button>
        <button onClick={logOut}>로그아웃</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
