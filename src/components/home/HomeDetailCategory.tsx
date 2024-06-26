import { FLATFORMList } from "../Catogory/categoryFlatform";
import ProductsCategoryCard from "../products/ProductCategoryCard";

import { useNavigate } from "react-router-dom";

const HomeDetailCategory = () => {
  const navigate = useNavigate();

  return (
    <>
      {FLATFORMList.map(({ title, id }) => (
        <section key={title} className="flex flex-col w-full border rounded-xl mb-10">
          <div className="flex justify-between p-5 pl-8 pr-10">
            <div className="border-b text-3xl">{title}</div>
            <div 
              className="cursor-pointer"
              onClick={()=>{
                navigate(`/category/${id}`);
              }}
            >
              더 보기
            </div>
          </div>
          <ProductsCategoryCard id={id}/>
        </section>
      ))}
    </>
  );
};

export default HomeDetailCategory;
