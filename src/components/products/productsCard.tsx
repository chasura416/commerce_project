import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import useGetProduct from "@/hooks/upload/useGetProduct";


const ProductsCard = () => {
  const { addProduct, products: products } = useGetProduct();

  // console.log(products[1].id);

  return (
    <>
      <div className="mt-10">
        <div className="flex p-10">
          <img className="w-48 h-48 rounded-xl bg-cover bg-center bg-[url('https://via.placeholder.com/350')] cursor-pointer" />
          <div className="flex-grow-1 p-4">
            <div className="text-lg">{products[0]?.title}</div>
            <div className="text-sm text-gray-500">2024년 2월 7일</div>
            <div className="text-base">{products[0]?.price}원</div>
            <div className="">좋아요 버튼</div>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default ProductsCard;
