import { FLATFORMList } from "../Catogory/categoryFlatform";
import ProductsListCard from "../products/ProductListCard";

const HomeDetailCategory = () => {
  return (
    <>
      {FLATFORMList.map(({title}) => (
        <section key={title} className="flex flex-col w-full">
          <div className="flex justify-between">
            <div className="border-b text-2xl">{title}</div>
            <div>더 보기</div>
          </div>
          <ProductsListCard />
        </section>
      ))}
    </>
  );
};

export default HomeDetailCategory;
