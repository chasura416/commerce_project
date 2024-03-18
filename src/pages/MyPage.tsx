import Header from "@/layout/Header";
import GlobalLayout from "@/layout/GlobalLayout";
import MyPageCard from "@/components/myPage/MypageCard";

const MyPage = () => {

  return (
    <>
      <GlobalLayout>
        <Header />
       <MyPageCard />
      </GlobalLayout>
    </>
  );
};

export default MyPage;
