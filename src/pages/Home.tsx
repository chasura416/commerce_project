import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import Header from "@/layout/Header";
import HomeCarousel from "@/components/home/HomeCarousel";
import HomeCategory from "@/components/home/HomeCategory";
import HomeDetailCategory from "@/components/home/HomeDetailCategory";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {

  useEffect(() => {
    onAuthStateChanged(auth, () => {
    });
  }, []);

  return (
    <div className="max-w-[1280px] flex flex-col m-auto">
      <Header />
      <div className="flex mt-10 ml-10">
        <div className="w-1/6">
          <HomeCategory />
        </div>
        <div className="w-4/6 m-auto ml-48">
          <HomeCarousel />
        </div>
      </div>
      <div className="m-auto">
        <div>상품목록</div>
        귀찮아서 만든 버튼
        <Link to="/upload">
          <Button>임시 글쓰기 버튼</Button>
        </Link>
      </div>
        <HomeDetailCategory />
    </div>
  );
};

export default Home;
