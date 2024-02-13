import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import useGetProduct from "@/hooks/upload/useGetProduct";
import dayjs from "dayjs";


const ProductsCard = () => {
  const { 
    addProduct, 
    products: products,
    like,
    handleLike, 
  } = useGetProduct();

  // console.log(products.createdAt.seconds);

  // const date = (products?.createdAt.seconds + products?.createdAt.nanoseconds / 1000000000) * 1000
  // const now = (139000000 + 1707261661 / 1000000000) * 1000
  // console.log(now)

  const today = dayjs();
  console.log(today.format());
  console.log(dayjs().format("YYYY.MM.DD"));
  // const date = new Date();
  // console.log(date)

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{products[0]?.title}</CardTitle>
          <CardDescription>asdf</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      {products?.map((product) => (
        <div className="flex mt-10">
          <div className="flex p-10">
            <img className="w-48 h-48 rounded-xl bg-cover bg-center bg-[url('https://via.placeholder.com/350')] cursor-pointer" />
            <div className="flex-grow-1 p-4">
              <div className="text-lg">{product?.title}</div>
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsCard;
