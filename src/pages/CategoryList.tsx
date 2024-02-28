import Header from "@/layout/Header";
import CategoryHeader from "@/components/Catogory/CategoryHeader";
import ProductsListCard from "@/components/products/ProductListCard";
import HomeCategory from "@/components/home/HomeCategory";
import GlobalLayout from "@/layout/GlobalLayout";

const CategoryList = () => {
  return (
    <>
      <GlobalLayout>
        <Header />
        <div className="flex m-10 mr-2">
          <div className="w-1/6 mr-20">
            <HomeCategory />
          </div>
          <div>
            <CategoryHeader />
            <ProductsListCard />
          </div>
        </div>
      </GlobalLayout>
    </>
  );
};

export default CategoryList;
