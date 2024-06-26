import useGetProduct from "@/hooks/upload/useGetProduct";
import dayjs from "dayjs";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Products } from "@/interface/Products";

const ProductsCategoryCard = ({id}: {id: string}) => {
  const { 
    products,
    like,
    handleLike, 
  } = useGetProduct();
  if(!products) return
  const data = products.filter((v) => v.category === id).slice(0, 4)
    
  return (
    <>
      <div className="grid grid-cols-4 max-w-7xl">
         {id === "all" ? (
          products?.slice(0, 4).map((product: Products) => (
          <div key={product?.id} className="flex mt-10">
            <div className="flex flex-col p-10 max-w-95">
              <Link to={`/productdetail/${product?.id}`}>
                <img 
                  src = {product?.imgUrl as string}
                  className="w-48 h-48 rounded-xl bg-cover bg-center object-cover cursor-pointer" 
                />
              </Link>
              <div className="flex-grow-1 p-4">
                <div className="text-lg truncate max-w-[100px]">{product?.title}</div>
                <div className="text-sm text-gray-500">{dayjs((product?.createdAt.seconds + product?.createdAt.nanoseconds / 1000000000) * 1000).format("YYYY.MM.DD")}</div>
                <div className="text-base">{product?.price}원</div>
                <div className="">
                  {like ?
                    <img
                      onClick={handleLike}
                      className="cursor-pointer"
                      src="src/assets/emptyHeart.png" alt="empty" width={25} 
                    /> 
                    :
                    <img 
                      onClick={handleLike}
                      className="cursor-pointer"
                      src="src/assets/fullHeart.png" alt="empty" width={25} 
                    />
                  }
                  <Link to={`/productdetail/${product?.id}`}>
                    <Button>상세보기</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
        ) : (
          data?.map((product: Products) => (
            <div key={product?.id} className="flex mt-10">
              <div className="flex flex-col p-10 max-w-95">
                <Link to={`/productdetail/${product?.id}`}>
                  <img 
                    src = {product?.imgUrl as string}
                    className="w-48 h-48 rounded-xl bg-cover bg-center object-cover cursor-pointer" 
                  />
                </Link>
                <div className="flex-grow-1 p-4">
                  <div className="text-lg truncate max-w-[100px]">{product?.title}</div>
                  <div className="text-sm text-gray-500">{dayjs((product?.createdAt.seconds + product?.createdAt.nanoseconds / 1000000000) * 1000).format("YYYY.MM.DD")}</div>
                  <div className="text-base">{product?.price}원</div>
                  <div className="">
                    {like ?
                      <img
                        onClick={handleLike}
                        className="cursor-pointer"
                        src="src/assets/emptyHeart.png" alt="empty" width={25} 
                      /> 
                      :
                      <img 
                        onClick={handleLike}
                        className="cursor-pointer"
                        src="src/assets/fullHeart.png" alt="empty" width={25} 
                      />
                    }
                    <Link to={`/productdetail/${product?.id}`}>
                      <Button>상세보기</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ProductsCategoryCard;
