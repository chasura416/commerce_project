import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import Header from "@/layout/Header";
import ProductsCard from "@/components/products/ProductsCard";
import HomeCarousel from "@/components/home/HomeCarousel";
import HomeCategory from "@/components/home/HomeCategory";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    });
  }, []);

  return (
    <div className="w-full flex flex-col m-5">
      <Header />
      <div className="flex m-10">
        <div className="w-1/6">
          <div className="w-100 border-b">사이드 카테고리</div>
          <HomeCategory />
        </div>
        <div className="ml-10 w-4/6">
          <HomeCarousel />
        </div>
      </div>
      <div>상품목록</div>
      귀찮아서 만든 버튼
      <Link to="/upload">
        <Button>임시 글쓰기 버튼</Button>
      </Link>
      <div className="flex flex-wrap justify-center">
        <ProductsCard />
      </div>
    </div>
  );
};

export default Home;
