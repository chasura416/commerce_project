import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import Header from "@/layout/Header";
import SellerPage from "./SellerPage";
import ProductsCard from "@/components/products/ProductsCard";
import HomeCarousel from "@/components/home/HomeCarousel";

const Home = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
    });
  }, []);

  return (
    <div className="w-full flex flex-col m-5">
      <Header />
      <div className="flex justify-around">
        <div className="w-100 border-b">사이드 카테고리</div>
        <div className="w-100">
          <HomeCarousel />
        </div>
      </div>
      <div>상품목록</div>
      <ProductsCard />
      <SellerPage />
    </div>
  );
};

export default Home;
