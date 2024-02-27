import Header from "@/layout/Header";
import LoginCard from "@/components/login/LoginCard";


const Login = () => {

  return (
    <>
      <div className="max-w-[1280px] h-screen m-auto">
        <Header />
        <div className="flex justify-center items-center">
          <div>
            <LoginCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
