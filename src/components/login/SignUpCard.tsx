import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Label } from "../ui/label";
import { Input } from "../ui/input";

import useSignUp from "@/hooks/login/useSignUp";

import { Link } from "react-router-dom";

const SignUpCard = () => {
  const { 
    navigate, 
    onChange, 
    handleSubmit, 
    signUp, 
    email, 
    password, 
    emailErr, 
    passwordErr, 
    emailMessage, 
    passwordMessage 
  } = useSignUp();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader className="justify-center">
            <CardTitle>회원가입</CardTitle>
            <CardDescription>회원가입 하씨오</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label>ID</Label>
              <Input
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
              <Label>PASSWORD</Label>
              <Input
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
    </>
  );
};

export default SignUpCard;
