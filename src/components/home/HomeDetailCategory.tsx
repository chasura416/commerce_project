import { FLATFORMList } from "../Catogory/categoryFlatform";
import ProductsListCard from "../products/ProductListCard";
import { Link } from "react-router-dom";

const HomeDetailCategory = () => {
  return (
    <>
      {FLATFORMList.map(({ title }) => (
        <section key={title} className="flex flex-col w-full">
          <div className="flex justify-between">
            <div className="border-b text-2xl">{title}</div>
            <Link to="{/category}">
              <div className="cursor-pointer">더 보기</div>
            </Link>
          </div>
          <ProductsListCard />
        </section>
      ))}
    </>
  );
};

export default HomeDetailCategory;
