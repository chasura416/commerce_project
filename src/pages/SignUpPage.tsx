import Header from "@/layout/Header";
import SignUpCard from "@/components/login/SignUpCard";

const SignUpPage = () => {
  return (
    <>
      <div className="max-w-[1280px] h-screen m-auto flex flex-col">
        <Header />
        <div className="flex justify-center items-center flex-1">
          <SignUpCard />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
