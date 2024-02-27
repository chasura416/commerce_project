 import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card"
 import { Button } from "../ui/button";
 import { Label } from "../ui/label";
 import { Input } from "../ui/input";

import { Link } from "react-router-dom";
import useLogin from "@/hooks/login/useLogin";

const LoginCard = () => {
  const {email, password, onChange, signIn, logOut} = useLogin();

  return (
    <>
      <form>
        <Card>
          <CardHeader className="justify-center">
            <CardTitle>LOGIN</CardTitle>
            <CardDescription>로그인 하씨오</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label>ID</Label>
              <Input 
                className="border"
                type="email"
                value={email}
                name="email"
                onChange={onChange}
                required
              />
            </div>
            <div>
              <Label>PASSWORD</Label>
              <Input 
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
              <Button>회원가입</Button>
            </Link>
            <Link to = "/">
              <Button onClick={signIn}>로그인</Button>
            </Link>
            {/* <button onClick={logOut}>로그아웃</button> */}
            </div>
          </CardFooter>
        </Card>
      </form>
    </>
  );
};

export default LoginCard;
